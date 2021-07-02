<template>
	<form @submit.prevent="createTask">
		<textarea v-model="text" placeholder="To do..."></textarea>
		<button>Create to do</button>
	</form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import useTasks from '~/composables/tasks'

export default defineComponent({
	setup() {
		const { createTask: _createTask } = useTasks()

		const text = ref('')

		const createTask = () => {
			_createTask(text.value)
			text.value = ''
		}

		return { createTask, text }
	},
})
</script>
