<template>
  <aside :class="`${isExpanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img src="../assets/vue.svg" alt="weather" />
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right </span>
      </button>
    </div>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/about"
        ><span class="material-icons">visibility</span>
        <span class="text">About</span></router-link
      >
      <router-link class="button" to="/group" 
        ><span class="material-icons">group</span>
        <span class="text">Team</span></router-link
      >
      <router-link class="button" to="/contact"
        ><span class="material-icons">email</span>
        <span class="text">Contact</span></router-link
      >
    </div>
    <div class="flex"></div>
     <div class="menu">
      <router-link class="button" to="/settings">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
     </div>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isExpanded: localStorage.getItem('is_expanded')==='true',
    };
  },
  methods: {
    ToggleMenu() {
      this.isExpanded = !this.isExpanded;
      localStorage.setItem('is_expanded',this.isExpanded)
    },
  },
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-out;

.flex{
    flex: 1 1 0;
}
  .menu-toggle-wrap {
    display: flex;
    justify-content: end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 00.2s ease-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
      }
      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
          transition: 00.2s ease-out;
        }
      }
    }
  }
  .logo {
    margin-bottom: 1rem;
    img {
      width: 2rem;
    }
  }
  h3, .button .text{
    opacity: 0;
    transition: 0.3s ease-out;
  }
  .menu {
    margin: 0 -1rem;
    .button{
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem 1rem;

        .material-icons{
            font-size: 2rem;
            color: var(--light);
            transition: 0.2s ease-out;
        }
         .text{
            color: var(--light);
            transition: 0.2s ease-out;
        }
        &:hover{
            background-color: var(--dark-alt);
            .material-icons, .text{
                color: var(--primary);
            }
        }
        &.router-link-exact-active{
            background-color: var(--dark-alt);
            border-right: 5px solid var(--primary);
        }
    }
  }
  &.is-expanded {
    width: var(--sidebar-width);
    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
      h3, .button .text{
    opacity: 1;
    transition: 0.3s ease-out;
  }
  .button {
    .material-icons{
            margin-right: 1rem;

    }
  }
  }
  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>