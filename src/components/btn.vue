<script  lang='ts' setup>
import "construct-style-sheets-polyfill"

import { ref, type Ref, onMounted } from 'vue'
import { APCAcontrast } from '../apca.js'
import { toRGB } from '../convert.js'
import Color from '../color';
import type * as CSS from 'csstype';

import jss, { SheetsManager } from 'jss'
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

function getLengths(min: number, max: number) {
	return `
	${randInt(min, max)}px
	${randInt(min, max)}px
	${randInt(min, max)}px
	${randInt(min, max)}px`
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

function pickContrastedColor(fg = 0, bg = 0): number {
	bg = getColor()
	fg = getColor();
	const contrast = APCAcontrast(fg, bg)
	if (Math.abs(contrast) < 20 || contrast === 'Y∆LOW') {
		//console.log('contraste trop faible :   ' + contrast)
		return pickContrastedColor(fg, bg)
	}
	else {
		buttonStyleRef.value.meta.contrast = contrast
		buttonStyleRef.value.default.color = fg.toString()
		buttonStyleRef.value.default.backgroundColor = bg.toString()
		//console.log('contraste selon le nouvel algo APCA :   ' + contrast)
		return contrast
	}
}



function createStyle(id, head, rules) {
	const newSheet = document.createElement("style")
	newSheet.classList.add('sheet-' + id)
	head.appendChild(newSheet)
	newSheet.textContent = rules
}


function change(id) {
	/*	buttonStyleRef.value.hover.backgroundColor = getColor()
		buttonStyleRef.value.default.padding = getLengths(0, 20)
		buttonStyleRef.value.default.fontFamily = font()
	*/

	buttonStyleRef.value.default = generateRules()
	pickContrastedColor()

	//buttonStyleRef.value.default['&hover'] = generateRules()
	const rules = jss.createStyleSheet({
		'@global': {
			['.' + id]:
				buttonStyleRef.value.default

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


	/*
				//const values = ["0%", '25%','50%','75%','100%']
				const values = [25, -25, 0]

				const upperRight = 100 + values[randInt(0, values.length - 1)] + '% 0%,'

				buttonStyleRef.value['path'] =
					upperRight +
					'100% 50%,' +
					'100% 100%,' +
					'0% 100%,' +
					'0% 50%,' +
					'0% 0%'*/
}

function getBorderStyle(): CSS.Property.BorderStyle {

	return ""
}

/*
function createRules(): CSS.Properties {
	const properties: CSS.Properties = {}

	for (const property in properties) {
		properties[property] =
			pro	perties[property]
	}
	return properties


}*/

function getLineStyle() {
	const style = ["dashed", "dotted", "double", "groove", "hidden", "inset", "none", "outset", "ridge", "solid"]
	return style[randIndex(style)]
}

function generateRules(): CSS.Properties {
	return {
		fontFamily: font(),
		padding: getLengths(0, 20),
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
		width: randInt(120, 300) + 'px',
		userSelect: 'none',
		margin: '1em auto',
		textAlign: 'center'
	}
}

const buttonStyleRef = ref({
	default: generateRules(),
	hover: generateRules(),
	meta: {
		contrast: 0
	}
})


jss.setup(preset())


const button = ref<HTMLElement | null>(null)!

onMounted(() => {
	const id = button.value?.className
	change(id)
})


</script>

<template>
	<div
		ref="button"
		tabindex="0"
		aria-label="activer ce bouton sert à changer son style de manière aléatoire"
		role="button"
		@click="(e) => { change((e.currentTarget as HTMLElement).className) }"
		v-on:keyup:enter="(e) => { change((e.currentTarget as HTMLElement).className) }"
	>
		<div class="btn-child">Bouton</div>
	</div>
</template>


<style>
.btn {
	filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1))
		drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
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
}*/
</style>
