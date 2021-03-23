<template>
  <div class="window">
    <!-- タイトルバー -->
    <div class="title-bar">
      <div class="title-bar-text">TODO</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize" @click="minimizableApp"></button>
        <button aria-label="Maximize" @click="toggleFullScreeApp"></button>
        <button aria-label="Close" @click="exitApp"></button>
      </div>
    </div>

    <!-- Window内 -->
    <div class="window-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

declare global {
  interface Window {
    require: any;
  }
}
const electron = window.require("electron");

export default defineComponent({
  components: {},

  setup() {
    const toggleFullScreeApp = () => {
      electron.remote.getCurrentWindow().fullScreen = !electron.remote.getCurrentWindow()
        .fullScreen;
    };

    const minimizableApp = () => {
      electron.remote.getCurrentWindow().minimize();
    };

    const exitApp = () => {
      electron.remote.getCurrentWindow().close();
    };

    return { toggleFullScreeApp, minimizableApp, exitApp };
  },
});
</script>

<style lang="sass">
// Window枠
.window
  max-width: 100%
  // background-color: white
  // タイトルバー
  .title-bar
    -webkit-app-region: drag
  // Windows枠内
  .window-body
    height: 90vh
</style>
