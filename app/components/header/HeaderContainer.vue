<script setup lang="js">
const props = defineProps({
    color: {
        type: String,
        default: "#0f314f"
    },
    themeColor: {
        type: String,
        default: "#F67280"
    }
})

const unfocusBackgroundColor = computed(() => {
    return props.color + "99"
})

const focusedBackgroundColor = computed(() => {
    return props.color
})

const themeColor = toRef(props.themeColor)
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
    background-color: v-bind(unfocusBackgroundColor);
    color: white;
    backdrop-filter: blur(15px);
    display: flex;
    flex-direction: row;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    transition: all 0.1s;
    z-index: 1000;
}
.the-header-container:hover {
    background-color: v-bind(focusedBackgroundColor);
    backdrop-filter: blur(20px);
    color: white;
    border-bottom-style: solid;
    border-bottom-width: 4px;
    border-bottom-color: v-bind(themeColor);
}
</style>