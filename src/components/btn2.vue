<script  lang='ts' setup>


import { ref, type Ref } from 'vue'
import { APCAcontrast } from '../apca.js'
import Color from '../color';

import type * as CSS from 'csstype';
import jss from 'jss'
import preset from 'jss-preset-default'

const props = defineProps(['fontsList'])



</script>
<template>
	<div
		ref="button"
		tabindex="0"
		aria-label="activer ce bouton sert à changer son style de manière aléatoire"
		role="button"
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
