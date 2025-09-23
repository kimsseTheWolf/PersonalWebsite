<script setup lang="js">
const ongoingProjectsList = ref([1,2,3,4,5])
</script>
<template>
    <GeneralRoundContentBlock style="background-color: rgba(0, 0, 0, 0);">
        <template #default>
            <div class="about-me-box">
                <div class="text-column">
                    <Card style="margin-bottom: 20px; border-style: solid; border-width: 1px; border-color: #4fafef;">
                        <template #title></template>
                        <template #content>
                            <div class="title">About me!</div>
                            <div class="paragraph">
                                <p>
                                    Hi there! I am Bohan Jin, or you can call me kimsseTheWolf! I was born in Ningbo and currently studying in the United States since 2022. 
                                    I always orientate myself around my interests, including programming, music composition, and rhythm games!
                                    I started to do programming since 2019 and tried many different projects, including web design, hardware programming, application development, etc.
                                    Currently, I focused myself on website or web app development and robotics programming.
                                    I also love music, and my most favorites are J-pop and Electronic Music! Many of my songs are inspired by artists that I admire and try to create music that not only satisfy my own ears but everyone else.
                                </p>
                                
                                <p>
                                    There are many things I want to say, but I think it will be better if I let you to explore my world via this website by your self! Again, welcome!
                                </p>
                            </div>
                            <div style="display: flex; flex-direction: row;">
                                <Button label="Get my CV" size="large" style="margin-right: 5px;">
                                    <template #icon>
                                        <Icon name="ri:file-text-line"></Icon>
                                    </template>
                                </Button>
                                <Button label="Blog Center" size="large" severity="secondary" variant="text">
                                    <template #icon>
                                        <Icon name="ri:arrow-right-up-line"></Icon>
                                    </template>
                                </Button>
                            </div>
                        </template>
                    </Card>
                    <Card>
                        <template #content>
                            <div style="display: flex; flex-direction: column;">
                                <div class="title">Ongoing Projects</div>
                                <div class="projects-container" v-if="ongoingProjectsList.length !== 0">
                                    <p>Here are the projects that are still ongoing:</p>
                                    <GeneralProjectList :accepted-status="['ongoing']"></GeneralProjectList>
                                </div>
                                <div class="projects-container" v-else>
                                    <p>There are no projects that are still onging. Maybe come back later ;)</p>
                                </div>
                                <div style="display: flex; flex-direction: row;">
                                    <Button label="View full project list" size="large">
                                        <template #icon>
                                            <Icon name="ri:arrow-right-up-line"></Icon>
                                        </template>
                                    </Button>
                                </div>
                            </div>
                        </template>
                    </Card>
                </div>
                <div class="photo-column">
                    <GeneralLinkCard style="margin-bottom: 20px;"/>
                    <GeneralEmailMeCard/>
                </div>
            </div>
        </template>
    </GeneralRoundContentBlock>
</template>
<style lang="css" scoped>
.about-me-box {
    margin: 25px;
    display: flex;
    flex-direction: row;
    height: fit-content;
}
.photo-column {
    display: flex;
    flex-direction: column;
    flex: 2;
}
.text-column {
    display: flex;
    flex-direction: column;
    flex: 5;
    margin-right: 30px;
}
.title {
    font-size: 45px;
    font-weight: 500;
    color: #F67280;
    margin-top: 10px;
    margin-bottom: 15px;
    width: fit-content;
}
.paragraph {
    width: 100%;
    line-height: 120%;
    margin-bottom: 15px;
    font-size: 20px;
}
.projects-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
}
</style>