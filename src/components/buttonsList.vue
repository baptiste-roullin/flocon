<script setup lang='ts'>
import btn from './btn.vue'
import test from './test.vue'
import { reactive } from 'vue';


const key = 'AIzaSyDD1N9BnjqONIeWSR606ns76dvy8rJVgjc'
const sort = 'TRENDING'
const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${key}&sort=${sort}`


const data = await fetch(url).then((r) => r.json())

const fontsList = reactive(data.items)

</script>

<template>
	<div>
		<ul>
			<li v-for="index in 10" :key="index">
				<btn :fontsList="fontsList" id="btn-{{index}}" />
			</li>
		</ul>
	</div>
</template>



<style>
ul {
	padding: 0;
	width: fit-content;
}
li {
	padding: 0;
	list-style: none;
}
</style>