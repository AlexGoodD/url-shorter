<template>
  <div>
    <input v-model="url" placeholder="Enter URL" />
    <button @click="shortenUrl">Shorten URL</button>
    <div v-if="shortUrl">
      <p>
        Short URL: <a :href="shortUrl" target="_blank">{{ shortUrl }}</a>
      </p>
      <button @click="copyToClipboard">Copy to Clipboard</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { db } from '@/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { nanoid } from 'nanoid'

const url = ref('')
const shortUrl = ref('')

const shortenUrl = async () => {
  if (url.value) {
    const shortCode = nanoid(10)
    await addDoc(collection(db, 'urls'), {
      originalUrl: url.value,
      shortUrl: shortCode,
      createdAt: serverTimestamp(),
    })
    shortUrl.value = `${window.location.origin}/${shortCode}`
    url.value = ''
  }
}

const copyToClipboard = () => {
  navigator.clipboard.writeText(shortUrl.value)
}
</script>

<style scoped></style>
