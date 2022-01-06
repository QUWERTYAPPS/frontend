<template>
	<div class="align-center justify-center">
		<q-input class="width-300 margin-auto" v-model="mail" label="email" />
		<q-input class="width-300 margin-auto" type="password" v-model="pass" label="password" />
		<q-input class="width-300 margin-auto" type="password" v-model="rpass" label="repeat password" />
		<q-input class="width-300 margin-auto" v-model="fname" label="first name" />
		<q-input class="width-300 margin-auto" v-model="lname" label="last name" />
		<q-select class="width-300 margin-auto" v-model="gender" :options="genders" label="gender" />
		<q-date style="width: 300px" class="width-300 margin-4px" default-view="Years" v-model="bdate" /><br />
		<q-btn style="width: 300px" class="margin-4px width-300" color="primary" label="Login" />
	</div>
</template>

<script>
	import '@/styles/LoginAndRegister.sass'

	export default {
		name: 'Register',
		data() {
			return {
				mail: '',
				pass: '',
				rpass: '',
				fname: '',
				lname: '',
				bdate: '',
				gender: '',
				acceptThemes: false,
				genders: ['Man', 'Woman', 'Other'],
			}
		},
	}
</script>

<style scoped></style>
