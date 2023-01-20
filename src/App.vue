<template >
  <div class="app">
    <SideBar />
    <router-view />
  </div>
</template>

<script >
import SideBar from "./components/SideBar.vue";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
export default {
  name: "App",
  provide: {
    API_URL,
    API_KEY,
  },
  components: {
    SideBar,
  },
};
</script>

<style  lang="scss" >
:root {
  --primary: #4ada80;
  --greay: #64788b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans, sans-serif";
}
body {
  background: var(--light);
}
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 760px) {
      padding-left: 6rem;
    }
  }
}
</style>
