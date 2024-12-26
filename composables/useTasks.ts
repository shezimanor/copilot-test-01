export interface Task {
  id: UUIDTypes;
  title: string;
  description?: string;
  dueDate?: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}
import { v4, type UUIDTypes } from 'uuid';

const tasks = ref<Task[]>([]);

export const useTasks = () => {
  const loadTasks = () => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      tasks.value = JSON.parse(storedTasks);
    }
  };

  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks.value));
  };

  const getTask = (id: UUIDTypes) => {
    return tasks.value.find((task) => task.id === id);
  };

  const addTask = (task: Task) => {
    const id: UUIDTypes = v4();
    tasks.value.push({
      ...task,
      id
    });
    saveTasks();
    return id;
  };

  const updateTask = (updatedTask: Task) => {
    const index = tasks.value.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      tasks.value[index] = updatedTask;
      saveTasks();
    }
  };

  const deleteTask = (id: UUIDTypes) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
    saveTasks();
  };

  const markTaskCompleted = (id: UUIDTypes) => {
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
    getTask,
    addTask,
    updateTask,
    deleteTask,
    markTaskCompleted,
    clearCompletedTasks
  };
};
