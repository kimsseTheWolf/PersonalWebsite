
// This function will be used to communicate the border colors across the bottons and the header container
export const headerBarStore = defineStore("headerBarStore", {
    state: () => ({
        currentBorderColor: "#ffffff"
    }),
    getters: {
        getCurrentBorderColor: (state) => {
            return state.currentBorderColor
        }
    },
    actions: {
        setBorderColor (newColor:string) {
            this.currentBorderColor = newColor
        }
    }
})