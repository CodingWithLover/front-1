<template>
	<view>
		我的
	</view>
</template>

<script>
	import {apiList} from '@/common/api.js'
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			this.request()
		},
		methods: {
			request() {
				 apiList.getShareInfo('').then(res=>{
					 console.log('123')
				 }).catch(error=>{
					 console.log('456')
				 })
			}
			
		}
	}
</script>

<style lang="scss">

</style>
