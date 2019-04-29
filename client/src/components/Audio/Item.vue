<template>
	<v-item>
		<v-card slot-scope="{active, toggle}"
			:color="active ? '#D6A102' : 'amber'" 
			class="white--text"
		>
			<v-img :src="`https://picsum.photos/500/300?image=${Math.floor(Math.random() * (10 - 4)) * 5 + 10}`" 
				:lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
				height="125px"
				@click="toggle(); playAudio(active);"
			>
				<v-expand-transition>
					<div
						v-if="active"
						class="transition-fast-in-fast-out black darken-3 v-card--reveal"
					>
						<div class="headline">{{ item.inisial }}</div>
						<div>{{ item.name }}</div>
						<div>{{ item.frekuensi }} FM</div>
					</div>
				</v-expand-transition>
			</v-img>
			<v-divider light></v-divider>
			<v-card-actions>
				<v-btn icon @click="toggle(); playAudio(active);">
					<v-icon :color="active ? 'white': 'black'">
						{{ active ? "pause" : "play_arrow"}}
					</v-icon>
				</v-btn>
				<v-spacer></v-spacer>
				<v-btn icon @click="bookmarkAudio()">
					<v-icon :color="onBookmark ? 'white': 'black'">
						bookmark
					</v-icon>
				</v-btn>
				<v-btn icon @click="openDetail(item.id)">
					<v-icon color="white">open_in_new</v-icon>
				</v-btn>
				<v-btn icon>
					<v-icon color="white">share</v-icon>
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-item>
</template>


<script>
export default {
	name: 'AudioItem',
	props: {
		item: {
			type: Object,
			default: () => {},
		}
	},  
	data: () => ({
		onBookmark: false
	}),
	methods: {
		playAudio: function (active) {
			if (active) {
				this.$emit('selectAudio', {})
			} else {
				this.$emit('selectAudio', this.item)
			}
		},
		bookmarkAudio: function () {
			return this.onBookmark = !this.onBookmark
		},
		openDetail: function (id) {
			this.$router.push({ path: `/about/${id}` })
		}
	}
}
</script>

<style>
.v-card--reveal {
	align-items: center;
	bottom: 0;
	justify-content: center;
	opacity: .5;
	position: absolute;
	width: 100%;
	height: 100%;
	padding:20px;
}
</style>