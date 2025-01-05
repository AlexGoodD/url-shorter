<template>
  <button @click="props.shortenUrl" class="animated-button">
    <span>Short!</span>
    <span></span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  shortenUrl: () => void
}>()
</script>

<style scoped>
.animated-button {
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  border: none;
  font-size: 16px;
  background-color: #e1e1e1;
  border-radius: 100px;
  font-weight: 600;
  color: #43434340;
  box-shadow: 0 0 0 2px #ffffff20;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.animated-button span:last-child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: #2196f3;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}
.animated-button span:first-child {
  position: relative;
  z-index: 1;
}
.animated-button:hover {
  box-shadow: 0 0 0 5px #2195f360;
  color: #ffffff;
}
.animated-button:active {
  scale: 0.95;
}
.animated-button:hover span:last-child {
  width: 150px;
  height: 150px;
  opacity: 1;
}
</style>
