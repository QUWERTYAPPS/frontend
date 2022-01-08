<template>
	<div class="text-center justify-center">
		<q-input class="width-300 margin-auto" v-model="mail" label="mail" model-value="" />
		<q-input class="width-300 margin-auto" type="password" v-model="password" label="password" model-value="" />

		<q-btn class="margin-4 width-300" color="primary" label="login" />
	</div>
</template>

<script>
	import '@/styles/LoginAndRegister.sass'

	export default {
		name: 'Login',
		data() {
			return {
				mail: '',
				password: '',
			}
		},
	}
</script>
