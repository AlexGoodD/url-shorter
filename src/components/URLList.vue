<template>
  <div>
    <ul>
      <li v-for="url in urls" :key="url.id">
        <span
          >Original: <a :href="url.originalUrl" target="_blank">{{ url.originalUrl }}</a></span
        >
        <span>
          | Short: <a :href="url.shortUrl" target="_blank">{{ url.shortUrl }}</a></span
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { db } from '@/firebase'
import { collection, query, onSnapshot } from 'firebase/firestore'

interface Url {
  id: string
  originalUrl: string
  shortUrl: string
}

const urls = ref<Url[]>([])

onMounted(() => {
  const q = query(collection(db, 'urls'))
  onSnapshot(q, (querySnapshot) => {
    urls.value = querySnapshot.docs.map((doc) => {
      const data = doc.data() as Url
      return { id: doc.id, originalUrl: data.originalUrl, shortUrl: data.shortUrl }
    })
  })
})
</script>

<style scoped></style>
