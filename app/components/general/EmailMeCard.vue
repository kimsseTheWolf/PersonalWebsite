<template>
    <Card>
        <template #title>I'd like to Hear from You!</template>
        <template #subtitle>You can also reach out to me by sending me an email! I will respond as soon as possbile!</template>
        <template #content>
            <div style="display: flex; flex-direction: column;">
                <Button label="Email Me!" severity="primary">
                    <template #icon>
                        <Icon name="ri:mail-send-line"/>
                    </template>
                </Button>
            </div>
        </template>
    </Card>
</template>