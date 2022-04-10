<script  lang='ts' setup>
import "construct-style-sheets-polyfill"

import { ref, type Ref, onMounted } from 'vue'
import { APCAcontrast } from '../apca.js'
import Color from '../color';
import type * as CSS from 'csstype';
import jss from 'jss'
import preset from 'jss-preset-default'

const props = defineProps(['fontsList'])

function randInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rand(min, max) {
	return (Math.random() * (max - min) + min).toPrecision(2);
}

function randIndex(ar) {
	return ar.length * Math.random() | 0
}

function getColor() {
	const l = randInt(0, 100)
	const c = randInt(0, 132)
	const h = randInt(0, 360)
	const color = new Color(
		`lch(${l}% ${c} ${h})`
	).to('srgb').toString({ commas: true, precision: 0, format: 'hex' })
	return color
}

function getLengths(min: number, max: number, type = "random") {
	let top = randInt(min, max)
	let bottom = randInt(min, max)
	let left = randInt(min, max)
	let right = randInt(min, max)

	if (type === 'symmetric') {
		top = bottom
		left = right
	}
	return `
	${top}px
	${right}px
	${bottom}px
	${left}px`
}

function font() {
	const list = props.fontsList
	const family = list[randIndex(list)].family
	//@ts-ignore
	WebFont.load({
		google: {
			families: [family]
		}
	});

	return family
}

function pickContrastedColor(rules, fg = 0, bg = 0): number {
	bg = getColor()
	fg = getColor();
	const contrast = APCAcontrast(fg, bg)
	if (Math.abs(contrast) < 30 || contrast === 'Y∆LOW') {
		//console.log('contraste trop faible :   ' + contrast)
		return pickContrastedColor(rules, fg, bg)
	}
	else {
		rules.color = fg.toString()
		rules.backgroundColor = bg.toString()
		//console.log('contraste selon le nouvel algo APCA :   ' + contrast)
		return contrast
	}
}

function getProperty(prop) {

	let array: string[] = []
	switch (prop) {
		case "cursor":
			array = ["alias", "all-scroll", "auto", "cell", "col-resize", "context-menu", "copy", "crosshair", "default", "e-resize", "ew-resize", "grab", "grabbing", "help", "move", "n-resize", "ne-resize", "nesw-resize", "no-drop", "not-allowed", "ns-resize", "nw-resize", "nwse-resize", "pointer", "progress", "row-resize", "s-resize", "se-resize", "sw-resize", "text", "vertical-text", "w-resize", "wait", "zoom-in", "zoom-out"]
			break;
		case "type":
			array = ["classic", "vertical", "clipped", "noBorder"]
			break;
		case 'lineStyle':
			array = ["dashed", "dotted", "double", "groove", "hidden", "inset", "none", "outset", "ridge", "solid"]
			break
		case 'textTransform':
			array = ["capitalize", "full-size-kana", "full-width", "lowercase", "none", "uppercase"]
			break
		case '':
			array = []
			break
		default:
			break;
	}

	return array[randIndex(array)]

}

function createStyle(id, head, rules) {
	const newSheet = document.createElement("style")
	newSheet.classList.add('sheet-' + id)
	head.appendChild(newSheet)
	newSheet.textContent = rules
}


function changeRules(id: string) {
	buttonStyle.default = generateRules(getProperty('type'))

	const buttonWrapper = {
		filter: `drop-shadow(0px 1px ${randInt(0, 3)}px rgba(0, 0, 0, 0.1)) drop-shadow(0px ${randInt(0, 3)}px ${randInt(0, 3)}px rgba(0, 0, 0, 0.2));`
	} as CSS.Properties

	const rules = jss.createStyleSheet({
		'@global': {
			['.' + id + ' .btn-child']: buttonStyle.default,
			['.' + id]: buttonWrapper
		}
	})
		.toString()

	const head = document.head
	const currentSheet = head.querySelector(".sheet-" + id)

	if (currentSheet) {
		currentSheet.setAttribute("disabled", 'true')
		head.removeChild(currentSheet)
		createStyle(id, head, rules)
	}
	else {
		createStyle(id, head, rules)
	}

}



