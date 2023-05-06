<template>
  <div>
    <div class="content">
      <router-link to="/">
        <btn-menu class="flex" :class="{active: isTabActive(0)}" @click="onTabClick(0)">
          <div class="icon"><i class='bx bxs-home'></i></div>
          <div class="name">Главная</div>
        </btn-menu>
      </router-link>
      <btn-menu class="flex" :class="{active: isTabActive(1)}" @click="onTabClick(1)">
        <div class="icon"><i class='bx bxs-film'></i></div>
        <div class="name">Shorts</div>
      </btn-menu>
      <btn-menu class="flex" :class="{active: isTabActive(2)}" @click="onTabClick(2)">
        <div class="icon"><i class='bx bxs-add-to-queue'></i></div>
        <div class="name">Подписки</div>
      </btn-menu>
    </div>

    <div class="content">
      <btn-menu class="flex" :class="{active: isTabActive(3)}" @click="onTabClick(3)">
        <div class="icon"><i class='bx bx-desktop'></i></div>
        <div class="name">Библиотека</div>
      </btn-menu>
      <btn-menu class="flex" :class="{active: isTabActive(4)}" @click="onTabClick(4)">
        <div class="icon"><i class='bx bx-history' ></i></div>
        <div class="name">История</div>
      </btn-menu>
      <btn-menu class="flex" :class="{active: isTabActive(5)}" @click="onTabClick(5)">
        <div class="icon"><i class='bx bxs-videos' ></i></div>
        <div class="name">Ваши видео</div>
      </btn-menu>
      <btn-menu class="flex" :class="{active: isTabActive(6)}" @click="onTabClick(6)">
        <div class="icon"><i class='bx bxs-timer' ></i></div>
        <div class="name">Смотреть позже</div>
      </btn-menu>
      <btn-menu class="flex" :class="{active: isTabActive(7)}" @click="onTabClick(7)">
        <div class="icon"><i class='bx bxs-video-recording'></i></div>
        <div class="name">Ваши клипы</div>
      </btn-menu>
      <btn-menu class="flex" :class="{active: isTabActive(8)}" @click="onTabClick(8)">
        <div class="icon"><i class='bx bxs-like' ></i></div>
        <div class="name">Понравившиеся</div>
      </btn-menu>
    </div>
  </div>

</template>

<script>
import btnMenu from "./btn-menu.vue";



export default {
  name: "left-menu-main",
  components: {
    btnMenu,
  },
  data() {
    return{
      tabActive: 0,
    }
  },
  methods: {
    isTabActive(num) {
      return this.tabActive === num;
    },
    onTabClick(num){
      this.tabActive = num;
    }
  },
}
</script>

<style scoped>
.flex{
  display: flex;
}

.content{
  border-bottom: 1px solid #d9d9d9;
  padding: 15px 0;
}
.content .active{
  background-color: #d9d9d9;
}
.icon{
  font-size: 22px;
  line-height: 40px;
  margin-right: 22px;
}
.name{
  font-family: "Roboto","Arial",sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 40px;
}
</style>