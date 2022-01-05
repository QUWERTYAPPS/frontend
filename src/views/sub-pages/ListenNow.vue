<template>
  <div>
      <div>
        <h1>Listen Now</h1><br/>

        <div class="width-100prc display-inline-block">
          <q-card class=" margin-16px">
            <div class="padding-16px scroll-x no-wrap">
              <q-btn color="grey-9" :style="{backgroundImage: '@/assets/sample/' + song.cover}" v-for="song in songs" :key="song.id" class="display-flex song-button margin-4px" style="width: 142px">
                <img :src="require('@/assets/sample/' + song.cover)" class="rounded-borders float-left" width="128" height="128">
                <div style="width: 100%"/>
                <div class="margin-4px">
                  <p class="song-title-tile">{{song.title}}</p>
                  <p class="song-author-tile">{{song.author}}</p>
                  <p class="song-album-tile">{{song.album}}</p>
                </div>
              </q-btn>
            </div>
          </q-card>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "ListenNow",
  data() {
    return {
      songs: [
        {id: 0, title: "asd", author: "asdds", album: "noasf", cover: 'c1.jpg'},
        {id: 0, title: "ahladfasdji", author: "asdds, quasd", album: "noasf", cover: 'c2.jpg'},
        {id: 0, title: "waw", author: "asddasds", album: "noasf", cover: 'c3.jpg'},
        {id: 0, title: "wiwi", author: "asasd", album: "asdghf", cover: 'c2.jpg'},
        {id: 0, title: "12tw", author: "sfdklj", album: "adsgh", cover: 'c4.jpg'},
        {id: 0, title: "waaw", author: "fsdikjo", album: "aghfgds", cover: 'c1.jpg'},
        {id: 0, title: "wqwaw", author: "asdkop", album: "agfhd", cover: 'c3.jpg'},
        {id: 0, title: "asdw", author: "wino", album: "sdajhy", cover: 'c2.jpg'},
        {id: 0, title: "bhw", author: "abkef", album: "hjkfgs", cover: 'c4.jpg'},
        {id: 0, title: "lkjw", author: "ayreghgt", album: "fsgdgujk", cover: 'c1.jpg'},
        {id: 0, title: "ggg", author: "fsddfgh", album: "scdvd", cover: 'c2.jpg'},
        {id: 0, title: "gjgj", author: "adsdsaffsd", album: "fsgdgujk", cover: 'c3.jpg'},
        {id: 0, title: "quwe", author: "hjfgdfsg", album: "fsgdgujk", cover: 'c2.jpg'},
        {id: 0, title: "rty", author: "hkjsdfx", album: "fsgdgujk", cover: 'c4.jpg'},
        {id: 0, title: "dsa", author: "xfgjhgdrtg", album: "fsgdgujk", cover: 'c1.jpg'},
        {id: 0, title: "lkasd", author: "xgsfhjg", album: "fsgdgujk", cover: 'c2.jpg'},
        {id: 0, title: "asd", author: "gfdxhvj", album: "fsgdgujk", cover: 'c4.jpg'},
      ]
    }
  },
  computed: {
  }
}
</script>