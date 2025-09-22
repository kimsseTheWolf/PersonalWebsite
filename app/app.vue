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
:root {
  --p-primary-100: var(--p-blue-100);
  --p-primary-50:  var(--p-blue-50);
  --p-primary-200: var(--p-blue-200);
  --p-primary-300: var(--p-blue-300);
  --p-primary-400: var(--p-blue-400);
  --p-primary-500: var(--p-blue-500);
  --p-primary-600: var(--p-blue-600);
  --p-primary-700: var(--p-blue-700);
  --p-primary-800: var(--p-blue-800);
  --p-primary-900: var(--p-blue-900);
  --p-primary-950: var(--p-blue-900);
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  overflow-y: auto;
  overflow-x: hidden;
}
html {
  background-color: #020408;
  color: white;
}
</style>
