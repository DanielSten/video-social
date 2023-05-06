<template>
  <div class="block_btn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "btn-menu"
}
</script>

<style scoped>
.block_btn{
  width: 200px;
  height: 40px;
  padding: 0 12px;
  border-radius: 10px;
}
.block_btn:hover{
  background-color: #f1f1f1;
}

</style>