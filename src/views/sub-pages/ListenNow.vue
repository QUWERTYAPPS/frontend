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

    <p class="text-center">Recomendations TODO: sort by: views in library divide views (Globaly)</p>

    <div class="width-100p display-inline-block">
      <q-card class="margin-16">
        <div class="padding-16 display-flex scroll-x no-wrap">
          <SingeAlbumCard
              v-for="song in songs"
              :key="songs.indexOf(song)"
              :song="song"
          />
        </div>
      </q-card>
    </div>


    <p class="text-center">will you add to the library? TODO: sort by: global views in last 24 hours !!Max 24 songs!!</p>

    <div class="width-100p display-inline-block">
      <q-card class="margin-16">
        <div class="padding-16 display-flex scroll-x no-wrap">
          <SingeAlbumCard
              v-for="song in songs"
              :key="songs.indexOf(song)"
              :song="song"
          />
        </div>
      </q-card>
    </div>
	</div>
</template>

<script>
	import SingeAlbumCard from '@/components/SingeAlbumCard'
	import '@/styles/Home.sass'

	export default {
		name: 'ListenNow',
		components: { SingeAlbumCard },
		data() {
			return {
				songs: [
					{
						cover: 'nevermind.jpg',
						title: 'Lithium',
						author: 'Nirvana',
						album: 'Nevermind',
						views: 21000000,
					},
					{
						cover: 'niemozliwe.jpg',
						title: 'Dzień Dobry',
						author: 'Kwiat Jabłoni',
						album: 'Niemożliwe',
						views: 3000000,
					},
					{
						cover: 'am.jpg',
						title: 'Fireside',
						author: 'Arctics Monkeys',
						album: 'AM',
						views: 93000000,
					},
					{
						cover: 'hulanki.jpg',
						title: 'Szklanki',
						author: 'Young Leosia',
						album: 'Hulanki',
						views: 25000000,
					},
				],
				sortedSongs: [],
			}
		},
		methods: {
			sortSongsByViews() {
				// this.sortedSongs.push(this.songs[0])
				// this.songs.shift()
				//
				// console.log(this.sortedSongs)
				// this.songs.map(song => song.views > this.sortedSongs[0].views ? this.sortedSongs.unshift(song) : this.sortedSongs.push(song))

				this.sortedSongs.push(...this.songs)
				this.sortedSongs.sort((a, b) => b.views - a.views)
			},
		},
		mounted() {
			this.sortSongsByViews()
		},
	}
</script>
