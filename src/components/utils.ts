import { APCAcontrast } from '../apca.js'
import Color from '../color';
import jss from 'jss'

export function randInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function randFloat(min, max) {
	return (Math.random() * (max - min) + min).toPrecision(2);
}


export function randIndex(ar) {
	return ar.length * Math.random() | 0
}


export function getColor() {
	const l = randInt(0, 100)
	const c = randInt(0, 132)
	const h = randInt(0, 360)
	const color = new Color(
		`lch(${l}% ${c} ${h})`
	).to('srgb').toString({ commas: true, precision: 0, format: 'hex' })
	return color
}


export function getLengths(min: number, max: number) {
	let top = randInt(min, max)
	let bottom = randInt(min, max)
	let left = randInt(min, max)
	let right = randInt(min, max)
	const test = randInt(0, 1)

	if (randInt(0, 1)) {
		top = bottom
		left = right
	}
	return `
	${top}px
	${right}px
	${bottom}px
	${left}px`
}


export function getFont(props) {
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


export function pickContrastedColor(rules, fg = getColor(), bg = getColor()) {

	const contrast = APCAcontrast(fg, bg)
	if (Math.abs(Number(contrast)) < 30 || contrast === 'Y∆LOW') {
		//console.log('contraste trop faible :   ' + contrast)
		return pickContrastedColor(rules, getColor(), getColor())
	}
	else {
		rules.color = fg.toString()
		rules.backgroundColor = bg.toString()
		//	console.log('contraste selon le nouvel algo APCA :   ' + contrast)
		return contrast
	}
}


export function getProperty(prop) {

	let array: string[] = []
	switch (prop) {
		case "cursor":
			array = ["alias", "all-scroll", "auto", "cell", "col-resize", "context-menu", "copy", "crosshair", "default", "e-resize", "ew-resize", "grab", "grabbing", "help", "move", "n-resize", "ne-resize", "nesw-resize", "no-drop", "not-allowed", "ns-resize", "nw-resize", "nwse-resize", "pointer", "progress", "row-resize", "s-resize", "se-resize", "sw-resize", "text", "vertical-text", "w-resize", "wait", "zoom-in", "zoom-out"]
			break;
		case "buttonType":
			array = ["classic", "vertical", "clipped", "noBorder", "ghost"]
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


export function createStyleElement(id, head, rules) {
	const newSheet = document.createElement("style")
	newSheet.classList.add('sheet-' + id)
	head.appendChild(newSheet)
	newSheet.textContent = rules
}


export function attachSheet(JSSRules, id) {
	const rules = jss.createStyleSheet({
		'@global': JSSRules
	})
		.toString()

	const head = document.head
	const currentSheet = head.querySelector(".sheet-" + id)

	if (currentSheet) {
		currentSheet.setAttribute("disabled", 'true')
		head.removeChild(currentSheet)
		createStyleElement(id, head, rules)
	}
	else {
		createStyleElement(id, head, rules)
	}
}
