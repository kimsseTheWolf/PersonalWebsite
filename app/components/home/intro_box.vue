<script setup lang="js">
</script>
<template>
    <div class="intro-box-main">
        <div class="intro-title-text" style="color: #d19a66;">
            <Icon name="ri:music-2-line" class="intro-title-icon"/>
            <div>Music</div>
        </div>
        <div class="intro-title-text" style="color: #4fafef;">
            <Icon name="ri:braces-fill" class="intro-title-icon"/>
            <div>Programming</div>
        </div>
        <div class="intro-title-text" style="color: #4FF1C0;">
            <Icon name="ri:gamepad-line" class="intro-title-icon"/>
            <div>Games</div>
        </div>
        <div style="font-size: larger; margin-bottom: 15px;"><b>All</b> of the things I am passioned about!</div>
        <GeneralRoundButton>
            <template #icon>
                <Icon name="ri:arrow-down-line"/>
            </template>
            <template #default>
                SCROLL DOWN TO LEARN MORE!
            </template>
        </GeneralRoundButton>
    </div>
</template>
<style scoped>
.intro-box-main {
    margin: 0px;
    padding-left: 25px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #0f314f;
}
.intro-title-text {
    font-size: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.intro-title-icon {
    margin-right: 10px;
}
</style>