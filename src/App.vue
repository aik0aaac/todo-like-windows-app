<template>
  <window>
    <template #body>
      <router-view />
    </template>
  </window>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Window from "./components/layouts/Window.vue";

export default defineComponent({
  components: { Window },
});
</script>

<style lang="sass">
// リセットCSS
body
  margin: 0
  padding: 0
</style>
