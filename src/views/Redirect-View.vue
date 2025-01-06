<template>
  <div>
    <p>Redirecting you to your destination... Please wait.</p>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getOriginalUrl } from '@/services/redirectService'

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const shortCode = route.params.shortUrl as string
  try {
    const originalUrl = await getOriginalUrl(shortCode)
    if (originalUrl) {
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
