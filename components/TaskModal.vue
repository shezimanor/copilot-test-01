<template>
  <div class="modal">
    <h2>{{ task ? '編輯任務' : '新增任務' }}</h2>
    <form @submit.prevent="saveTask">
      <label>
        標題:
        <input v-model="taskData.title" required maxlength="100" />
      </label>
      <label>
        描述:
        <textarea v-model="taskData.description" maxlength="500"></textarea>
      </label>
      <label>
        到期日:
        <input type="date" v-model="taskData.dueDate" />
      </label>
      <button type="submit">保存</button>
      <button type="button" @click="$emit('close')">取消</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ task?: Task }>();
const emit = defineEmits(['close', 'save']);

const taskData = ref<Task>({
  id: '',
  title: '',
  description: '',
  dueDate: '',
  isCompleted: false,
  createdAt: '',
  updatedAt: ''
});

watch(
  () => props.task,
  (newTask) => {
    if (newTask) {
      // 表示編輯任務
      taskData.value = { ...taskData.value, ...newTask };
    } else {
      // 表示新增任務
      taskData.value = {
        id: '',
        title: '',
        description: '',
        dueDate: '',
        isCompleted: false,
        createdAt: '',
        updatedAt: ''
      };
    }
  },
  { immediate: true }
);

const saveTask = () => {
  if (!taskData.value.id) {
    taskData.value.createdAt = new Date().toISOString();
  }
  taskData.value.updatedAt = new Date().toISOString();
  emit('save', { ...taskData.value });
  emit('close');
};
</script>
