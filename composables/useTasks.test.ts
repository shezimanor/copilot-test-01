import { describe, it, expect, beforeEach } from 'vitest';
import { useTasks, type Task } from './useTasks';
import { v4, type UUIDTypes } from 'uuid';

describe('useTasks', () => {
  let task: Task;

  beforeEach(() => {
    localStorage.clear();
    task = {
      id: '',
      title: 'Test Task',
      description: 'This is a test task',
      dueDate: '2023-12-31',
      isCompleted: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  });

  it('should load tasks from localStorage', () => {
    localStorage.setItem('tasks', JSON.stringify([]));
    const { loadTasks, tasks } = useTasks();
    loadTasks();
    expect(tasks.value).toEqual([]);
  });

  it('should add a new task', () => {
    const { addTask, tasks } = useTasks();
    const id = addTask(task);
    task.id = id;
    console.log(tasks.value);
    console.log(task);
    expect(tasks.value).toContainEqual(task);
  });

  it('should update an existing task', () => {
    const { getTask, addTask, updateTask } = useTasks();
    const id = addTask(task);
    const updatedTask = { ...task, id, title: 'Updated Task' };
    updateTask(updatedTask);
    const currentTask = getTask(id) as Task;
    expect(currentTask.title).toBe('Updated Task');
  });

  it('should delete a task', () => {
    const { addTask, deleteTask, tasks } = useTasks();
    const id = addTask(task);
    task.id = id;
    deleteTask(id);
    expect(tasks.value).not.toContainEqual(task);
  });

  it('should mark a task as completed', () => {
    const { getTask, addTask, markTaskCompleted, tasks } = useTasks();
    const id = addTask(task);
    task.id = id;
    markTaskCompleted(task.id);
    const currentTask = getTask(id) as Task;
    expect(currentTask.isCompleted).toBe(true);
  });

  it('should clear completed tasks', () => {
    localStorage.setItem('tasks', JSON.stringify([]));
    const { addTask, loadTasks, markTaskCompleted, clearCompletedTasks, tasks } = useTasks();
    loadTasks();
    const id = addTask(task);
    task.id = id;
    markTaskCompleted(task.id);
    clearCompletedTasks();
    expect(tasks.value).toEqual([]);
  });
});
