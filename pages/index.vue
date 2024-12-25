<template>
  <div>
    <h1>待辦事項列表</h1>
    <button @click="showAddTaskModal = true">新增任務</button>
    <button @click="clearCompletedTasks">清除完成任務</button>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span>{{ task.title }}</span>
        <span>{{ task.dueDate }}</span>
        <input type="checkbox" v-model="task.isCompleted" @change="markTaskCompleted(task.id)" />
        <button @click="editTask(task)">編輯</button>
        <button @click="deleteTask(task.id)">刪除</button>
      </li>
    </ul>
    <TaskModal v-if="showAddTaskModal" @close="showAddTaskModal = false" @save="addTask" />
    <TaskModal
      v-if="showEditTaskModal && currentTask"
      :task="currentTask"
      @close="showEditTaskModal = false"
      @save="updateTask"
    />
  </div>
</template>

<script setup lang="ts">
const {
  tasks,
  loadTasks,
  addTask,
  updateTask,
  deleteTask,
  markTaskCompleted,
  clearCompletedTasks
} = useTasks();

const showAddTaskModal = ref(false);
const showEditTaskModal = ref(false);
const currentTask = ref<Task | null>(null);

const editTask = (task: Task) => {
  currentTask.value = task;
  showEditTaskModal.value = true;
};

onMounted(() => {
  loadTasks();
});
</script>
