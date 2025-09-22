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

const backgroundColor = computed(() => {
    return props.color
})
</script>
<template>
    <div class="footer-container">
        <slot></slot>
    </div>
</template>
<style lang="css" scoped>
.footer-container {
    width: 100%;
    height: fit-content;
    margin: 0px;
    padding: 30px;
    background-color: v-bind(backgroundColor);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>