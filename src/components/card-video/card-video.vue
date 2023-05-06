<template>
  <div class="block_card_video">
    <div class="block_card_video-miniature">
      <img alt=""
           :src="video.coverImage.src">
      <div class="block_card_video-miniature_time">{{ video.time }}</div>
    </div>
    <div class="block_card_video-info flex">
      <div class="block_card_video-info_image-user">
        <img :src="video.srcAccount"
             alt="">
      </div>
      <div class="block_card_video-info_description">
        <div class="block_card_video-info_description-name">{{ video.title }}</div>
        <div class="block_card_video-info_description-username">{{ video.account }}</div>
        <div class="block_card_video-info_description-stat flex">
          <div class="block_card_video-info_description-views">{{ video.views }} тыс. просмотров</div>
          <div class="block_card_video-info_description-date">_{{ video.date }} год назад</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-video",
  props: {
    video: {
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
  },
}
</script>

<style scoped>
.flex{
  display: flex;
}
.block_card_video{
  margin: 10px;
  transition-duration: 1s;
}
.block_card_video:hover{
  transform: scale(1.01);
  transition-duration: 1s;
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
}
.block_card_video-miniature{
  background-color: #090909;
  width: 360px;
  height: 200px;
}

.block_card_video-miniature img{
  height: 100%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}

.block_card_video-miniature_time{
  font-family: "Roboto","Arial",sans-serif;
  position: absolute;
  bottom: 3px;
  right: 3px;
  font-size: 12px;
  font-weight: 700;
  color: #f3f3f3;
  background-color: #050505;
  border-radius: 5px;
  padding: 0 5px;
}

.block_card_video-info{
  margin-top: 10px;
  max-width: 360px;
}
.block_card_video-info_image-user{
  height: 40px;

}

.block_card_video-info_image-user img{
  height: 100%;
  width: 40px;
  object-fit: cover;
  border-radius: 99999px;
}


.block_card_video-info_description{
  margin-left: 15px;
  overflow-x: hidden;
}

.block_card_video-info_description-name{
  font-family: "Roboto","Arial",sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 21px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.block_card_video-info_description-username{
  font-size: 13px;
  color: #818181;
  font-weight: 500;
  margin-top: 5px;
}

.block_card_video-info_description-stat{
  font-size: 13px;
  color: #818181;
  font-weight: 500;
}
</style>