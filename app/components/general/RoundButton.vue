<template>
    <div class="round-box-container">
        <div class="round-box-icon">
            <slot name="icon"></slot>
        </div>
        <div class="round-box-text">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="css" scoped>
.round-box-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    margin: 0px;
    padding: 7px;
    border-radius: 100px;
    border-style: solid;
    border-color: #ffffff;
    border-width: 2px;
    background-color: #ffffff00;
    color: white;
    cursor: pointer;
    user-select: none;
    transition: all 0.1s;
}

.round-box-container:hover {
    background-color: #ffffff22;
}

.round-box-container:active {
    filter: brightness(80%);
}

.round-box-icon {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 7px;
}

.round-box-text {
    font-size: auto;
}
</style>