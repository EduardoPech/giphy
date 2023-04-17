<template>
  <div
    v-if="list.length > 0"
    class="columns-2 sm:columns-3 md:columns-4 lg:columns-6 gap-2"
  >
    <CardGif v-for="gif in list" :gif="gif" :key="gif.id" />
  </div>
  <div v-else class="m-5">
    <slot name="noResults"></slot>
  </div>
</template>

<script>
import CardGif from "@/components/CardGif.vue";

export default {
  name: "GridResults",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  components: {
    CardGif,
  },
};
</script>
