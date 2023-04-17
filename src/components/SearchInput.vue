<template>
  <div class="flex justify-center">
    <div class="input-group flex w-full">
      <input
        type="search"
        v-model="search"
        placeholder="Buscar un gif"
        class="form-control flex-auto block px-3 py-1.5 rounded-l text-gray-700 bg-white bg-clip-padding border border-solid border-white transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
        aria-label="Search"
        aria-describedby="button-search"
      />
      <button
        class="btn px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out items-center"
        type="button"
        id="button-search"
        @click="searchGifs"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="search"
          class="w-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    query: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      search: this.query,
    };
  },
  methods: {
    searchGifs() {
      this.$emit("search", this.search);
    },
  },
};
</script>
