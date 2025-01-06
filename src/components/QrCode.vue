<template>
  <div v-if="qrCodeUrl">
    <img :src="qrCodeUrl" alt="QR Code" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { generateQRCode } from '@/services/qrService'

const props = defineProps<{
  url: string
}>()

const qrCodeUrl = ref('')

watch(
  () => props.url,
  async (newUrl) => {
    if (newUrl) {
      qrCodeUrl.value = await generateQRCode(newUrl)
    }
  },
  { immediate: true },
)
</script>

<style scoped></style>