function generateRules(type = "classic"): CSS.Properties {
	let rules = {
		textShadow: "",
		letterSpacing: rand(0.1, 3) + 'px',
		boxShadow: "",
		textEmphasis: "",
		textTransform: getProperty('textTransform'),
		fontFamily: font(),
		cursor: getProperty('cursor'),
		//		padding: getLengths(0, 20, 'symmetric'),
		contentVisibility: 'auto',
		fontSize: '1.2em',
		height: randInt(20, 50) + 'px',
		width: randInt(120, 300) + 'px',
		userSelect: 'none',
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	} as CSS.Properties

	const borderStyle = ['colorful', 'random', 'colorful', "bevel", "rablet", "parallelogram", 'double']

	const factor = randInt(5, 20)
	const a = 100 - factor
	const b = factor
	switch (borderStyle[randIndex(borderStyle)]) {
		case 'random':
			rules.borderTopColor = getColor()
			rules.borderBottomColor = getColor()
			rules.borderLeftColor = getColor()
			rules.borderRightColor = getColor()
			rules.borderRadius = getLengths(0, 30)
			rules.borderStyle = getProperty('lineStyle')
			rules.borderWidth = getLengths(0, 6)
			break;
		case 'double':
			rules.borderTopColor = getColor()
			rules.borderBottomColor = getColor()
			rules.borderLeftColor = getColor()
			rules.borderRightColor = getColor()
			rules.borderRadius = getLengths(0, 30)
			rules.borderStyle = getProperty('lineStyle')
			rules.borderWidth = getLengths(0, 6)
			rules.outlineColor = getColor()
			rules.outlineOffset = randInt(2, 10) + "px"
			rules.outlineStyle = 'solid'
			rules.outlineWidth = randInt(2, 10) + "px"
			break;
		case 'colorful':
			rules.borderColor = getColor() + getColor() + getColor() + getColor()
			rules.borderStyle = 'solid'
			rules.borderWidth = randInt(2, 5) + "px"
			break;
		case 'bevel':
			rules.clipPath = `polygon(${b}% 0%, ${a}% 0%, 100% ${b}%, 100% ${a}%, ${a}% 100%, ${b}% 100%, 0% ${a}%, 0% ${b}%);`
			break;
		case 'rablet':
			rules.clipPath = `polygon(0% ${b}%, ${b}% ${b}%, ${b}% 0%, ${a}% 0%, ${a}% ${b}%, 100% ${b}%, 100% ${a}%, ${a}% ${a}%, ${a}% 100%, ${b}% 100%, ${b}% ${a}%, 0% ${a}%);`
			break;
		case 'parallelogram':
			rules.clipPath = `polygon(${b}% 0%, 100 0%, ${a}% 100%, 0% 100%);`
			break;
		default:
			break;
	}


	switch (type) {
		case "vertical":
			const textOrientation = ["mixed", "sideways", "upright"] as CSS.Property.TextOrientation[]
			rules.writingMode = "vertical-lr";
			rules.textOrientation = textOrientation[randIndex(textOrientation)]
			rules.width = randInt(20, 50) + 'px'
			rules.height = randInt(120, 300) + 'px'
			break;
		/*		case "clipped":
					//const values = ["0%", '25%','50%','75%','100%']
					const values = [25, -25, 0]
					const upperRight = 100 + values[randInt(0, values.length - 1)] + '% 0%,'
					buttonStyle['path'] =
						upperRight +
						'100% 50%,' +
						'100% 100%,' +
						'0% 100%,' +
						'0% 50%,' +
						'0% 0%'
					break;*/
		default:
			break;
	}
	pickContrastedColor(rules)

	return rules
}

const buttonStyle = {
	default: generateRules(),
	hover: generateRules(),
}

jss.setup(preset())
const button = ref<HTMLElement | null>(null)!

onMounted(() => {
	const id = button.value?.className!
	changeRules(id)
})

function changeRuleshandler(e) {
	changeRules((e.currentTarget as HTMLElement).className)
}

</script>

<template>
	<div id="btn-wrapper" tabindex="0"
		aria-label="activer ce bouton sert à changer son style de manière aléatoire" role="button"
		@click="changeRuleshandler" v-on:keyup:enter="changeRuleshandler"
		v-on:keyup:space="changeRuleshandler" ref="button">

		<div class="btn-child">Bouton</div>
	</div>
</template>


<style>
/*
.btn-child:focus {
	outline: 3px ridge black;
}

.btnhover {
	background-color: buttonStyle.value[ "hover-background" ];
}*/
</style>
