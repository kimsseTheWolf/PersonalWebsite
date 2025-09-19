<template>
  <HeaderContainer>
    <header-logo/>
    <header-buttons>
      <template #icon>
        <Icon name="tabler:home"/>
      </template>
      Home
    </header-buttons>
    <header-buttons :color="'#d19a66'">
      <template #icon>
        <Icon name="tabler:music"/>
      </template>
      Music & Art
    </header-buttons>
    <header-buttons :color="'#4fafef'">
      <template #icon>
        <Icon name="tabler:device-desktop-code"/>
      </template>
      Programming
    </header-buttons>
    <header-buttons :color="'#4FF1C0'">
      <template #icon>
        <Icon name="tabler:device-gamepad-2"/>
      </template>
      Games
    </header-buttons>
    <header-buttons>
      <template #icon>
        <Icon name="ri:mail-send-line"/>
      </template>
      Contact
    </header-buttons>
  </HeaderContainer>

  <NuxtPage/>
</template>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  overflow-y: auto;
  overflow-x: hidden;
}
html {
  background-color: #06131f;
  color: white;
}
</style>
