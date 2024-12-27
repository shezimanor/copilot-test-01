<template>
  <form @submit.prevent="handleSubmit" class="w-[320px]">
    <UFormGroup label="電子郵件" name="email">
      <UInput type="email" id="email" v-model="email" required placeholder="請輸入電子郵件" />
    </UFormGroup>
    <UFormGroup label="密碼" name="password">
      <UInput
        type="password"
        id="password"
        v-model="password"
        placeholder="請輸入密碼"
        required
        minlength="6"
        maxlength="20"
      />
    </UFormGroup>
    <UButton type="submit">登入</UButton>
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <div>
      <NuxtLink to="/forgot">忘記密碼</NuxtLink>
    </div>
  </form>
</template>

<script lang="ts" setup>
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const handleSubmit = async () => {
  // 模擬登入邏輯
  if (email.value === 'test@example.com' && password.value === 'password123') {
    router.push('/');
  } else {
    errorMessage.value = '使用者名稱或密碼錯誤';
  }
};
</script>

<style scoped lang="scss"></style>
