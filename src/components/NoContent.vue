<template>
  <div class="h-full">
    <div class="flex justify-center">
      <img v-if="gif.length > 0" :src="gif" />
    </div>
    <h2 class="text-center font-bold">{{ title }}</h2>
    <p class="text-center">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: "NoContent",
  props: {
    title: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    gif: {
      type: String,
      default: "",
    },
  },
};
</script>
