<template>
	<div>
		{{ task.text }}
		<button @click="updateTask(task.id, task.text, !task.completed)">
			Mark as {{ task.completed ? 'pending' : 'completed' }}
		</button>
		<button @click="deleteTask(task.id)">Delete</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useTasks from '~/composables/tasks'

export default defineComponent({
	props: {
		task: Object,
	},
	setup() {
		const { deleteTask, updateTask } = useTasks()
		return { deleteTask, updateTask }
	},
})
</script>
