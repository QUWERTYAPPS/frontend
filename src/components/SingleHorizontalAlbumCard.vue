<template>
  <div>
    <q-btn color="grey-9" :style="{ backgroundImage: '@/assets/samples/' + song.cover }" class="song-button margin-4" style="width: 140px">
      <img :src="require('@/assets/samples/' + song.cover)" class="song-cover rounded-borders shadow-6 float-left" alt="" />

      <div class="margin-4">
        <p class="song-title-tile">{{ song.title }}</p>
        <p class="song-author-tile">{{ song.author }}</p>
        <p class="song-album-tile">{{ song.album }}</p>
      </div>
    </q-btn>
  </div>
</template>

<script>
  export default {
    name: "SingleHorizontalAlbumCard",
    props: {
      song: {
        type: Object,
        required: true,
      },
    },
}
</script>

<style scoped>

</style>