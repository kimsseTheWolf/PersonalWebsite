<script setup lang="js">

const props = defineProps({
    color: {
        type: String,
        default: "#0f314f"
    }
})

const backgroundColor = computed(() => {
    return props.color
})

</script>
<template>
    <div class="round-content-block-container">
        <slot></slot>
    </div>
</template>
<style lang="css" scoped>
.round-content-block-container {
    margin-top: 35px;
    margin-left: 50px;
    margin-right: 50px;
    border-radius: 25px;
    background-color: v-bind(backgroundColor);
    color: white;
    height: fit-content;
}
</style>