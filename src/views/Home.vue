<template>
	<div>
		<q-card class="padding-16">
			<div>
				<q-btn-group class="margin-auto">
					<q-btn color="primary" icon="skip_previous" />
					<q-btn @click="playing = !playing" color="primary" :icon="playing ? 'pause' : 'play_arrow'" />
					<q-btn color="primary" icon="skip_next" />
				</q-btn-group>
				<div class="absolute-x-center bottom-border-radius width-300 padding-16 bg-grey-9">
					<img class="rounded-borders" src="@/assets/samples/nevermind.jpg" width="30" />
					<div class="absolute-x-center margin-top-16">
						<div>{{ title }} || {{ author }}</div>
						<div class="align-center color-grey-6">{{ album }}</div>
					</div>
				</div>
				<q-btn-group class="absolute-top-right margin-16">
					<q-btn @click="loop = !loop" :color="loop ? 'primary' : 'default'" icon="loop" />
					<q-btn @click="shuffle = !shuffle" :color="shuffle ? 'primary' : 'default'" icon="shuffle" />
				</q-btn-group>
			</div>
			<br />
			<q-tabs v-model="active">
				<q-tab name="listen-now" label="Listen now" />
				<q-tab name="explore" label="Explore" />
				<q-tab name="library" label="Library" />
				<q-tab name="playlists" label="Playlists" />
				<q-tab name="your account" label="Your account" />
				<q-tab name="upload" label="Upload" />
				<q-tab name="search" label="Search" />
				<q-tab name="settings" label="Settings" />
			</q-tabs>
		</q-card>
	</div>
	<ListenNow v-if="active === 'listen-now'" />
</template>

<script>
	import ListenNow from '@/views/sub-pages/ListenNow'
	import '@/styles/Home.sass'

	export default {
		name: 'Home',
		components: { ListenNow },
		data() {
			return {
				playing: false,
				title: 'Lithium',
				author: 'Nirvana',
				album: 'Nevermind',
				loop: false,
				shuffle: false,
				active: 'listen-now',
			}
		},
	}
</script>
