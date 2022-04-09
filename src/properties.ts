import type * as CSS from 'csstype';
/*
export const properties = {
	"AccentColor": "ssss" as CSS.Property.AccentColor,
	"AlignContent",
	"AlignItems",
	"AlignSelf",
	"AlignTracks",
	"AnimationDelay",
	"AnimationDirection",
	"AnimationDuration",
	"AnimationFillMode",
	"AnimationIterationCount",
	"AnimationName",
	"AnimationPlayState",
	"AnimationTimeline",
	"AnimationTimingFunction",
	"Appearance",
	"AspectRatio",
	"BackdropFilter",
	"BackfaceVisibility",
	"BackgroundAttachment",
	"BackgroundBlendMode",
	"BackgroundClip",
	"BackgroundColor": "redsss" as CSS.Property.BackgroundColor,
	"BackgroundImage",
	"BackgroundOrigin",
	"BackgroundPositionX",
	"BackgroundPositionY",
	"BackgroundRepeat",
	"BackgroundSize",
	"BlockOverflow",
	"BlockSize",
	"BorderBlockColor",
	"BorderBlockEndColor",
	"BorderBlockEndStyle",
	"BorderBlockEndWidth",
	"BorderBlockStartColor",
	"BorderBlockStartStyle",
	"BorderBlockStartWidth",
	"BorderBlockStyle",
	"BorderBlockWidth",
	"BorderBottomColor",
	"BorderBottomLeftRadius",
	"BorderBottomRightRadius",
	"BorderBottomStyle",
	"BorderBottomWidth": "redsss" as CSS.Property.BorderBottomWidth, ,
	"BorderCollapse",
	"BorderEndEndRadius",
	"BorderEndStartRadius",
	"BorderImageOutset",
	"BorderImageRepeat",
	"BorderImageSlice",
	"BorderImageSource",
	"BorderImageWidth" ,
	"BorderInlineColor",
	"BorderInlineEndColor",
	"BorderInlineEndStyle",
	"BorderInlineEndWidth",
	"BorderInlineStartColor",
	"BorderInlineStartStyle",
	"BorderInlineStartWidth",
	"BorderInlineStyle",
	"BorderInlineWidth",
	"BorderLeftColor",
	"BorderLeftStyle",
	"BorderLeftWidth",
	"BorderRightColor",
	"BorderRightStyle",
	"BorderRightWidth",
	"BorderSpacing",
	"BorderStartEndRadius",
	"BorderStartStartRadius",
	"BorderTopColor",
	"BorderTopLeftRadius",
	"BorderTopRightRadius",
	"BorderTopStyle",
	"BorderTopWidth",
	"Bottom",
	"BoxDecorationBreak",
	"BoxShadow",
	"BoxSizing",
	"BreakAfter",
	"BreakBefore",
	"BreakInside",
	"CaptionSide",
	"CaretColor",
	"Clear",
	"ClipPath",
	"Color",
	"PrintColorAdjust",
	"ColorScheme",
	"ColumnCount",
	"ColumnFill",
	"ColumnGap",
	"ColumnRuleColor",
	"ColumnRuleStyle",
	"ColumnRuleWidth",
	"ColumnSpan",
	"ColumnWidth",
	"Contain",
	"Content",
	"ContentVisibility",
	"CounterIncrement",
	"CounterReset",
	"CounterSet",
	"Cursor",
	"Direction",
	"Display",
	"EmptyCells",
	"Filter",
	"FlexBasis",
	"FlexDirection",
	"FlexGrow",
	"FlexShrink",
	"FlexWrap",
	"Float",
	"FontFamily",
	"FontFeatureSettings",
	"FontKerning",
	"FontLanguageOverride",
	"FontOpticalSizing",
	"FontSize",
	"FontSizeAdjust",
	"FontSmooth",
	"FontStretch",
	"FontStyle",
	"FontSynthesis",
	"FontVariant",
	"FontVariantAlternates",
	"FontVariantCaps",
	"FontVariantEastAsian",
	"FontVariantLigatures",
	"FontVariantNumeric",
	"FontVariantPosition",
	"FontVariationSettings",
	"FontWeight",
	"ForcedColorAdjust",
	"GridAutoColumns",
	"GridAutoFlow",
	"GridAutoRows",
	"GridColumnEnd",
	"GridColumnStart",
	"GridRowEnd",
	"GridRowStart",
	"GridTemplateAreas",
	"GridTemplateColumns",
	"GridTemplateRows",
	"HangingPunctuation",
	"Height",
	"HyphenateCharacter",
	"Hyphens",
	"ImageOrientation",
	"ImageRendering",
	"ImageResolution",
	"InitialLetter",
	"InlineSize",
	"InputSecurity",
	"Inset",
	"InsetBlock",
	"InsetBlockEnd",
	"InsetBlockStart",
	"InsetInline",
	"InsetInlineEnd",
	"InsetInlineStart",
	"Isolation",
	"JustifyContent",
	"JustifyItems",
	"JustifySelf",
	"JustifyTracks",
	"Left",
	"LetterSpacing",
	"LineBreak",
	"LineHeight",
	"LineHeightStep",
	"ListStyleImage",
	"ListStylePosition",
	"ListStyleType",
	"MarginBlock",
	"MarginBlockEnd",
	"MarginBlockStart",
	"MarginBottom",
	"MarginInline",
	"MarginInlineEnd",
	"MarginInlineStart",
	"MarginLeft",
	"MarginRight",
	"MarginTop",
	"MaskBorderMode",
	"MaskBorderOutset",
	"MaskBorderRepeat",
	"MaskBorderSlice",
	"MaskBorderSource",
	"MaskBorderWidth",
	"MaskClip",
	"MaskComposite",
	"MaskImage",
	"MaskMode",
	"MaskOrigin",
	"MaskPosition",
	"MaskRepeat",
	"MaskSize",
	"MaskType",
	"MathStyle",
	"MaxBlockSize",
	"MaxHeight",
	"MaxInlineSize",
	"MaxLines",
	"MaxWidth",
	"MinBlockSize",
	"MinHeight",
	"MinInlineSize",
	"MinWidth",
	"MixBlendMode",
	"OffsetDistance",
	"OffsetPath",
	"OffsetRotate",
	"ObjectFit",
	"ObjectPosition",
	"OffsetAnchor",
	"OffsetDistance",
	"OffsetPath",
	"OffsetRotate",
	"OffsetRotate",
	"Opacity",
	"Order",
	"Orphans",
	"OutlineColor",
	"OutlineOffset",
	"OutlineStyle",
	"OutlineWidth",
	"OverflowAnchor",
	"OverflowBlock",
	"OverflowClipBox",
	"OverflowClipMargin",
	"OverflowInline",
	"OverflowWrap",
	"OverflowX",
	"OverflowY",
	"OverscrollBehaviorBlock",
	"OverscrollBehaviorInline",
	"OverscrollBehaviorX",
	"OverscrollBehaviorY",
	"PaddingBlock",
	"PaddingBlockEnd",
	"PaddingBlockStart",
	"PaddingBottom",
	"PaddingInline",
	"PaddingInlineEnd",
	"PaddingInlineStart",
	"PaddingLeft",
	"PaddingRight",
	"PaddingTop",
	"PageBreakAfter",
	"PageBreakBefore",
	"PageBreakInside",
	"PaintOrder",
	"Perspective",
	"PerspectiveOrigin",
	"PlaceContent",
	"PointerEvents",
	"Position",
	"PrintColorAdjust",
	"Quotes",
	"Resize",
	"Right",
	"This",
	"Rotate",
	"RowGap",
	"RubyAlign",
	"RubyMerge",
	"RubyPosition",
	"This",
	"Scale",
	"ScrollBehavior",
	"ScrollMargin",
	"ScrollMarginBlock",
	"ScrollMarginBlockEnd",
	"ScrollMarginBlockStart",
	"ScrollMarginBottom",
	"ScrollMarginInline",
	"ScrollMarginInlineEnd",
	"ScrollMarginInlineStart",
	"ScrollMarginLeft",
	"ScrollMarginRight",
	"ScrollMarginTop",
	"ScrollPadding",
	"ScrollPaddingBlock",
	"ScrollPaddingBlockEnd",
	"ScrollPaddingBlockStart",
	"ScrollPaddingBottom",
	"ScrollPaddingInline",
	"ScrollPaddingInlineEnd",
	"ScrollPaddingInlineStart",
	"ScrollPaddingLeft",
	"ScrollPaddingRight",
	"ScrollPaddingTop",
	"ScrollSnapAlign",
	"ScrollMargin",
	"ScrollMarginBottom",
	"ScrollMarginLeft",
	"ScrollMarginRight",
	"ScrollMarginTop",
	"ScrollSnapStop",
	"ScrollSnapType",
	"ScrollbarColor",
	"ScrollbarGutter",
	"ScrollbarWidth",
	"ShapeImageThreshold",
	"ShapeMargin",
	"ShapeOutside",
	"TabSize",
	"TableLayout",
	"TextAlign",
	"TextAlignLast",
	"TextCombineUpright",
	"TextDecorationColor",
	"TextDecorationLine",
	"TextDecorationSkip",
	"TextDecorationSkipInk",
	"TextDecorationStyle",
	"TextDecorationThickness",
	"TextDecorationThickness",
	"TextEmphasisColor",
	"TextEmphasisPosition",
	"TextEmphasisStyle",
	"TextIndent",
	"TextJustify",
	"TextOrientation",
	"TextOverflow",
	"TextRendering",
	"TextShadow",
	"TextSizeAdjust",
	"TextTransform",
	"TextUnderlineOffset",
	"TextUnderlinePosition",
	"Top",
	"TouchAction",
	"Transform",
	"TransformBox",
	"TransformOrigin",
	"TransformStyle",
	"TransitionDelay",
	"TransitionDuration",
	"TransitionProperty",
	"TransitionTimingFunction",
	"This",
	"Translate",
	"UnicodeBidi",
	"UserSelect",
	"VerticalAlign",
	"Visibility",
	"WhiteSpace",
	"Widows",
	"Width",
	"WillChange",
	"WordBreak",
	"WordSpacing",
	"WordWrap",
	"WritingMode",
	"ZIndex",
	"Zoom",
}
*/