<template>
  <div class="container mx-auto">
    <h1 class="font-mono text-2xl text-center font-bold my-5">
      Historial de búsqueda
    </h1>
    <ManageHistory></ManageHistory>
  </div>
</template>

<script>
import ManageHistory from "@/components/ManageHistory.vue";

export default {
  name: "HistoryView",
  components: {
    ManageHistory,
  },
};
</script>
