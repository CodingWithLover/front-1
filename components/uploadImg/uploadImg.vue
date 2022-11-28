<template>
	<view class="uploads">
		<view class="imgtop flex wrap">
			<scroll-view :scroll-y="true" class="scroll">
				<view class="imglist flex wrap">
					<block v-for="(item,index) in ImageList" :key="index" v-if="ImageList.length>0">
						<view class="imgbox">
							<image class="imageitem" :src="item" mode="aspectFill"></image>
							<!-- <image @click="del(ind)" src='../../static/send-del.png' class='del-img'></image> -->
						</view>
					</block>
					<view class="picbox flex direaction center" @click="addImage">
						<!-- <image src="../../static/addpic.png" mode=""></image> -->
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- <view class="sendbtn flex align center" @click="sendque">
			多图上传
		</view> -->
	</view>
</template>

<script>
	import {apiList} from '@/common/api.js'
	export default {
		data() {
			return {
				ImageList:[]
			};
		},
		props: ['params'],
		created() {
			// this.ImageList = this.params.tempFilePaths;
		},
		methods: {
			// 添加图片
			addImage() {
				// let L = 8 - this.ImageList.length;
				// if(L<=0)
				// return 0;
				let that = this;
				uni.chooseImage({
					count: 9,
					sizeType: 'compressed',
					sourceType: ['album'],
					success(res) {
						// console.log('临时图片数组', res);
						for (var i = 0; i < res.tempFilePaths.length; i++) {
							
						
						uni.getFileSystemManager().readFile({
						    filePath: res.tempFilePaths[i], //选择图片返回的相对路径
						    encoding: 'base64', //编码格式
						    success: res => { //成功的回调
						        let base64 = 'data:image/jpeg;base64,' + res.data //不加上这串字符，在页面无法显示的哦
						        //
								// console.log(base64,"99999")
								var arrList = [{
								  'fileName': '测试.jpg',
								  'fileStr': base64.replace(/^data:image\/\w+;base64,/, ''),
								  'width': '1024',
								  'height': '1024'
								}]
								apiList.fileStr(arrList).then(res=>{
									// console.log(res)
									let tempArr = []
									tempArr.push(res.data[0].filePath)
									tempArr.map(image=>{
										image = image.replace(/\.1024x1024./g,'.')
										// console.log('image',image)
										that.ImageList.push(image)
									})
									
								}).catch(error=>{
									
								})
								that.$emit('changeList',that.ImageList);
						    }
						})
						}
						 
						        
						
						// let a = [];
						// that.params.tempFilePaths = (that.params.tempFilePaths).concat(res.tempFilePaths);
						// that.ImageList = that.ImageList.concat(res.tempFilePaths);
						// that.$emit('changeList',that.ImageList);
					}
				})
			},
			sendque() {
				let that = this;
				if(this.params.tempFilePaths.length==0){
					uni.showToast({
						title:'图片不能为空',
						icon:'none'
					})
				}else if(this.params.url==''){
					uni.showToast({
						title:'上传地址不能为空',
						icon:'none'
					})
				}else if(this.params.uploadname==''){
					uni.showToast({
						title:'约束文件对应的key值uploadname不能为空',
						icon:'none'
					})
				}else{
					// util.uploadImage(that.params).then(res => {
					// 	that.$emit('imglist',res);
					// })
				}
			},
			del(index){
				this.ImageList.splice(index,1);
				this.$emit('changeList',this.ImageList);
			}
		}
	}
</script>

<style lang="scss">
	.uploads {
		position: relative;
		
		z-index: 999;
		.flex {
			display: -webkit-flex;
			/* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
			display: -moz-flex;
			/* Firefox 18+ */
			display: flex;
			/* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */
			-webkit-align-items: center;
			-ms-align-items: center;
			align-items: center;
		}
		.justify {
			-webkit-justify-content: space-between;
			-ms-justify-content: space-between;
			justify-content: space-between;
		}
		.center {
			-webkit-justify-content: center;
			-ms-justify-content: center;
			justify-content: center;
		}
		.direaction {
			-ms-flex-direction: column;
			-webkit-flex-direction: column;
			flex-direction: column;
		}
		.wrap {
			-ms-flex-wrap: wrap;
			-webkit-flex-wrap: wrap;
			flex-wrap: wrap;
		}
		.imgexample {
			text-align: center;
			margin-top: 13px;
			font-weight: 600;
		}
		.imgtop {
			margin-top: 30rpx;
			margin-bottom: 16rpx;
			.imglist {
				//background-color: yellow;
				//overflow-y: visible;
				//overflow-x: visible;
				.imgbox {
					margin-right: 13rpx;
					margin-top: 16rpx;
					position: relative;
					.imageitem {
						width: 160rpx;
						height: 160rpx;
						border-radius: 10rpx;
					}
					.del-img {
						width: 32rpx;
						height: 32rpx;
						position: absolute;
						right: -10rpx;
						top: -16rpx;
					}
				}
				.imgbox:nth-child(4n) {
					margin-right: 0;
				}
			}
			.picbox {
				width: 160rpx;
				height: 160rpx;
				border-radius: 10rpx;
				border: 2rpx solid rgb(219, 219, 219);
				margin-top: 12rpx;
				image {
					width: 70rpx;
					height: 62rpx;
				}
			}
		}
		.sendbtn {
			// margin: 270rpx 30rpx 53rpx 30rpx;有老师选择
			// margin: 390rpx 30rpx 53rpx 30rpx;
			margin: 80rpx 30rpx 53rpx 30rpx;
			height: 87rpx;
			font-size: 32rpx;
			color: #fff;
			background-color: rgb(60, 135, 202);
			border-radius: 44rpx;
		}
	}
	.scroll{
		max-height: 400rpx;
		//height: 400rpx;
		//background-color: red;
		overflow: scroll;
	}
</style>
