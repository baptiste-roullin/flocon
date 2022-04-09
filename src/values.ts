

export const values = {
	absoluteSize: ["large", "medium", "small", "x-large", "x-small", "xx-large", "xx-small", "xxx-large"],

	animateableFeature: ["contents", "scroll-position"],

	attachment: ["fixed", "local", "scroll"],

	bgPosition: ["TLength", "bottom", "center", "left", "right", "top"],

	bgSize: ["TLength", "auto", "contain", "cover"],

	blendMode: [
		"color"
		, "color-burn"
		, "color-dodge"
		, "darken"
		, "difference"
		, "exclusion"
		, "hard-light"
		, "hue"
		, "lighten"
		, "luminosity"
		, "multiply"
		, "normal"
		, "overlay"
		, "saturation"
		, "screen"
		, "soft-light"],

	box: ["border-box", "content-box", "padding-box"],

	color: ["NamedColor", "DeprecatedSystemColor", "currentcolor"],

	compatAuto: [
		"button"
		, "checkbox"
		, "listbox"
		, "menulist"
		, "meter"
		, "progress-bar"
		, "push-button"
		, "radio"
		, "searchfield"
		, "slider-horizontal"
		, "square-button"
		, "textarea"],

	compositeStyle: [
		"clear"
		, "copy"
		, "destination-atop"
		, "destination-in"
		, "destination-out"
		, "destination-over"
		, "source-atop"
		, "source-in"
		, "source-out"
		, "source-over"
		, "xor"],

	compositingOperator: ["add", "exclude", "intersect", "subtract"],

	contentDistribution: ["space-around", "space-between", "space-evenly", "stretch"],

	contentList: ["Quote", "contents"],

	contentPosition: ["center", "end", "flex-end", "flex-start", "start"],

	cubicBezierTimingFunction: ["ease", "ease-in", "ease-in-out", "ease-out"],

	dasharray: ["TLength"],

	deprecatedSystemColor: [
		"ActiveBorder"
		, "ActiveCaption"
		, "AppWorkspace"
		, "Background"
		, "ButtonFace"
		, "ButtonHighlight"
		, "ButtonShadow"
		, "ButtonText"
		, "CaptionText"
		, "GrayText"
		, "Highlight"
		, "HighlightText"
		, "InactiveBorder"
		, "InactiveCaption"
		, "InactiveCaptionText"
		, "InfoBackground"
		, "InfoText"
		, "Menu"
		, "MenuText"
		, "Scrollbar"
		, "ThreeDDarkShadow"
		, "ThreeDFace"
		, "ThreeDHighlight"
		, "ThreeDLightShadow"
		, "ThreeDShadow"
		, "Window"
		, "WindowFrame"
		, "WindowText"],

	displayInside: ["-ms-flexbox", "-ms-grid", "-webkit-flex", "flex", "flow", "flow-root", "grid", "ruby", "table"],

	displayInternal: [
		"ruby-base"
		, "ruby-base-container"
		, "ruby-text"
		, "ruby-text-container"
		, "table-caption"
		, "table-cell"
		, "table-column"
		, "table-column-group"
		, "table-footer-group"
		, "table-header-group"
		, "table-row"
		, "table-row-group"],

	displayLegacy: ["-ms-inline-flexbox", "-ms-inline-grid", "-webkit-inline-flex", "inline-block", "inline-flex", "inline-grid", "inline-list-item", "inline-table"],

	displayOutside: ["block", "inline", "run-in"],

	easingFunction: ["CubicBezierTimingFunction", "StepTimingFunction", "linear"],

	eastAsianVariantValues: ["jis04", "jis78", "jis83", "jis90", "simplified", "traditional"],

	finalBgLayer: ["Color", "BgPosition", "RepeatStyle", "Attachment", "Box", "none"],

	fontStretchAbsolute: [
		"condensed"
		, "expanded"
		, "extra-condensed"
		, "extra-expanded"
		, "normal"
		, "semi-condensed"
		, "semi-expanded"
		, "ultra-condensed"
		, "ultra-expanded"
	],

	fontWeightAbsolute: ["bold", "normal"],

	genericFamily: ["cursive", "fantasy", "monospace", "sans-serif", "serif"],

	geometryBox: ["Box", "fill-box", "margin-box", "stroke-box", "view-box"],

	gridLine: ["auto"],

	lineStyle: ["dashed", "dotted", "double", "groove", "hidden", "inset", "none", "outset", "ridge", "solid"],

	lineWidth: ["TLength", "medium", "thick", "thin"],

	maskLayer: ["Position", "RepeatStyle", "GeometryBox", "CompositingOperator", "MaskingMode", "no-clip", "none"],

	maskingMode: ["alpha", "luminance", "match-source"],

	namedColor: ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],

	pageSize: ["A3", "A4", "A5", "B4", "B5", "JIS-B4", "JIS-B5", "ledger", "legal", "letter"],

	paint: ["Color", "child", "context-fill", "context-stroke", "none"],

	position: ["TLength", "bottom", "center", "left", "right", "top"],

	quote: ["close-quote", "no-close-quote", "no-open-quote", "open-quote"],

	repeatStyle: ["no-repeat", "repeat", "repeat-x", "repeat-y", "round", "space"],

	selfPosition: ["center", "end", "flex-end", "flex-start", "self-end", "self-start", "start"],

	singleAnimation: [
		"easingFunction"
		, "SingleAnimationDirection"
		, "SingleAnimationFillMode"
		, "TTime"
		, "infinite"
		, "none"
		, "paused"
		, "running"],

	singleAnimationDirection: ["alternate", "alternate-reverse", "normal", "reverse"],

	singleAnimationFillMode: ["backwards", "both", "forwards", "none"],

	singleAnimationTimeline: ["auto", "none"],

	singleTransition: ["EasingFunction", "TTime", "all", "none"],

	stepTimingFunction: ["step-end", "step-start"],

	trackBreadth: ["TLength", "auto", "max-content", "min-content"],

	viewportLength: ["TLength", "auto"],

	visualBox: ["border-box", "content-box", "padding-box"],
}