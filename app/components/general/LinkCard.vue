<template>
    <Card style="overflow: hidden;">
        <template #header>
            <Image alt="My Profile Photo" src="my_avatar.jpg" style="width: 100%;"/>
        </template>
        <template #title>Bohan Jin (kimsseTheWolf)</template>
        <template #subtitle>Links to my profiles on other sites</template>
        <template #content>
            <div class="links-container">
                <Button label="GitHub" severity="secondary" class="link-button">
                    <template #icon>
                        <Icon name="ri:github-fill"/>
                    </template>
                </Button>
                <Button label="Instagram" severity="secondary" class="link-button">
                    <template #icon>
                        <Icon name="ri:instagram-line"/>
                    </template>
                </Button>
                <Button label="YouTube" severity="secondary" class="link-button">
                    <template #icon>
                        <Icon name="ri:youtube-line"/>
                    </template>
                </Button>
                <Button label="Bilibili" severity="secondary" class="link-button">
                    <template #icon>
                        <Icon name="ri:bilibili-fill"/>
                    </template>
                </Button>
                <Button label="SoundCloud" severity="secondary" class="link-button">
                    <template #icon>
                        <Icon name="ri:soundcloud-line"/>
                    </template>
                </Button>
                <Button label="Other links..." severity="primary">
                    <template #icon>
                        <Icon name="ri:arrow-right-up-line"/>
                    </template>
                </Button>
            </div>
        </template>
    </Card>
</template>

<style lang="css" scoped>
.links-container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.link-button {
    margin-bottom: 7px;
}
</style>