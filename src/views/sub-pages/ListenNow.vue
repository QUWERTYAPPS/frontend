<template>
	<div>
		<div>
			<h1>Listen Now</h1>
			<br />

			<div class="width-100prc display-inline-block">
				<q-card class="margin-16px">
					<div class="padding-16px scroll-x no-wrap">
						<q-btn
							color="grey-9"
							:style="{ backgroundImage: '@/assets/samples/' + song.cover }"
							v-for="song in songs"
							:key="song.id"
							class="display-flex song-button margin-4px"
							style="width: 142px"
						>
							<img :src="require('@/assets/samples/' + song.cover)" class="rounded-borders float-left" width="128" height="128" />
							<div style="width: 100%" />
							<div class="margin-4px">
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
	export default {
		name: 'ListenNow',

		data() {
			return {
				songs: [],
			}
		},
		computed: {},
	}
</script>
