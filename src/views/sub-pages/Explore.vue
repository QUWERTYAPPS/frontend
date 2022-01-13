<template>
  <div>
    <h1 class="text-center">Listen Now</h1>
    <p class="text-center">Most popular in your library</p>

    <div class="width-100p display-inline-block">
      <q-card class="margin-16">
        <div class="padding-16 display-flex scroll-x no-wrap">
          <SingeAlbumCard
              v-for="song in sortedSongs"
              :key="sortedSongs.indexOf(song)"
              :song="song"
          />
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Explore"
}
</script>

<style scoped>

</style>