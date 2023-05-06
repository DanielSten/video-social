<template>
  <div class="wrapper scroll">
    <div class="block_content">
      <left-menu-main></left-menu-main>
    </div>
  </div>
</template>

<script>
import leftMenuMain from "./left-menu-main.vue";


export default {
  name: "nav-menu",
  components: {
    leftMenuMain,

  },
}
</script>

<style scoped>
.wrapper{
  position: fixed;
  left: 0;
  top: 50px;
  width: 230px;
  height: calc(100vh);
  font-size: 18px;
  color: black;
  z-index: 10;
  padding: 12px;
  overflow: hidden;

}
.scroll:hover{
  overflow-y: scroll;
}
.scroll::-webkit-scrollbar {
  width: 10px;
  background-color: #f9f9fd;
}

.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #797979;
}

.scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: #f9f9fd;
}
.block_content{
  width: 200px;
}
</style>