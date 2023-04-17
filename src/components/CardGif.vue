<template>
  <div class="pb-2 card">
    <button
      class="absolute z-20"
      :class="{ hidden: !getStarById(gif.id) }"
      @click="getStarById(gif.id) ? removeStar(gif.id) : addStar(gif)"
    >
      <IconStar :isActive="getStarById(gif.id)" />
    </button>
    <img :src="gif.images.fixed_width.url" />
    <div class="overlay"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import IconStar from "@/components/IconStar.vue";

export default {
  name: "CardGif",
  components: {
    IconStar,
  },
  props: {
    gif: {
      type: Object,
      default: () => ({
        id: "",
        images: {
          fixed_width: {
            url: "",
          },
        },
      }),
    },
  },
  computed: {
    ...mapGetters(["getStarById"]),
  },
  methods: {
    ...mapActions(["addStar", "removeStar"]),
  },
};
</script>

<style lang="scss" scoped>
.card:hover {
  .hidden {
    display: block;
  }
}

.card {
  position: relative;
}

.card:hover .overlay {
  opacity: 1;
}

.overlay {
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 20%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}
</style>
