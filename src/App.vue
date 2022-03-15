
<script setup lang='ts'>
import Spinner from './components/icons/spinner.vue';
import ButtonsList from './components/buttonsList.vue';
import testVue from './components/test.vue';

/*WebFont.load({
	google: {
		families: ['Droid Sans', 'Droid Serif']
	}
});*/

</script>


<template>
	<header
		role="banner"
		class="flex flex-col items-center justify-center gap-12 leading-6 text-center"
	>
		<h1 class>
			<div class="mb-6 text-6xl">Flocon</div>
			<div class="text-5xl font-medium">
				Un anti-
				<i>design system</i>
			</div>
		</h1>
		<img
			class="w-24 h-auto"
			alt="Ce site est en cours de construction"
			src="./assets/under-construction.gif"
		/>
	</header>

	<main role="main" class="w-fit">
		<!--	<Suspense>
			<ButtonsList />
			<template #fallback>
				<Spinner />
			</template>
		</Suspense>-->
	</main>
</template>


<style>
@import "./assets/base.css";

#app {
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;
	background: #fffaf6;
	border-radius: 1em;
}

@media (min-width: 1024px) {
	body {
		display: flex;
		place-items: center;
		margin: 0;
	}

	#app {
		display: grid;
		grid-template-columns: max-content min-content;
		padding: 0rem 10vw;
		width: auto;
		gap: 10vw;
		margin: 1em auto;
	}
}
</style>