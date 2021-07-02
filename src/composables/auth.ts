import { ref } from '@nuxtjs/composition-api'

const user = ref<string | null>(null)

const login = () => {
	user.value = 'User'
}

const logout = () => {
	user.value = null
}

const useAuth = () => ({
	user,
	login,
	logout,
})

export default useAuth
