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
                    <div class="cover-column">
                        <Image v-if="post.cover_image !== ''" :src="post.cover_image" width="200" image-style="border-radius: 7px"/>
                        <Image v-else src="image_occupier_16_9.png" width="200" image-style="border-radius: 7px"/>
                    </div>
                    <div class="info-column">
                        <div class="small-title">PROJECT</div>
                        <div class="title">{{ post.title }}</div>
                        <div class="description">{{ post.description }}</div>
                        <div class="tags-container">
                            <GeneralStatusTag :status="post.status"/>
                            <div style="background-color: gray; width: 2px; height: 60%; margin-left: 5px; margin-right: 5px;">
                                &nbsp;
                            </div>
                            <Tag v-for="tag in post.tags" :value="tag" style="margin-right: 5px;"/>
                        </div>
                    </div>
                    <div class="side-button-column">
                        <Button>
                            <Icon name="ri:arrow-right-line"/>
                        </Button>
                    </div>
                </div>
            </template>
            <template #grid="slotPorps">
                <Card v-for="post in posts">
                    <template #header>
                        <Image v-if="post.cover_image !== ''" :src="post.cover_image" image-style="border-radius: 7px"/>
                        <Image v-else src="image_occupier_16_9.png" image-style="border-radius: 7px"/>
                    </template>
                </Card>
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
    margin-top: 5px;
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

.project-list-element .info-column .small-title {
    font-weight: bold;
    font-size: smaller;
    color: gray;
    margin-top: 5px;
}

.project-list-element .info-column .title {
    font-weight: bold;
    font-size: large;
    margin-top: 10px;
    margin-bottom: 7px;
}

.project-list-element .info-column .description {
    margin-bottom: 7px;
}

.project-list-element .tags-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.cover-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    margin-right: 5px;
}

.side-button-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 10px;
}

</style>