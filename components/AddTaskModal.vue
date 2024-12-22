<script setup lang="ts">
import type { Task } from '~/composables/useTasks';
const emit = defineEmits<{
  (e: 'save', task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): void;
  (e: 'close'): void;
}>();
const title = ref('');
const description = ref('');
const dueDate = ref('');

const saveTask = () => {
  const newTask = {
    title: title.value,
    description: description.value,
    dueDate: dueDate.value,
    isCompleted: false
  };
  emit('save', newTask);
  emit('close');
};
</script>

<template>
  <div class="modal">
    <h2>新增任務</h2>
    <form @submit.prevent="saveTask">
      <div>
        <label for="title">標題</label>
        <input id="title" v-model="title" required maxlength="100" />
      </div>
      <div>
        <label for="description">描述</label>
        <textarea id="description" v-model="description" maxlength="500"></textarea>
      </div>
      <div>
        <label for="dueDate">到期日</label>
        <input id="dueDate" type="date" v-model="dueDate" />
      </div>
      <button type="submit">保存</button>
      <button type="button" @click="$emit('close')">取消</button>
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
