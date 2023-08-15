<script lang="ts" setup>
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';

const auth = useFirebaseAuth();

const user = useCurrentUser();

const email = ref('');
const password = ref('');

const isLoggingIn  = ref(false);
const error = ref(null);

async function login () {
  try {
    await signInWithEmailAndPassword(auth!, email.value, password.value)
    resetLogin();
  } catch (err: any) {
    error.value = err;
    console.log(error)
  }
}

function resetLogin () {
  email.value = '';
  password.value = '';
}

async function logout() {
  await signOut(auth!)
}
</script>

<template>
  <div class="h-screen">
    <div class="prose">
      <p>Email: {{ user?.email }}</p>
      <p>Name: {{ user?.displayName }}</p>
    </div>
    <div class="flex flex-col justify-center items-center gap-6">
      <UInput v-model="email" :disabled="isLoggingIn" label="Email" block></UInput>
      <UInput v-model="password" :disabled="isLoggingIn" label="Password" block></UInput>
      <UButton @click="login" :loading="isLoggingIn" :disabled="isLoggingIn">Log In</UButton>
      <UButton @click="logout">Log Out</UButton>
    </div>
    <div>
      {{ error }}
    </div>
  </div>
</template>
