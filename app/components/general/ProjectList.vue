<script setup lang="js">

const projectStatusPresets = [
    {name: "Not Started", value: "not_started"},
    {name: "Work in Progress", value: "ongoing"},
    {name: "Finished", value: "finished"}
]
const projectTagsPresets = ['programming', 'music', 'games', 'research']

const props = defineProps({
    acceptedTitle: {
        type: String,
        default: ""
    },
    acceptedStatus: {
        type: Array,
        default: ['not_started', 'ongoing', 'finished']
    },
    acceptedTags: {
        type: Array,
        default: []
    }
})

const searchBoxText = ref(props.acceptedTitle)
const processedPropsAcceptedStatus = computed(() => {
    let result = []
    for (let i = 0; i < props.acceptedStatus.length; i++) {
        if (props.acceptedStatus[i] == "not_started") {
            result.push(projectStatusPresets[0])
        }
        else if (props.acceptedStatus[i] == "ongoing") {
            result.push(projectStatusPresets[1])
        }
        else if (props.acceptedStatus[i] == "finished") {
            result.push(projectStatusPresets[2])
        }
    }
    return result
})
const selectedStatus = ref(processedPropsAcceptedStatus)
const isCardView = ref("Card") // Card | List


</script>
<template>
    <div class="project-list-box">
        <div class="search-bar-container">
            <InputGroup style="margin-right: 5px;">
                <InputText type="text" v-model="searchBoxText" placeholder="Search among projects..."></InputText>
                <Button severity="secondary">
                    <template #icon>
                        <Icon name="ri:search-line"/>
                    </template>
                </Button>
            </InputGroup>
            <MultiSelect v-model="selectedStatus" :options="projectStatusPresets" option-label="name" filter placeholder="Project Status..." style="margin-right: 5px;"></MultiSelect>
            <SelectButton v-model="isCardView" :options="['Card', 'List']"></SelectButton>
        </div>
    </div>

</template>
<style lang="css" scoped>
.project-list-box {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
}
.search-bar-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>