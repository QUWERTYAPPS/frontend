<template>
	<div class="align-center justify-center">
		<q-input class="width-300 margin-auto" v-model="mail" label="email" />
		<q-input class="width-300 margin-auto" type="password" v-model="pass" label="password" />
		<q-btn class="margin-4px width-300" color="primary" label="Login" />
	</div>
</template>

<script>
    import '@/styles/LoginAndRegister.sass'

    export default {
		name: 'Login',
		data() {
			return {
				mail: '',
				pass: '',
			}
		},
	}
</script>

<style scoped></style>
