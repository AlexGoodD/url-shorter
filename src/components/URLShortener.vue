<template>
  <div>
    <div class="input-button">
      <div class="container">
        <input v-model="url" class="myinput-link" placeholder="Enter URL" />
      </div>
      <ButtonShortComponent :shortenUrl="shortenUrlHandler" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { shortenUrl } from '@/services/urlShortenerService'
import ButtonShortComponent from '@/components/ButtonShort-Component.vue'

const url = ref('')
const emit = defineEmits(['shortened'])

const shortenUrlHandler = async () => {
  try {
    const shortenedUrl = await shortenUrl(url.value)
    url.value = ''
    emit('shortened', shortenedUrl)
    console.log('Shortened URL:', shortenedUrl)
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    } else {
      alert('An unknown error occurred')
    }
  }
}
</script>

<style scoped>
.input-button {
  display: flex;
  gap: 15px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  border: 2px solid #000000;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
}
.myinput-link {
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  font-weight: 500;
  border: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0px 10px;
  height: 100%;
  width: 100%;
  color: #000;
  background-color: #fff;
  font-size: 15px;
}
.link-icon {
  font-size: 16px;
  background-color: #fff;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
  position: relative;
}
</style>
