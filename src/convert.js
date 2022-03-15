//HSV values in [0..1[
export function toRGB(h, s, v) {
	const h_i = Math.trunc(h * 6)
	const f = h * 6 - h_i
	const p = v * (1 - s)
	const q = v * (1 - f * s)
	const t = v * (1 - (1 - f) * s)
	console.log(h_i);
	if (h_i == 0) {
		var r = v,
			g = t,
			b = p
	}
	if (h_i == 1) {
		var r = q,
			g = v,
			b = p
	}
	if (h_i == 2) {
		var r = p,
			g = v,
			b = t
	}
	if (h_i == 3) {
		var r = p,
			g = q,
			b = v
	}
	if (h_i == 4) {
		var r = t,
			g = p,
			b = v
	}
	if (h_i == 5) {
		var r = v,
			g = p,
			b = q
	}
	return `rgb(${Math.trunc(r * 256)},${Math.trunc(g * 256)},${Math.trunc(b * 256)})`
}