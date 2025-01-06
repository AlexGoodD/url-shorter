<template>
  <div>
    <div class="input-button">
      <div class="container">
        <input v-model="url" class="myinput-link" placeholder="Enter URL" />
      </div>
      <ButtonShortComponent :shortenUrl="shortenUrl" />
    </div>

    <div v-if="shortUrl">
      <p>
        Short URL:
        <a :href="shortUrl" target="_blank" class="button">{{ shortUrl }}</a>
      </p>
      <button @click="copyToClipboard">Copy to Clipboard</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { db } from '@/firebase'
import { collection, addDoc, getDocs, query, where, serverTimestamp } from 'firebase/firestore'
import { nanoid } from 'nanoid'
import ButtonShortComponent from '@/components/ButtonShort-Component.vue'

const url = ref('')
const shortUrl = ref('')
const baseShortDomain = 'https://url-shorter-lemon.vercel.app/' // Incluye barra final

const shortenUrl = async () => {
  if (!url.value) {
    alert('Please enter a valid URL.')
    return
  }

  // Validación de URL
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // Protocolo
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Dominio
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // IP (v4)
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Puerto y path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // Query
      '(\\#[-a-z\\d_]*)?$',
    'i',
  )

  if (!urlPattern.test(url.value)) {
    alert('Please enter a valid URL.')
    return
  }

  const slug = nanoid(8) // Genera un slug único

  // Verifica si el slug ya existe en Firestore
  const q = query(collection(db, 'urls'), where('shortCode', '==', slug))
  const existingSlug = await getDocs(q)

  if (!existingSlug.empty) {
    alert('This custom slug is already taken. Please choose another one.')
    return
  }

  const fullShortUrl = `${baseShortDomain}${slug}`

  await addDoc(collection(db, 'urls'), {
    originalUrl: url.value,
    shortCode: slug, // Guarda el slug como código corto
    createdAt: serverTimestamp(),
  })

  console.log('Short URL created:', slug)
  console.log('Short URL complete created:', fullShortUrl)

  shortUrl.value = fullShortUrl
  url.value = ''
}

const copyToClipboard = () => {
  if (shortUrl.value) {
    navigator.clipboard.writeText(shortUrl.value)
    alert('URL copied to clipboard!')
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
}
.prefix {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 100%;
  width: 70px;
  font-weight: 600;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 10px 0px 0px 10px;
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
.tooltip {
  position: absolute;
  top: -40px;
  right: -10px;
  opacity: 0;
  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #f0f0f0 0%, #000000 74%);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.2s;
  pointer-events: none;
  letter-spacing: 0.5px;
  z-index: 10;
}
.tooltip::before {
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  background-color: #000000;
  background-size: 1000%;
  background-position: center;
  transform: rotate(45deg);
  bottom: -15%;
  transition-duration: 0.3s;
}
</style>
