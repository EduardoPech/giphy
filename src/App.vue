<template>
  <div id="app" class="background">
    <NavigationMenu />
    <transition name="fade" mode="out-in">
      <router-view class="view" />
    </transition>
  </div>
</template>

<script>
import NavigationMenu from "./components/NavigationMenu.vue";

export default {
  name: "App",
  components: {
    NavigationMenu,
  },
};
</script>

<style lang="scss">
body {
  background-color: #cbd5e1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes bg {
  0% {
    background: linear-gradient(
      102.4deg,
      rgba(253, 189, 85, 1) 7.8%,
      rgba(249, 131, 255, 1) 100.3%
    );
  }
  20% {
    background: linear-gradient(
      109.6deg,
      rgb(16, 16, 221) 11.2%,
      rgb(193, 60, 210) 53.7%,
      rgba(0, 212, 255, 1) 100.2%
    );
  }
  40% {
    background: radial-gradient(
      circle farthest-corner at 8.7% 21.2%,
      rgba(146, 213, 171, 1) 0.6%,
      rgba(148, 247, 184, 1) 73.1%
    );
  }
  60% {
    background: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(255, 136, 20, 1) 0.1%,
      rgba(254, 197, 31, 1) 90%
    );
  }
  100% {
    background: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(255, 94, 247, 1) 17.8%,
      rgba(2, 245, 255, 1) 100.2%
    );
  }
}
body {
  animation: 16s bg infinite;
}
</style>
