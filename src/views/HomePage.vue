<template>
  <div class="flex">
    <div class="block_menu">
      <nav-menu></nav-menu>
    </div>
    <div class="block_cards">
      <card-video  v-for="video in videos" :video="video"></card-video>
    </div>


  </div>

</template>

<script>
import navMenu from "../components/nav-menu/nav-menu.vue";
import cardVideo from "../components/card-video/card-video.vue";

export default {
  name: "HomePage",
  components: {
    navMenu,
    cardVideo,
  },
  data() {
    return {
      videos: [
        {
          title: 'ФИНАЛ | 1 матч | Зенит-Казань - Динамоaaaaaaaaaаааааа ааааааааа аааааааааааааааа аааа',
          account: 'Volleyball profession Prooooo',
          views: 13,
          date: 1,
          time: '13:45',
          srcAccount: '/icons/account.jpg',
          coverImage: {
            id: 1,
            src: '/icons/image_account.jpg',
            title: "Обложка",
            description: null,
          },
        },
        {
          title: 'FEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEeeeeeeeeeeeeeeeeeeee',
          account: 'Volleyball profession Prooooo',
          views: 13,
          date: 1,
          time: '13:45:03',
          srcAccount: '/icons/account.jpg',
          coverImage: {
            id: 1,
            src: '/icons/image_account.jpg',
            title: "Обложка",
            description: null,
          },
        },
        {
          title: 'ФИНАЛ | 1 матч | Зенит-Казань - Динамоaaaaaaaaa',
          account: 'Volleyball profession Prooooo',
          views: 13,
          date: 1,
          time: '13:45:03',
          srcAccount: '/icons/account.jpg',
          coverImage: {
            id: 1,
            src: '/icons/image_account.jpg',
            title: "Обложка",
            description: null,
          },
        },
        {
          title: 'ФИНАЛ | 1 матч | Зенит-Казань - Динамоaaaaaaaaa',
          account: 'Volleyball profession Prooooo',
          views: 13,
          date: 1,
          time: '13:45:03',
          srcAccount: '/icons/account.jpg',
          coverImage: {
            id: 1,
            src: '/icons/image_account.jpg',
            title: "Обложка",
            description: null,
          },
        },
        {
          title: 'FEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEeeeeeeeeeeeeeeeeeeee',
          account: 'Volleyball profession Prooooo',
          views: 13,
          date: 1,
          time: '13:45:03',
          srcAccount: '/icons/account.jpg',
          coverImage: {
            id: 1,
            src: '/icons/image_account.jpg',
            title: "Обложка",
            description: null,
          },
        },
        {
          title: 'ФИНАЛ | 1 матч | Зенит-Казань - Динамоaaaaaaaaa',
          account: 'Volleyball profession Prooooo',
          views: 13,
          date: 1,
          time: '13:45:03',
          srcAccount: '/icons/account.jpg',
          coverImage: {
            id: 1,
            src: '/icons/image_account.jpg',
            title: "Обложка",
            description: null,
          },
        },
        {
          title: 'FEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEeeeeeeeeeeeeeeeeeeee',
          account: 'Volleyball profession Prooooo',
          views: 13,
          date: 1,
          time: '13:45:03',
          srcAccount: '/icons/account.jpg',
          coverImage: {
            id: 1,
            src: '/icons/image_account.jpg',
            title: "Обложка",
            description: null,
          },
        },
        {
          title: 'ФИНАЛ | 1 матч | Зенит-Казань - Динамоaa aaa aaaa ввввввввв ввввввввввввввввввввввввввввввв',
          account: 'Volleyball profession Prooooo',
          views: 13,
          date: 1,
          time: '13:45:03',
          srcAccount: '/icons/account.jpg',
          coverImage: {
            id: 1,
            src: '/icons/image_account.jpg',
            title: "Обложка",
            description: null,
          },
        },
      ],
    };
  },

}
</script>

<style scoped>

.flex{
  display: flex;
}
.block_menu{
  min-width: 262px;
}
.block_cards{
  margin-top: 80px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
}
</style>