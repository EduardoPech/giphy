<template>
  <nav class="p-5 bg-black">
    <div class="logo">
      <a href="/" class="text-white">
        <span class="block text-center font-bold p-3">Giphy Client</span>
      </a>
    </div>
    <div class="menu flex">
      <router-link to="/" class="flex-1 justify-center">
        <div class="p-2 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="hidden md:inline-block ml-2">Buscador</span>
        </div>
      </router-link>
      <router-link to="/stars" class="flex-1">
        <div class="p-2 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span class="hidden md:inline-block ml-2">Favoritos</span>
        </div>
      </router-link>
      <router-link to="/history" class="flex-1">
        <div class="p-2 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="hidden md:inline-block ml-2">Historial</span>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationMenu",
};
</script>

<style lang="scss">
.menu {
  a {
    font-weight: bold;
    color: #52687d;

    &.router-link-exact-active {
      color: #42b983;

      &::after {
        content: "";
        display: block;
        border-top: 2px solid #42b983;
      }
    }
    &:hover {
      color: #42b983;
    }
  }
}
</style>
