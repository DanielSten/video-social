<template>
  <div class="wrapper flex">
    <div class="block_youtube_logo">
      <RouterLink to="/"><div class="block_youtube_logo-image">LOGO</div></RouterLink>
    </div>
    <div class="block_input flex">
      <input class="block_input-field" type="search" placeholder="Введите запрос">
      <button class="block_input-btn_search"><i class='bx bx-search'></i></button>
    </div>
    <div class="block_account">
      <div class="block_account-image"></div>
    </div>

  </div>

</template>

<script>
export default {
  name: "header-menu"
}
</script>

<style scoped>
.wrapper{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: white;
}
.flex{
  display: flex;
}
.block_youtube_logo{
  padding: 18px 14px 30px 16px;
}
.block_youtube_logo-image{
  background-color: grey;
  height: 20px;
  width: 90px;
  color: white;
  font-weight: 900;
}

.block_input{
  border: solid 1px #cecece;
  height: 40px;
  border-radius: 40px 40px 40px 40px;
  margin-top: 8px;
  width: 60%;
  max-width: 460px;
  margin-left: 25%;
}
.block_input-field{
  display: block;
  margin-left: 3%;
  border: 0;
  width: 97%;
  height: 24px;
  margin-top: 7px;
  outline: none !important;
  font-size: 16px;
}
.block_input-btn_search{
  border: 0;
  border-radius: 0 40px 40px 0;
  border-left: solid 1px #cecece;
  background-color: #f8f8f8;
}
.bx-search{
  font-size: 23px;
  line-height: 38px;
  padding: 0 14px;
}

.block_account{
  margin-top: 11px;
  position: absolute;
  right: 40px;
}
.block_account-image{
  width: 35px;
  height: 35px;
  background-color: grey;
  border-radius: 1000px;
}
</style>