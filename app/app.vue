<template>
  <HeaderContainer>
    <header-logo/>
    <header-buttons>
      <Icon name="tabler:home"/>
      Home
    </header-buttons>
    <header-buttons :color="'#d19a66'">
      <Icon name="tabler:music"/>
      Music
    </header-buttons>
    <header-buttons :color="'#4fafef'">
      <Icon name="tabler:device-desktop-code"/>
      Programming
    </header-buttons>
    <header-buttons :color="'#4FF1C0'">
      <Icon name="tabler:device-gamepad-2"/>
      Games
    </header-buttons>
    <header-buttons>
      <Icon name="ri:mail-send-line"/>
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
