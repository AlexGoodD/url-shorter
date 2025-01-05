<template>
  <div class="content">
    <div>
      <h1 class="title">URL Shorter</h1>
    </div>
    <URLShortener />
    <URLList />
    <div class="FAQ">
      <FAQ />
    </div>
  </div>
</template>

<script setup lang="ts">
import URLShortener from '@/components/URLShortener.vue'
import URLList from '@/components/URLList.vue'
import FAQ from '@/components/FAQ-Component.vue'
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  position: relative; /* Necesario para posicionar el elemento FAQ */
}

.title {
  font-weight: bold;
  font-size: 4rem;
}

.FAQ {
  position: absolute;
  bottom: 20px;
  right: 150px;
}
</style>
