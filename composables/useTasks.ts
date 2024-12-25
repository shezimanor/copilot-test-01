export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}

const tasks = ref<Task[]>([]);

export function useTasks() {
  const loadTasks = () => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      tasks.value = JSON.parse(storedTasks);
    }
  };

  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks.value));
  };

  const addTask = (task: Task) => {
    tasks.value.push(task);
    saveTasks();
  };

  const updateTask = (updatedTask: Task) => {
    const index = tasks.value.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      tasks.value[index] = updatedTask;
      saveTasks();
    }
  };

  const deleteTask = (id: string) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
    saveTasks();
  };

  const markTaskCompleted = (id: string) => {
    const task = tasks.value.find((task) => task.id === id);
    if (task) {
      task.isCompleted = true;
      task.updatedAt = new Date().toISOString();
      saveTasks();
    }
  };

  const clearCompletedTasks = () => {
    tasks.value = tasks.value.filter((task) => !task.isCompleted);
    saveTasks();
  };

  return {
    tasks,
    loadTasks,
    addTask,
    updateTask,
    deleteTask,
    markTaskCompleted,
    clearCompletedTasks
  };
}
