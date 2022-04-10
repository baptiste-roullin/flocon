<script  lang='ts' setup>
import { randInt, randFloat, randIndex, getColor, getLengths, getFont, pickContrastedColor, getProperty, attachSheet } from './utils'
import { ref, onMounted } from 'vue'
import jss from 'jss'
import preset from 'jss-preset-default'
import type * as CSS from 'csstype';

const props = defineProps(['fontsList'])


function changeRules(id: string) {
	const buttonType = getProperty('buttonType')
	buttonStyle.default = generateRules(buttonType)

	const buttonWrapper = {
		filter: `drop-shadow(0px 1px ${randInt(0, 3)}px rgba(0, 0, 0, 0.1)) drop-shadow(0px ${randInt(0, 3)}px ${randInt(0, 3)}px rgba(0, 0, 0, 0.2));`
	} as CSS.Properties

	attachSheet({
		['.' + id + ' .btn-child']: buttonStyle.default,
		['.' + id]: buttonWrapper
	}, id)

}

function generateRules(buttonType = "classic"): CSS.Properties {
	let rules = {
		textShadow: "",
		fontWeight: randInt(2, 9) + '00',
		letterSpacing: randFloat(0.1, 2) + 'px',
		boxShadow: "",
		textEmphasis: "",
		textTransform: getProperty('textTransform'),
		fontFamily: getFont(props),
		cursor: getProperty('cursor'),
		//		padding: getLengths(0, 20, 'symmetric'),
		contentVisibility: 'auto',
		fontSize: '1.2em',
		height: randInt(20, 50) + 'px',
		width: randInt(130, 300) + 'px',
		userSelect: 'none',
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	} as CSS.Properties

	pickContrastedColor(rules)

	switch (buttonType) {
		case "vertical":
			const textOrientation = ["mixed", "sideways", "upright"] as CSS.Property.TextOrientation[]
			rules.writingMode = "vertical-lr";
			rules.textOrientation = textOrientation[randIndex(textOrientation)]
			rules.width = randInt(20, 50) + 'px'
			rules.height = randInt(120, 300) + 'px'
			break;
		case "ghost":
			rules.backgroundColor = "fffaf6"
			break;
		case "noBorder":
			rules.borderStyle = "none"
			rules.outlineStyle = "none"
			rules.textTransform = "uppercase"
			rules.backgroundColor = "fffaf6"
			rules.fontWeight = "800"
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
			rules.clipPath = `polygon(${b}% 0%, 100% 0%, ${a}% 100%, 0% 100%);`
			break;
		default:
			break;
	}

	//	const btn = button.value!
	//	btn.dataset.type = buttonType + '-' + borderStyle
	return rules
}

const buttonStyle = {
	default: generateRules(getProperty('buttonType')),
	hover: generateRules(getProperty('buttonType')),
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
