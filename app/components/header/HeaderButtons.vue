<script setup lang="js">
import { useHeaderBarStore } from '~/stores/header_bar_store'

const props = defineProps({
    color: {
        type: String,
        default: "#F67280"
    },
    altColor: {
        type: String,
        default: "#0f314f"
    }
})

const borderStore = useHeaderBarStore()

const themeColor = toRef(props.color)
const secondThemeColor = toRef(props.altColor)

function setColor(color) {
    borderStore.setBorderColor(color)
    console.log("Header border color set!")
}
</script>
<template>
    <div class="header-buttons" @mouseenter="setColor(props.color)">
        <slot></slot>
    </div>
</template>
<style scoped>
.header-buttons {
    width: fit-content;
    height: auto;
    margin: 0;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
    background-color: transparent;
    color: v-bind(themeColor);
    font-size: large;
    font-weight: normal;
    cursor: pointer;
    transition: all 0.1s;
    user-select: none;
}

.header-buttons:hover {
    background-color: v-bind(themeColor);
    color: v-bind(secondThemeColor);
}

.header-buttons:active {
    filter: brightness(80%);
}
</style>