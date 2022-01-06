<template>
	<div>
		<q-tabs v-model="active">
			<q-tab name="login" label="login" icon="login" />
			<q-tab name="register" label="register" icon="person_add" />
		</q-tabs>

		<Login v-if="active === 'login'" />
		<Register v-if="active === 'register'" />
	</div>
</template>

<script>
	import Login from '@/components/Login'
	import Register from '@/components/Register'

	export default {
		name: 'LoginAndRegister',
		components: { Login, Register },
		data() {
			return {
				active: 'login',
			}
		},
	}
</script>
