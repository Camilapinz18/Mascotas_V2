<script setup>
const props = defineProps(['text'])
</script>

<template>
    <div>
        <n-button class="button" strong secondary>
            {{props.text}}
        </n-button>
    </div>
</template>

<style scoped>
.button {
    background-color: #F5854B;
    border: none;
    border-radius: 40px;
    padding: 25px 30px;
    color: white;
    font-size: large;
    margin-right: 10px;
}
</style>
