<template>
	<div class="text-center justify-center">
		<q-input class="width-300 margin-auto" v-model="mail" label="mail" model-value="" />

		<q-input class="width-300 margin-auto" type="password" v-model="password" label="password" model-value="" />
		<q-input class="width-300 margin-auto" type="password" v-model="repeatedPassword" label="repeat your password" model-value="" />

		<q-input class="width-300 margin-auto" v-model="firstName" label="first name" model-value="" />
		<q-input class="width-300 margin-auto" v-model="surname" label="surname" model-value="" />

		<q-select class="width-300 margin-auto" v-model="gender" :options="genders" label="gender" model-value="" />

		<q-date class="width-300 margin-4" default-view="Years" v-model="birthDate" title="birth date" model-value="" />

        <section>
            <q-btn class="margin-4 width-300" color="primary" label="Login" />
        </section>
	</div>
</template>

<script>
	import '@/styles/LoginAndRegister.sass'

	export default {
		name: 'Register',
		data() {
			return {
				mail: '',
				password: '',
				repeatedPassword: '',
				firstName: '',
				surname: '',
				birthDate: '',
				gender: '',
				acceptThemes: false,
				genders: ['Man', 'Woman', 'Other'],
			}
		},
	}
</script>
