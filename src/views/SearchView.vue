<template>
  <div class="container mx-auto">
    <h1 class="font-mono text-2xl text-center font-bold my-5">
      Buscador de Gifs de perritos
    </h1>
    <SearchInput
      class="my-5 mx-3"
      :query="getSearch.query"
      @search="searchGiphy"
    />
    <GridResults v-if="getSearch.query.length > 0" :list="getSearch.results">
      <template slot="noResults">
        <NoContent
          title="No hay resultados"
          message="Realizá otra búsqueda"
          gif="https://media.giphy.com/media/26DNfIyoo5UWgHXlm/giphy.gif"
        />
      </template>
    </GridResults>
    <NoContent
      v-else
      title="Escribe tu búsqueda"
      message="Usa el buscador para encontrar el gif que quieras"
      gif="https://media.giphy.com/media/12zV7u6Bh0vHpu/giphy.gif"
    />
  </div>
</template>

<script>
import { searchGiphy } from "@/services/API.js";
import SearchInput from "@/components/SearchInput.vue";
import { mapActions, mapGetters } from "vuex";
import NoContent from "@/components/NoContent.vue";
import GridResults from "@/components/GridResults.vue";

export default {
  name: "HomeView",
  components: {
    SearchInput,
    NoContent,
    GridResults,
  },
  data() {
    return {
      listResults: [],
      search: "",
    };
  },
  computed: {
    ...mapGetters(["getSearch"]),
  },
  methods: {
    ...mapActions(["updateSearch"]),
    async searchGiphy(search) {
      const results = await searchGiphy(search);
      if (results.status === 200) {
        this.listResults = results.data.data;
        this.updateSearch({ query: search, results: results.data.data });
      } else {
        console.log("Error");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
