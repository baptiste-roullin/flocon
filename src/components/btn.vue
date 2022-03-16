<script  lang='ts'>


import { ref, type Ref } from 'vue'
import { APCAcontrast } from '../apca.js'
import { toRGB } from '../convert.js'
import Color from '../color';
import { h } from 'vue'
import { createUseStyles } from 'vue-jss'

import type * as CSS from 'csstype';

export default {
	props: ['fontsList'],

	setup(props: any) {


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
				console.log('contraste trop faible :   ' + contrast)
				return pickContrastedColor(fg, bg)
			}
			else {
				buttonStyleRef.value.contrast = contrast
				buttonStyleRef.value['color'] = fg
				buttonStyleRef.value.backgroundColor = bg
				console.log('contraste selon le nouvel algo APCA :   ' + contrast)
				return contrast
			}
		}

		/*function changeRule(buttonStyleRef.value: any): any {

		}*/

		function change() {
			pickContrastedColor()
			buttonStyleRef.value.hover.hoverBackground = getColor()
			buttonStyleRef.value.default.padding = getLengths(0, 20)
			buttonStyleRef.value.default.fontFamily = font()

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

		const buttonStyle: CSS.Properties = {
			fontFamily: font(),
			padding: '5px',
			backgroundColor: 'hsl(180, 50%, 50%)',
			//	hoverBackground: 'antiquewhite',
			borderBottom: '5px',
			borderBottomColor: 'hsl(180, 50%, 50%)',
			borderBottomLeftRadius: '5px',
			borderBottomRightRadius: '5px',
			borderBottomStyle: 'solid',
			borderBottomWidth: '5px',
			borderLeft: '5px',
			borderLeftColor: 'hsl(180, 50%, 50%)',
			borderLeftStyle: 'solid',
			borderLeftWidth: '5px',
			borderRadius: '5px',
			borderRight: '5px',
			borderRightColor: 'hsl(180, 50%, 50%)',
			borderRightStyle: 'solid',
			borderRightWidth: '5px',
			borderSpacing: '5px',
			borderStartEndRadius: '5px',
			borderStartStartRadius: '5px',
			borderStyle: '5px',
			borderTop: '5px',
			borderTopColor: 'hsl(180, 50%, 50%)',
			borderTopLeftRadius: '5px',
			borderTopRightRadius: '5px',
			borderTopStyle: 'solid',
			borderTopWidth: '5px',
			borderWidth: '5px',
			color: 'black',
			contentVisibility: 'auto',
			cursor: 'pointer',
			fontSize: '1.2em',
			width: '10em',
			userSelect: 'none',
			margin: '1em auto',
			textAlign: 'center'
		}

		const buttonStyleRef = ref({
			default: buttonStyle,
			hover: buttonStyle,
			meta: {
				contrast: 0
			}
		}) as any

		change()

		return () =>
			h('div',
				{
					tabindex: "0",
					ariaLabel: "Activer ce bouton sert à changer son style de manière aléatoire",
					role: "button",
					class: "btn",
					onKeyup: change,
					onClick: change,
				},
				[h('div', {
					class: "btn-child",
					style: buttonStyleRef.value
				}, ['Bouton'])]
			)
	}
}
</script>


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
