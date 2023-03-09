<script setup>
import Button from './Auxiliar/Button.vue';
import LearnMore from './LearnMore.vue'
import OurLabor from './OurLabor.vue'
</script>

<template>
  <div class="body-cont">
    <LearnMore />
    <OurLabor />
  </div>
</template>

<style scoped>
.body-cont {

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;

}
</style>
