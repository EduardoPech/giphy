<template>
  <div class="container mx-auto">
    <h1 class="font-mono text-2xl text-center font-bold my-5">
      Mis Gifs favoritos
    </h1>
    <GridResults :list="getAllStars">
      <template slot="noResults">
        <NoContent
          title="No tienes Gifs favoritos"
          message="Busca y agrega Gifs
        a favoritos para verlos acá"
          gif="https://media.giphy.com/media/Ql7nwJxM9Yrpm/giphy.gif"
        />
      </template>
    </GridResults>
  </div>
</template>

<script>
import GridResults from "@/components/GridResults.vue";
import { mapGetters } from "vuex";
import NoContent from "@/components/NoContent.vue";

export default {
  name: "StarsView",
  components: {
    GridResults,
    NoContent,
  },
  computed: {
    ...mapGetters(["getAllStars"]),
  },
};
</script>

<style></style>
