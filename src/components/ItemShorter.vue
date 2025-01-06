<template>
  <div class="modal">
    <div class="modal-content">
      <button class="close-button" @click="$emit('close')">
        <i class="fas fa-times"></i>
      </button>
      <h2><b>Shortened URL:</b></h2>
      <p>
        <a :href="shortUrl" target="_blank">{{ shortUrl }}</a>
      </p>
      <button @click="copyToClipboard" class="copy">Copy to Clipboard</button>
      <div class="qr-code">
        <h2><b>QR Code:</b></h2>

        <QrCode :url="shortUrl" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import QrCode from '@/components/QrCode.vue'

const props = defineProps<{
  shortUrl: string
}>()

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.shortUrl)
  alert('URL copied to clipboard!')
}

onMounted(() => {
  console.log('Item montado')
})
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
.qr-code {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}
.copy {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.copy:hover {
  background-color: #1976d2;
}

.close-button {
  position: relative;
  left: 100px;
  background: none;
  cursor: pointer;
  transition: all 0.5s ease;
}

.close-button:hover {
  color: rgb(134, 134, 134);
  font-size: 16px;
}
</style>
