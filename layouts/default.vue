<template>
  <div class="app-container">
    <Header />
    <main class="app-content">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<style>
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
  font-family: "Oswald", sans-serif;
  font-size: 18px;
}
.app-content {
  min-height: 100vh;
  align-items: center;
  justify-items: center;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(255, 196, 46, 0.8);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 0, 0, 0.4);
}

a:active {
  color: rgba(255, 235, 59, 0.7) !important;
}
</style>
