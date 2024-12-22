<script setup lang="ts">
const { tasks, addTask, updateTask, deleteTask, markTaskCompleted, clearCompletedTasks } =
  useTasks();

const showAddTaskModal = ref(false);
const filter = ref('all');

const filteredTasks = computed(() => {
  if (filter.value === 'active') {
    return tasks.value.filter((task) => !task.isCompleted);
  } else if (filter.value === 'completed') {
    return tasks.value.filter((task) => task.isCompleted);
  }
  return tasks.value;
});

const editTask = () => {
  // 編輯任務的邏輯
};
</script>

<template>
  <div>
    <h1>To-Do List 管理工具</h1>
    <button @click="showAddTaskModal = true">新增任務</button>
    <button @click="clearCompletedTasks">清除完成任務</button>
    <div>
      <label> <input type="radio" value="all" v-model="filter" /> 全部任務 </label>
      <label> <input type="radio" value="active" v-model="filter" /> 未完成任務 </label>
      <label> <input type="radio" value="completed" v-model="filter" /> 已完成任務 </label>
    </div>
    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <span>{{ task.title }} ({{ task.dueDate }})</span>
        <input type="checkbox" v-model="task.isCompleted" @change="markTaskCompleted(task.id)" />
        <button @click="editTask">編輯</button>
        <button @click="deleteTask(task.id)">刪除</button>
      </li>
    </ul>
    <AddTaskModal v-if="showAddTaskModal" @close="showAddTaskModal = false" @save="addTask" />
  </div>
</template>

<style scoped lang="scss"></style>
