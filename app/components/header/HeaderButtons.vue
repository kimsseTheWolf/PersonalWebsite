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

const lastScrollTop = ref(0)
const scrollDirection = ref(null)
const isMouseHovered = ref(false)

const shouldShowTextOnScroll = computed(() => {
    // Scroll handle
    if (scrollDirection.value == "down") {
        return false
    }
    else if (scrollDirection.value == "up") {
        return true
    }
    else {
        return true
    }
})

const shouldShowTextOnHover = computed(() => {
    if (borderStore.isBarOnHover) {
        return true
    }
    else {
        return false
    }
})

function setColor(color) {
    isMouseHovered.value = true
    borderStore.setBorderColor(color)
}

function handleOnScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if ((currentScrollTop - lastScrollTop.value) > 25) {
        scrollDirection.value = "down"; // 向下
    } else if (currentScrollTop - lastScrollTop.value < -25) {
        scrollDirection.value = "up";   // 向上
    }
    lastScrollTop.value = currentScrollTop <= 0 ? 0 : currentScrollTop; // 防止负值
    console.log(scrollDirection.value)
}

onMounted(() => {
    window.addEventListener("scroll", () => handleOnScroll())
})

onBeforeMount(() => {
    window.removeEventListener("scroll", () => handleOnScroll())
})
</script>
<template>
    <div class="header-buttons" @mouseenter="setColor(props.color)" @mouseleave="isMouseHovered = false">
        <div class="header-icon">
            <slot name="icon"></slot>
        </div>
        <div v-if="shouldShowTextOnScroll || shouldShowTextOnHover">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.header-buttons {
    width: fit-content;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
}

.header-buttons:hover {
    background-color: v-bind(themeColor);
    color: v-bind(secondThemeColor);
}

.header-buttons:active {
    filter: brightness(80%);
}

.header-icon {
    height: auto;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>