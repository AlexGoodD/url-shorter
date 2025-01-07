<template>
  <div class="content">
    <div>
      <h1 class="title">URL Shortener</h1>
    </div>
    <URLShortener @shortened="shortenUrlHandler" />
    <div class="FAQ">
      <FAQ />
    </div>
    <loading-bar v-if="isLoading" class="loading-bar" />
    <ItemShorter v-if="showModal" :shortUrl="shortUrl" @close="showModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import URLShortener from '@/components/URLShortener.vue'
import FAQ from '@/components/FAQ-Component.vue'
import ItemShorter from '@/components/ItemShorter.vue'
import LoadingBar from '@/components/loading-bar.vue'

const shortUrl = ref('')
const isLoading = ref(false)
const showModal = ref(false)

const shortenUrlHandler = async (url: string) => {
  isLoading.value = true
  showModal.value = false
  try {
    // Simulate URL shortening process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    shortUrl.value = url
    isLoading.value = false
    showModal.value = true
  } catch (error) {
    isLoading.value = false
    console.error(error)
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  position: relative;
}
.title {
  font-weight: bold;
  font-size: 4rem;
}
.FAQ {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.loading-bar {
  top: 10px;
}
</style>
