<template>
  <div>Redirecting...</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { db } from '@/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const shortUrl = route.params.shortUrl as string
  const q = query(collection(db, 'urls'), where('shortUrl', '==', shortUrl))
  const querySnapshot = await getDocs(q)

  if (!querySnapshot.empty) {
    const doc = querySnapshot.docs[0]
    const originalUrl = doc.data().originalUrl
    window.location.href = originalUrl
  } else {
    router.push({ name: 'home' })
  }
})
</script>

<style scoped></style>
