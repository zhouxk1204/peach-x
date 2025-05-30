<template>
  <div>
    <PConfigProvider>
      <div style="gap: 10px; display: flex;">
        <PButton @click="onclick" type="primary">Primary</PButton>
        <PButton @click="onclick" type="info">Info</PButton>
        <PButton @click="onclick" type="success">Success</PButton>
        <PButton @click="onclick" type="warning">Warning</PButton>
        <PButton @click="onclick" type="danger">Danger</PButton>
      </div>
      <div>&nbsp;</div>
      <div style="gap: 10px; display: flex;">
        <PButton @click="onclick" type="primary" plain>Primary</PButton>
        <PButton @click="onclick" type="info" plain>Info</PButton>
        <PButton @click="onclick" type="success" plain>Success</PButton>
        <PButton @click="onclick" type="warning" plain>Warning</PButton>
        <PButton @click="onclick" type="danger" plain>Danger</PButton>
      </div>
      <div>&nbsp;</div>
      <div style="gap: 10px; display: flex;">
        <PButton @click="onclick" type="primary" round>Primary</PButton>
        <PButton @click="onclick" type="info" round>Info</PButton>
        <PButton @click="onclick" type="success" round>Success</PButton>
        <PButton @click="onclick" type="warning" round>Warning</PButton>
        <PButton @click="onclick" type="danger" round>Danger</PButton>
      </div>
      <div>&nbsp;</div>
      <div style="gap: 10px; display: flex;">
        <PButton @click="onclick" type="primary" disabled>Primary</PButton>
        <PButton @click="onclick" type="info" disabled>Info</PButton>
        <PButton @click="onclick" type="success" disabled>Success</PButton>
        <PButton @click="onclick" type="warning" disabled>Warning</PButton>
        <PButton @click="onclick" type="danger" disabled>Danger</PButton>
      </div>
      <div>&nbsp;</div>
      <div style="gap: 10px; display: flex;">
        <PButton @click="onclick" type="primary" size="small">Primary</PButton>
        <PButton @click="onclick" type="primary">Primary</PButton>
        <PButton @click="onclick" type="primary" size="large">Primary</PButton>
      </div>

      <div>&nbsp;</div>
      <div style="gap: 10px; display: flex;">
        <PButton @click="onclick" type="primary" :loading="loading">Primary</PButton>
      </div>

      <button class="test-btn" :class="loading ? 'test-btn-loading' : ''">
        <div class="loader" v-if="loading"></div> ABCDEF
      </button>
    </PConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(false);

const onclick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 3000);
}
</script>

<style>
/* HTML:  */
.loader {
  position: absolute;
  left: 10px;
  width: 9px;
  padding: 3px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m:
    conic-gradient(#0000 10%, #000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}

@keyframes l3 {
  to {
    transform: rotate(1turn)
  }
}


.test-btn {
  padding-left: 10px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  transition: padding 0.4s ease;
}

.test-btn-loading {
  padding-left: 30px;
}
</style>