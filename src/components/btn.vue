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
	/*			WebFont.load({
					google: {
						families: [family]
					}
				});*/

	return family
}

function pickContrastedColor(rules, fg = 0, bg = 0): number {
	bg = getColor()
	fg = getColor();
	const contrast = APCAcontrast(fg, bg)
	if (Math.abs(contrast) < 20 || contrast === 'Y∆LOW') {
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
function getLineStyle() {
	const array = ["dashed", "dotted", "double", "groove", "hidden", "inset", "none", "outset", "ridge", "solid"]
	return array[randIndex(array)]
}

function getTextTransform() {
	const array = ["capitalize", "full-size-kana", "full-width", "lowercase", "none", "uppercase"]
	return array[randIndex(array)] as CSS.Property.TextTransform
}

function getType() {
	const array = ["classic", "vertical", "clipped", "noBorder"]
	return array[randIndex(array)]
}


function createStyle(id, head, rules) {
	const newSheet = document.createElement("style")
	newSheet.classList.add('sheet-' + id)
	head.appendChild(newSheet)
	newSheet.textContent = rules
}



function changeRules(id) {
	buttonStyle.default = generateRules()
	const rules = jss.createStyleSheet({
		'@global': {
			['.' + id + ' .btn-child']:
				buttonStyle.default
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
}


function generateRules(): CSS.Properties {
	let rules = {
		textShadow: "",
		textTransform: getTextTransform(),
		fontFamily: font(),
		padding: getLengths(0, 20, 'symmetric'),
		borderTopColor: getColor(),
		borderBottomColor: getColor(),
		borderLeftColor: getColor(),
		borderRightColor: getColor(),
		borderRadius: getLengths(0, 30),
		borderStyle: getLineStyle(),
		borderWidth: getLengths(0, 6),
		contentVisibility: 'auto',
		cursor: 'pointer',
		fontSize: '1.2em',
/*		height: randInt(20, 50) + 'px',
*/		width: randInt(120, 300) + 'px',
		userSelect: 'none',
		margin: '1em auto',
		textAlign: 'center'
	} as CSS.Properties

	pickContrastedColor(rules)

	return rules
}

const buttonStyle = {
	default: generateRules(),
	hover: generateRules(),
	type: 'button'
}


jss.setup(preset())
const button = ref<HTMLElement | null>(null)!

onMounted(() => {
	const id = button.value?.className
	changeRules(id)
})


function changeRuleshandler(e) {
	changeRules((e.currentTarget as HTMLElement).className)
}



</script>

<template>
	<div tabindex="0" aria-label="activer ce bouton sert à changer son style de manière aléatoire"
		role="button" @click="changeRuleshandler" v-on:keyup:enter="changeRuleshandler"
		v-on:keyup:space="changeRuleshandler" ref="button">

		<div class="btn-child">Bouton</div>
	</div>
</template>


<style>.btn {
	filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
}

.btn-child {
	clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}

/*
.btn-child:focus {
	outline: 3px ridge black;
}

.btnhover {
	background-color: buttonStyle.value[ "hover-background" ];
}*/</style>
