<template>
	<view class="content">
		<view class="">
			<picker mode="multiSelector" class="com"
			@columnchange="selectAre" 
			:range='areRange'
			:value='areIndex'
			 @cancel='cancelAre'
			@change="entryAre"
			>
				<text style="display: inline-flex;justify-content: center;">地理位置</text>
				<text class="right">&gt;</text>
				<text class="right" v-if="selectedAre">不限</text>
				<text class="right" v-else >{{areRange[0][areIndex[0]]}}-{{areRange[1][areIndex[1]]}}-{{areRange[2][areIndex[2]]}}</text>
			</picker>
		</view>
	</view>
</template>

<script>
	import {apiList} from '@/common/api.js'
	export default {
		props: {
		   
		  },
		data() {
			return {
				//地理位置
				selectedAre:true,
				areRange:[[],[],[]],
				areIndex:[0,0,0],
				province:[[],[]],
				city:[[],[]],
				are:[[],[]],
				addressList:[],
				provincesList:[]
			}
		},
		mounted() {
			this.responet()
			//初始化加载
		// this.initAre() 
		
		},
		methods: {
			responet(){
				apiList.queryProjectAreaById('').then(res=>{
					this.provincesList=res.data.result
					this.transitionList()
					// console.log(this.addressList.nodes,"888")
					// for (let i = 0; i < this.addressList.nodes.length; i++) {
					// 	this.areRange[0][i] = this.addressList.nodes[i].areaName
					// 	// this.province[0][i]=res.data.data[i].areaName
					// 	// this.province[1][i]=res.data.data[i].province_code
					// 	for(let j=0;j<this.addressList.nodes[i].nodes.length;j++){
					// 		this.areRange[1][i] = this.addressList.nodes[i].nodes[j].areaName
							
					// 		for(var k=0;k<)
					// 	}
					//   }
				}).catch(error=>{
					
				})
				
			},
			transitionList() {
			      const arr = {}
			      // 中国
			      this.provincesList.nodes.splice(2,1)
			      const objG = this.provincesList
			      for (let j = 0; j < objG.nodes.length; j++) {
			        const objP = objG.nodes[j]// 广东省
					
			        arr[objP.id] = {
			          region_name: objP.areaName,
			          region_id: objP.id,
			          parent: 0,
			          child: []
			        }
			        for (let k = 0; k < objP.nodes.length; k++) {
			          const objS = objP.nodes[k]// 深圳市
					  
					 
			          arr[objP.id].child[objS.id] = {
			            region_name: objS.areaName,
			            region_id: objS.id,
			            parent: objP.id,
			            child: []
			          }
			          for (let l = 0; l < objS.nodes.length; l++) {
			            const objQ = objS.nodes[l]// 南山区
						// this.areRange[2][l]=objQ.areaName
						// this.are[0][l]=objQ.areaName
						// this.are[1][l]=objQ.id
			            arr[objP.id].child[objS.id].child[objQ.id] = {
			              region_name: objQ.areaName,
			              region_id: objQ.id,
			              parent: objS.id
			            }
			            for (let m = 0; m < objQ.nodes.length; m++) {
			              // const objJD = objQ.nodes[m]// 西丽街道
			            }
			          }
			        }
			      }
			      this.addressList = arr
				  // console.log(this.addressList,"省市区，999999")
			    },
		//地区
		
		//选择
		selectAre:function(e){
			console.log('进入',this.provincesList)
			this.selectedAre=false
			this.areIndex[e.detail.column] = e.detail.value;
				if(e.detail.column==0 && e.detail.value!=0){
					this.province[0][0]=this.province[0][e.detail.value]
					this.province[1][0]=this.province[1][e.detail.value]
				}else if(e.detail.column==0 && e.detail.value==0){
					this.province[1][0]=110000 
					this.province[0][0]='北京'
				}
				if(e.detail.column==1 && e.detail.value!=0){
					this.city[0][0]=this.city[0][e.detail.value]
					this.city[1][0]=this.city[1][e.detail.value]
				}else if(e.detail.column==1 && e.detail.value==0){
					uni.request({
						//填你的接口地址
						url:'XXXXXXX',
						header:{
							
						},
						data:{
							province_code:this.province[1][0]
							},
						success: (res) => {
							// console.log(res,'市列表')
							for (let i=0;i<res.data.data.length;i++) {
								this.areRange[1][i]=res.data.data[i].short_name
							}
							for (let i=0;i<res.data.data.length;i++) {
								this.city[0][i]=res.data.data[i].short_name
							}
							for (let i=0;i<res.data.data.length;i++) {
								this.city[1][i]=res.data.data[i].city_code
							}
							uni.request({
								//填你的接口地址
								url:'XXXXXXX',
								header:{
								
								},
								data:{
									city_code:this.city[1][0]
								},
								success: (res) => {
									// console.log(res,'移动省得到区')
									if(res.statusCode==422){
										this.areRange[2].splice(0)
											this.areRange[2][this.areIndex[2]]=this.areRange[1][this.areIndex[1]]
									}else{
									this.areRange[2].splice(0)
										for (let i=0;i<res.data.data.length;i++) {
											this.areRange[2][i]=res.data.data[i].short_name
										}
										for (let i=0;i<res.data.data.length;i++) {
											this.are[0][i]=res.data.data[i].short_name
										}
										for (let i=0;i<res.data.data.length;i++) {
											this.are[1][i]=res.data.data[i].area_code
										}
									}
								}
							})
						}
					})
				}
				if(e.detail.column==2 && e.detail.value!=0){
					this.are[0][0]=this.are[0][e.detail.value]
					this.are[1][0]=this.are[1][e.detail.value]
				}else if(e.detail.column==2 && e.detail.value==0){
					uni.request({
						//填你的接口地址
						url:'XXXXXXX',
						header:{
						
						},
						data:{
							city_code:this.city[1][0]
						},
						success: (res) => {
							// console.log(res,'移动省得到区')
							if(res.statusCode==422){
								this.areRange[2].splice(0)
									this.areRange[2][this.areIndex[2]]=this.areRange[1][this.areIndex[1]]
							}else{
							this.areRange[2].splice(0)
								for (let i=0;i<res.data.data.length;i++) {
									this.areRange[2][i]=res.data.data[i].short_name
								}
								for (let i=0;i<res.data.data.length;i++) {
									this.are[0][i]=res.data.data[i].short_name
								}
								for (let i=0;i<res.data.data.length;i++) {
									this.are[1][i]=res.data.data[i].area_code
								}
							}
						}
					})
				}
			switch(e.detail.column){
				case 0:
					uni.request({
						//填你的接口地址
						url:'XXXXXXX',
						header:{
						
						},
						data:{
							province_code:this.province[1][0]
						},
						success: (res) => {
							// console.log(res,'点击省后获得的市')
							this.areRange[1].splice(0)
							this.areIndex[1]=0
							this.areIndex[2]=0
							for (let i=0;i<res.data.data.length;i++) {
								//名字太长做处理
								if(res.data.data[i].short_name.length>4){
								this.areRange[1][i]=res.data.data[i].short_name.substr(0,4)+'..'
								}else{
								this.areRange[1][i]=res.data.data[i].short_name
								}
							}
							for (let i=0;i<res.data.data.length;i++) {
								this.city[0][i]=res.data.data[i].short_name
							}
							for (let i=0;i<res.data.data.length;i++) {
								this.city[1][i]=res.data.data[i].city_code
							}
							//同时得到第一个区
							uni.request({
							//填你的接口地址
							url:'XXXXXXX',
								header:{
									
								},
								data:{
									city_code:this.city[1][0]
								},
								success: (res) => {
									// console.log(res,'移动省得到区')
									if(res.statusCode==422){
										this.areRange[2].splice(0)
											this.areRange[2][this.areIndex[2]]=this.areRange[1][this.areIndex[1]]
											this.are[1][0]=""
											this.are[0][0]=this.city[0][0]
									}else{
									this.areRange[2].splice(0)
										for (let i=0;i<res.data.data.length;i++) {
											if(res.data.data[i].short_name.length>4){
												this.areRange[2][i]=res.data.data[i].short_name.substr(0,4)+'..'
											}else{
												this.areRange[2][i]=res.data.data[i].short_name
											}
										}
										for (let i=0;i<res.data.data.length;i++) {
											this.are[0][i]=res.data.data[i].short_name
										}
										for (let i=0;i<res.data.data.length;i++) {
											this.are[1][i]=res.data.data[i].area_code
										}
									}
								}
							})
						},
					})
				break;
				case 1:
				let cityCode=this.city[1][e.detail.value]
				uni.request({
					//填你的接口地址
					url:'XXXXXXX',
					header:{
						
					},
					data:{
						city_code:cityCode
					},
					success: (res) => {
						this.areIndex[2]=0
						// console.log(res,'移动市后得到区')
						this.areRange[2].splice(0)
						//根据接口返回的异常处理
						//因为有的没有区地址
						//422异常
						if(res.statusCode==422){
							this.areRange[2].splice(0)
							this.areRange[2][this.areIndex[2]]=this.areRange[1][this.areIndex[1]]
							this.are[1][0]=""
							this.are[0][0]=this.city[0][0]
						}else{
							//正常接口返回的
							for (let i=0;i<res.data.data.length;i++) {
								if(res.data.data[i].short_name.length>4){
									this.areRange[2][i]=res.data.data[i].short_name.substr(0,4)+'..'
								}else{
									this.areRange[2][i]=res.data.data[i].short_name
								}
							}
							for (let i=0;i<res.data.data.length;i++) {
								this.are[0][i]=res.data.data[i].short_name
							}
							for (let i=0;i<res.data.data.length;i++) {
								this.are[1][i]=res.data.data[i].area_code
							}
						}
					}
				})
				break;
				case 2:
				// console.log(this.are[1][e.detail.value],'移动区代码')
				break;
			}
				this.$forceUpdate()
		},
		//取消选择
		cancelAre:function(e){
		},
		//确定
		entryAre:function(e){
			this.selectedAre=false
			console.log(this.province[0][0],'省名字',this.province[1][0],'省代码')
			console.log(this.city[0][0],'市名字',this.city[1][0],'市代码')
			console.log(this.are[0][0],'区名字',this.are[1][0],'区代码')
		},
		}
	}
</script>

<style>
	/* css样式 */
	.com {
		width: 90%;
		border-bottom: 1px solid #666666;
		font-size: 18px;
		padding: 12.5px 0;
		margin: 0 auto;
		color: rgba(0, 0, 0, 0.6);
		cursor: pointer;
	}
	.right {
		float: right;
		margin-left: 10px;
	}
	
</style>
