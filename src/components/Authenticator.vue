<template>
	<div>
		<template v-if="user">
			<slot />
			<button @click="logout">Logout</button>
		</template>
		<template v-else>
			<p>Log in to access the application</p>
			<button @click="login">Login</button>
		</template>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useAuth from '~/composables/auth'

export default defineComponent({
	setup() {
		const { user, login, logout } = useAuth()
		return { user, login, logout }
	},
})
</script>
