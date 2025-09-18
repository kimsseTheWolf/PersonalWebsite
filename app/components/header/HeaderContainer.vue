<script setup lang="js">
const props = defineProps({
    color: {
        type: String,
        default: "#0f314f"
    }
})

const unfocusBackgroundColor = computed(() => {
    return props.color + "6e"
})

const focusedBackgroundColor = computed(() => {
    return props.color + "00"
})
</script>
<template>
    <div class="the-header-container">
        <slot></slot>
    </div>
</template>
<style setup>
.the-header-container {
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    background-color: v-bind(focusedBackgroundColor);
    color: white;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.2s;
}
.the-header-container:hover {
    background-color: v-bind(unfocusBackgroundColor);
    backdrop-filter: blur(10px);
    color: white;
}
</style>