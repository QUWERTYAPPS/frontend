<template>
	<div>
		<div>
			<h1 class="text-center">Listen Now</h1>
            <p class="text-center">sort by views 😎</p>

			<div class="width-100p display-inline-block">
				<q-card class="margin-16">
					<div class="padding-16 scroll-x no-wrap">
						<q-btn
							color="grey-9"
							:style="{ backgroundImage: '@/assets/samples/' + song.cover }"
							v-for="song in sortedSongs"
                            :key="sortedSongs.indexOf(song)"
							class="display-flex song-button margin-4"
							style="width: 140px"
						>
							<img :src="require('@/assets/samples/' + song.cover)" class="rounded-borders float-left" width="128" height="128" alt="" />
							<div class="margin-4">
								<p class="song-title-tile">{{ song.title }}</p>
								<p class="song-author-tile">{{ song.author }}</p>
								<p class="song-album-tile">{{ song.album }}</p>
							</div>
						</q-btn>
					</div>
				</q-card>
			</div>
		</div>
	</div>
</template>

<script>
    import '@/styles/Home.sass'

	export default {
		name: 'ListenNow',
		data() {
			return {
				songs: [
                    {
                        cover: 'nevermind.jpg',
                        title: 'Lithium',
                        author: 'Nirvana',
                        album: 'Nevermind',
                        views: 370000000
                    },
                    {
                        cover: 'niemozliwe.jpg',
                        title: 'Dzień Dobry',
                        author: 'Kwiat Jabłoni',
                        album: 'Niemożliwe',
                        views: 3000000
                    },
                    {
                        cover: 'am.jpg',
                        title: 'Fireside',
                        author: 'Arctics Monkeys',
                        album: 'AM',
                        views: 93000000
                    },
                    {
                        cover: 'hulanki.jpg',
                        title: 'Szklanki',
                        author: 'Young Leosia',
                        album: 'Hulanki',
                        views: 25000000
                    }
                ],
                sortedSongs: []
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
                this.sortedSongs.sort((a, b) => b.views - a.views);
            }
        },
        mounted() {
            this.sortSongsByViews()
        }
    }
</script>
