<script setup>
const props = defineProps({
    status: {
        type: String,
        defaultValue: "ongoing"
    }
})
</script>
<template>
    <Tag v-if="props.status === 'not_started'" rounded value="Not Started"></Tag>
    <Tag v-else-if="props.status === 'ongoing'" rounded value="WIP" severity="warn"></Tag>
    <Tag v-else-if="props.status === 'finished'" rounded value="Finished" severity="info"></Tag>
    <Tag v-else rounded="" value="Unknoen"></Tag>
</template>
