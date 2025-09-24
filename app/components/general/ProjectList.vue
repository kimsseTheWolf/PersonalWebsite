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

const {data: posts} = await useAsyncData('projects', ()=>queryCollection('projects').all())
</script>
<template>
    <div class="project-list-box">
        <DataView :value="posts">
            <template #header>
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
                <!-- <div style="margin-bottom: 10px;">
                    <p v-if="posts.length != 0">Found {{ posts.length }} related topics!</p>
                    <p v-else>No post found. Try searching with a different keyword, status, or tags.</p>
                </div> -->
            </template>
            <template #list="slotProps">
                <div v-for="post in posts" class="project-list-element">
                    <div class="cover-column"></div>
                    <div class="info-column">
                        <h2>{{ post.title }}</h2>
                        <div>{{ post.description }}</div>
                    </div>
                </div>
            </template>
        </DataView>
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

.project-list-element {
    display: flex;
    flex-direction: row;
    height: fit-content;
    margin-bottom: 5px;
    padding: 7px;
    border-radius: 12px;
}
.project-list-element:hover {
    background-color: rgba(255, 255, 255, 0.05);
}
.project-list-element .info-column {
    display: flex;
    flex-direction: column;
    margin-left: 7px;
}
</style>