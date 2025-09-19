
// This function will be used to communicate the border colors across the bottons and the header container
export const useHeaderBarStore = defineStore("headerStore", () => {
    const currentBorderColor = ref("#ffffff")
    const isBarOnHover = ref(false)

    function setBorderColor(newColor: string) {
        currentBorderColor.value = newColor
    }

    function setIsBarOnHover(value:boolean) {
        isBarOnHover.value = value
    }

    return {currentBorderColor, isBarOnHover, setBorderColor, setIsBarOnHover}
})