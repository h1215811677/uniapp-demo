<template>
	<view class="wrap">
		<u-swiper :list="list" :effect3d="true"></u-swiper>
		<uni-steps :options="[{title: '事件一'}, {title: '事件二'}, {title: '事件三'}, {title: '事件四'}]" :active="1"></uni-steps>
		
		<view>你好，哈哈</view>
		</view>
	
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}
			],
			ccc: 11
		};
	},
	created() {
		setTimeout(() => {
			this.list = [
				{
					image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}
			];

			console.log(this.list);
		}, 10000);

	    this.$request('/getEnv',{},'GET').then(res=>{
			console.log(res)
		})
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.wrap {
	padding: 40rpx;
}
</style>
