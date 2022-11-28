<template>
	<view>
		<view class="dengtop">
		</view>
		<view class="dengconst">
			
		</view>
		
		
		
	
		
		
	</view>
</template>

<script> 
	
	export default {
		components:{
			
		},
		data() {
			return {
				
			}
		},
		mounted(){
			
		},
		methods: {
			
			// 登录的接口
			submit(){
				
				apiList.login({
					accountName: this.phone,
					accountPassword: this.password,
					sysCode: 'rwz',
					userInfo: this.userInfo,
					loginType:2
				}).then(res=>{
					console.log(res)
					uni.setStorageSync('token-chat',res.data.result.token)
					uni.setStorageSync('rwz_date',res.data.result)
					// uni.switchTab({
					// 	url: '/pages/index/index'
					// })
					
				}).catch(error=>{
					
				})
				
			},
			
		}
		
	}
</script>

<style>
.dengtop{
	width:100%;
	height:154px;
	background:#2196F3;
	border-radius:0px 0px 70px 70px;
	position:relative;

}
.dengconst{
	width: 88%;
	    height: 216px;
	    border: solid 1px #efefef;
	    position: absolute;
	    top: 121px;
	    right: 21px;
	    background: #fff;
	    border-radius: 10px;
}
</style>
