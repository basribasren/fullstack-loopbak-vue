<template>
	<v-container fluid grid-list-md>
		<v-layout row wrap>
			<v-flex grow xs12>
				<audio id="player" ref="player" 
					controls 
					autoplay 
					preload="metadata"
					style="width:100%;">
					<source :src="item.url_streaming">
				</audio>
			</v-flex>
		</v-layout>
		
		<v-item-group>
			<v-layout row wrap>
				<v-flex v-for="(audio, index) in audios"
					:key="audio.id"
					xs12 
					md3
				>
					<audio-item :item="audio" 
						@selectAudio="selectAudio"
					></audio-item> 
				</v-flex>
			</v-layout>
		</v-item-group>
	</v-container>
</template>

<script>
import AudioItem from '@/components/Audio/Item.vue'

export default {
	components: {
		'audio-item': AudioItem,
	},
	data: () => ({
		item: {},
		audios: []
	}),
	mounted () {
		this.audio = this.$refs.player
	},
	beforeMount() {
		this.getListRadio()
	},
	methods: {
		getListRadio () {
			this.audios = [
				{
					id: 1,
					name: 'MFM Malang',
					inisial: '101.3 MFM',
					url_streaming: 'http://202.164.218.22:8222/;',
					url_website: 'http://mfm1013.com/',
					frekuensi: 101.3
				},
				{
					id: 2,
					name: 'MFM Malang',
					inisial: '101.3 MFM',
					url_streaming: 'http://202.164.218.22:8222/;',
					url_website: 'http://mfm1013.com/',
					frekuensi: 101.3
				},
				{
					id: 3,
					name: 'Radio Sonora FM',
					inisial: 'Sonora FM',
					url_streaming: 'http://101.50.0.77:8000/sonora.aac',
					url_website: 'https://www.indikafm.com/',
					frekuensi: 92.0
				}
			]
		},
		selectAudio (data) {
			this.item = data
			this.audio.load()
		}
	}
}
</script>

<style>

</style>