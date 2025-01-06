<template>
  <div>
    <p>Redirecting you to your destination... Please wait.</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { db } from '@/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const shortCode = route.params.shortUrl as string
  console.log('ShortCode received:', shortCode) // Depuración

  try {
    const q = query(collection(db, 'urls'), where('shortCode', '==', shortCode))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      const originalUrl = doc.data().originalUrl
      console.log('Redirecting to:', originalUrl) // Depuración
      window.location.href = originalUrl
    } else {
      console.error(`Short URL not found for: ${shortCode}`)
      router.push({ name: 'notfound' })
    }
  } catch (error) {
    console.error('Error during redirect:', error)
    router.push({ name: 'error' })
  }
})
</script>

<style scoped></style>
