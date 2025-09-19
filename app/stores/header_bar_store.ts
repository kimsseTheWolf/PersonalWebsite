
// This function will be used to communicate the border colors across the bottons and the header container
export const useHeaderBarStore = defineStore("headerStore", () => {
    const currentBorderColor = ref("#ffffff")

    function setBorderColor(newColor: string) {
        currentBorderColor.value = newColor
    }

    return {currentBorderColor, setBorderColor}
})