<script setup lang='ts'>

import { ref } from 'vue'
import { APCAcontrast } from '../apca.js'
import { toRGB } from '../convert.js'
import Color from '../color';

const props = defineProps(['fontsList'])

const state = ref({
	'contrast': 0,
	'font-family': font(),
	'padding': '5px',
	'background-color': 'hsl(180, 50%, 50%)',
	'hover-background': 'antiquewhite',
	'border-bottom': '5px',
	'border-bottom-color': 'hsl(180, 50%, 50%)',
	'border-bottom-left-radius': '5px',
	'border-bottom-right-radius': '5px',
	'border-bottom-style': '5px',
	'border-bottom-width': '5px',
	'border-left': '5px',
	'border-left-color': 'hsl(180, 50%, 50%)',
	'border-left-style': '5px',
	'border-left-width': '5px',
	'border-radius': '5px',
	'border-right': '5px',
	'border-right-color': 'hsl(180, 50%, 50%)',
	'border-right-style': '5px',
	'border-right-width': '5px',
	'border-spacing': '5px',
	'border-start-end-radius': '5px',
	'border-start-start-radius': '5px',
	'border-style': '5px',
	'border-top': '5px',
	'border-top-color': 'hsl(180, 50%, 50%)',
	'border-top-left-radius': '5px',
	'border-top-right-radius': '5px',
	'border-top-style': '5px',
	'border-top-width': '5px',
	'border-width': '5px',
	'fg-color': 'black'
})


function randInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
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
  ${randInt(min, max)}px
  `
}


function font() {
	const list = props.fontsList
	const index = randInt(0, list.length - 1)
	const family = list[index].family
	//@ts-ignore
	WebFont.load({
		google: {
			families: [family]
		}
	});

	return family
}


function pickContrastedColor() {
	const bg = getColor()
	const fg = getColor();
	const contrast = APCAcontrast(fg, bg)
	if (Math.abs(contrast) < 60 || contrast === 'Y∆LOW') {
		pickContrastedColor()
	}
	else {
		state.value.contrast = contrast
		state.value['fg-color'] = fg
		state.value['background-color'] = bg
		console.log('contraste selon le nouvel algo APCA :   ' + contrast)
		return contrast
	}
}



function changeRule(rule) {

}


function change() {
	pickContrastedColor()
	state.value['hover-background'] = getColor()
	state.value['padding'] = getLengths(0, 20)
	state.value['font-family'] = font()

	//const values = ["0%", '25%','50%','75%','100%']
	const values = [25, -25, 0]

	const upperRight = 100 + values[randInt(0, values.length - 1)] + '% 0%,'

	state.value['path'] =
		upperRight +
		'100% 50%,' +
		'100% 100%,' +
		'0% 100%,' +
		'0% 50%,' +
		'0% 0%'
}

change()



</script>

<template>
	<div
		tabindex="0"
		aria-label="activer ce bouton sert à changer son style de manière aléatoire"
		role="button"
		class="btn"
		v-on:keyup="change"
		@click="change"
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
	content-visibility: auto;
	cursor: pointer;
	color: v-bind(state[ "fg-color" ]);
	font-family: v-bind(font());
	font-size: 1.2em;
	width: 10em;
	background-color: v-bind(state[ "background-color" ]);
	padding: v-bind(state.padding);
	user-select: none;
	margin: 1em auto;
	text-align: center;
	border-radius: 8px;
	/*	clip-path: polygon(
		v-bind(state.path)
		);*/
	/*	clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
*/
}

.btn-child:focus {
	outline: 3px ridge black;
}

.btnhover {
	background-color: v-bind(state[ "hover-background" ]);
}
</style>
