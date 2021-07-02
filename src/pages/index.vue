<template>
	<div>
		<create-task />
		<h3>Pending tasks</h3>
		<ul v-if="pending.length">
			<li v-for="task in pending" :key="task.id">
				<task :task="task" />
			</li>
		</ul>
		<p v-else>
			You don't have pending tasks.
		</p>
		<h3>
			Completed tasks
			<button v-if="done.length" @click="deleteTasks(done)">
				Delete all
			</button>
		</h3>
		<ul v-if="done.length">
			<li v-for="task in done" :key="task.id">
				<task :task="task" />
			</li>
		</ul>
		<p v-else>You don't have completed tasks.</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useTasks from '~/composables/tasks'

export default defineComponent({
	head() {
		return {
			title: 'Nuxt Tasks',
		}
	},
	setup() {
		const { done, pending, deleteTasks } = useTasks()
		return { done, pending, deleteTasks }
	},
})
</script>
