import { ref, reactive, computed, toRef } from '@nuxtjs/composition-api'
import { v4 as uuidv4 } from 'uuid'

interface Task {
	id: string
	text: string
	completed: boolean
}

const tasks = ref<Task[]>([])

const fetchTasks = () => {
	return tasks.value
}

const updateTask = (id: string, text: string, completed: boolean) => {
	const task = tasks.value.find((task) => task.id == id)
	if (task) {
		task.text = text
		task.completed = completed
		return task
	} else {
		throw new Error(
			'The provided ID does not correspond to any existing task.'
		)
	}
}

const deleteTask = (id: string) => {
	const task = tasks.value.findIndex((task) => task.id == id)
	if (task != -1) {
		return tasks.value.splice(task, 1)
	} else {
		throw new Error(
			'The provided ID does not correspond to any existing task.'
		)
	}
}

// TODO: create a function to delete multiple tasks
// const deleteTasks = (tasks: Task[]) => {
// 	tasks.forEach()
// }

const createTask = (text: string) => {
	const task: Task = {
		id: uuidv4(),
		text,
		completed: false,
	}
	tasks.value.push(task)
}

const pending = computed(() => {
	return tasks.value.filter((task) => !task.completed)
})

const done = computed(() => {
	return tasks.value.filter((task) => task.completed)
})

export default () => ({
	tasks,
	createTask,
	updateTask,
	deleteTask,
	fetchTasks,
	pending,
	done,
})
