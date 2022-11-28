<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	// import ajax from '@/common/method.js';
	import {apiList} from '@/common/api.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			
			// let advies = await ajax.request("/iquote/user/getShareInfo",'', 'get', null )
			// let queryRwzCusLists = await ajax.request('/rwz/customer/queryRwzCusLists','','post')
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

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
