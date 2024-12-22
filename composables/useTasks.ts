export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
  description?: string;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export const useTasks = () => {
  const tasks = ref<Task[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));

  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks.value));
  };

  const addTask = (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    tasks.value.push(newTask);
    saveTasks();
  };

  const updateTask = (id: string, updatedTask: Partial<Omit<Task, 'id' | 'createdAt'>>) => {
    const taskIndex = tasks.value.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      tasks.value[taskIndex] = {
        ...tasks.value[taskIndex],
        ...updatedTask,
        updatedAt: new Date().toISOString()
      };
      saveTasks();
    }
  };

  const deleteTask = (id: string) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
    saveTasks();
  };

  const markTaskCompleted = (id: string) => {
    updateTask(id, { isCompleted: true });
  };

  const clearCompletedTasks = () => {
    tasks.value = tasks.value.filter((task) => !task.isCompleted);
    saveTasks();
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    markTaskCompleted,
    clearCompletedTasks
  };
};
