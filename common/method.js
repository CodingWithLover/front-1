const serverHttp = ""
//const serverHttp = "http://47.103.197.39:8090/portalAdmin/web"
//const serverHttp = "http://8.210.11.95:8091/portalAdmin/web"
const request = (URL, token, POST, data ) => {
	if (POST == '') {
		POST = 'GET'
	}
	
	if(token==''){
		token='Bearer1f8b0800000000000000d55b5b77a2ca12fe45731697908c8ff102ca16dc2a34c2cb2c0127080d9278037efda9e6ae11c464ce3a7b3fb8668274777555f5575f75959b58744cc1daceb6e2444dd448da8abdff6c62d1b57ce4d802f226ee2e925d3d915d359195574a5226ec742026b626be1b9a4cc1f7db0d7ddeea9aec9a2c3ada23ecad06936759798ba67cfd3977323df464093836b485357143ca0a10fefc4e74d2990336e0f92c58c4b6a6ee5703d131043a34313cf30dc71ccbd9b815a2d6422f5eaf16a1b192c99c662a4bf59c23b2c07866bd12295be3f7d340c416d3a32d5fc616bcfb7b19bd90f9edd56267b262688f3199c79a0422bbd972481a8ee869203bb68fa4cdb81fc0bbbde9f8604d7c9eb605e764f998da20900b64b302fb791af4639309b1ce2e44d3374ed380a78d95c8a963f1b4f6916b8fe893eee3bd811e5f5b1abec677d7c7ea5952d4a3c5f08ca172dbb50fba0ea87d835e629bdd1d6d814fd631e7af352eb418a76f0a91aaafe48f56fdf838b2b51e75771ff8ee3e5d93e1127b2cd2a0b3bbb25a951e1dd3e783d6f50b19979c6baf64ca64686c79f21e7ceaa833116da8326db18b93a9a15815fedc5c73f02f3368dd4b68add0c916602c8b125be81dc04786e618ce43ee2f735a94e7d5772363b570d65af4b5397de4c17b43d5a387a5ec6d7669dbabb6f0ae64fba24cbc678c2a9d297ecfeba8ff614da613e8d9b9e337a50cf32b19c04ec4f75d7bc025facac017df331c05b844b59db7f58aa74d7681a7de85ed8b39415e146fd41bdff15fd13d124c26da9bac7584fd602bc0353d182738b327bbcb796d9b37c58c4ade85dfdb9b428feda403bfb6cf55ff6c32f858ea008958677ab13196bbf90ad1d35804bbce8f868f8fe0274b454d6d1d77b6495d1e723e975c0067a8e6ff254e3feabf4bd017462bb93c139fedc113bdb93ac425f0a36ef30728340578dfb7b23356fe6d3f3c1ee26b688f441af0c2034c6f8d5995beaaf74b0cfa860cb94e06b606b14e001b520b0cbe1f9add7c7f5b8e8b3988fd104b8305064e92d83c4a3a63ce6779be3d8f21a03df8115e6a1c05e331f818b218d41a97ffe019496360e58b93eccc2288a3350cbacb116a72d4ffdfe5bc7f1a1fc867c2158d2e766dc5773936bbe13f10d687e3e0a3efe798d8d1ef6f6143b7f85af9792b1795b119c8a12d60e64ff0ad12a7b6a5ef65fe434521d83569b3bfede3d81e23c71c703170ee93bd12dd947bdff159a4bc46f2328bb3cad839b7ef379593221c34e7bf7fc1b9d8febbb8f721803c25ea36e6adc0a7b1ceca1f73829b2b19f0062516259f0073daf49bd8044bc6d85d137c05fb1accc2cb6507bc9381c744fb2ef8744fd60eb87022eb415ed7ce71321d036ef4d21c52d178887976ebfa2d71dd4db95c7506e77f70ae619a977e89af55bce082777b0fc5c14f7366b13de5439df0be65af24aed6e4e2eef9d96d1efd659e9ce64c397f9f7fe29e0f72e51b39c1fc062f7b2c5fb8ce598af858f2a3efc78bab79d333fb555e4f131e52c896f1d314cf071b157805c31fd7abd0811872323d7247f398cfa820a38152ce74337f53191e78917cd0358edc1f9c7486a7d65aeff8e83a952e10c87c272ede3c27fcd9127aa11994f65f02c6c0baed71ad264b99674c7d033038cb9b899f5bfe57733738b70ca2ea185560df37ecf0cfc85bdae6f7d119f443cd493e0331c864e4ccff1ee546590e30e8c4956e8fc7f02ff547f399c765c8ef03aa3c6b2120c04edc29365fe467e9d983dc41408483515fe29ba53cdf9ec733b408621afa5a6e55f94fdf1af74fb03faae46dc0d9607defdbf790ffe6dca29bcf2686c625e41e1ce247db7b39df079e9c737dc28df5562e4e38b5b837345a5a838fd439b522e0c41ecb04cbdc566e48d6f0236caa64cdf9b1fc5bcbef70b5fb7907f8456209c02bd3f8558ca331c179f8ce33564edbbe09d7dc9a023aa4320fb8f26fc2330c1f0790c774c1a6a3c5f6497e51c494561b02173e138c2ffcb8d0ddb2d80b9fe7fc23e364e1be0331e2b1f92a7948dc25e3f7c446dfbfb7e71fb067ab0efe2ffed6299fd15a73d6c7eb45e40e04e29fb1c2adeb1a1a1f80dfe10de1040262d69a8c1fc97f5af7c420e0d1985a438e3df5018b191c985e2d27eb1a7bbf83a5d777158822f10d3885e8a1313e1bb9aca0e7f439f00e31adf5c13309be4beb7a4cefa0f8fca17897fbd8449c11279cb91d709cff83d3b726f7c22cb897a3c53d6f16dceefd950b63f1d9f0e79caeed39fdc753313fc423884f1c70517e6f51cd3548620bc0a19395c5ae4c26f795cc81cd551ff01a6343cd6a9bf02c8dc3190ff8799e0de74fb26bc5b22bb1923b394b43299686e05fdb88f805d896f8f3e57a6b01fc452075270770be97ebd6a1ec713f996d7fc23327047c6137032e024e169831e4a6dbdec1d47a80014f27dbc7bfa564725a7afc04ad4255c5e15af7c378835f3955a543dd7366cba41f2d47223bf7303347f849f5b9d8a6e4b5a52e9e8c21cf682aa66702deca42e8ccd91db3110c04fe18eac88a6decec155e342ceff0645207c512b8f15a13774bb70fba14ff5ef8d64952a438d77398e94b4aa401d933f6e60c1f1776cddfd9eb709e55814f2cd626d8b904ce81edd182d499c9fe8f367044a21bb25fd0af685d8d37193b3431c442ede6fbea66d5c7997d26855ca07b3a7f36c5deda0d77e687bfe7506e1ba24baef43f9339ccada17496a8c8d51012152692a62a3e1834da19235bd7fd9fb496fb28f87cb0cc6c0a9fc2d680e51470884c3e6b72d4d870b3d96d7f6c8ebbcd66ee1c974f1f1bedd71b5dccb1d881af25443e8243168b1388479e7171e792ee8322fc2cdfdbf94a1f9c25e4ebb96226472042de88d27935f650fc5dee53ced7b7482ea1e6f74b19861dd39c0b309bf877814b841356efdfdcdf8bfb03f657614b4c72814a3f932497397d7eb1c72a6faccb3eabd9cd3b8a1f78fb3ec69e51c5f84c96e23c4e621935ede91aff2097827307e727011b36ade9e30f161f9e57de717a0a3edef9a67513a9695dc8e5890d4cd0e18ae1b03d263e7f685a2f3819e3104f866d7b4c667cc35a9860ce6bf6499ca63542fcfc12ee4217f6330ebc89d9b6162575584b1ef6efadd5b60623e10e6bb88d360a8fe63008a64997fdb08d76aaaf95f00d6b89439562771f1f2f3b582bf70dc2d5683beb43011e5770a1a2078571086f8738c395cf00e759d3ab9f9f35bbdf68d6fe87f6f496eb227ba7949b935cdbd715efac2fa927591b3153651419cadb4157a4b3bca540ee1123312ae8c97a325c5ceeffc65ac3dd4c638363cb5a82c4186e7f6b0c28909bf7a6ca9c918511598b9162da9586a223b96a321bbec16751ee9ff041384f479db9b00f3e9abfe0ec26413029f40adc8e25772a720d1bac444e5e63dd9f3c4d95375a57f483a4f07836a01d297985fd826d143d319457464e1c7f56710a384f76ca114b9cf3bb63effa1abb0391ae6324f8437479e77f6beee5b33bf387effcf59c165de01dc4a8da5ec95ec0cf14983bffbf5471a98b5805d813bc4f4ee1db737e9efdd24e913c74da64a6c12762223b7cd29c6ab58c321cbcf2d12efe48e2dc1fe26214e4bcc74a175e2c33863353fa4e57bb3fe66b9f7593cb41723fe0dd9c7b810f8975967c713b1b743c6765bccfe690521d1b31c431770d798a91ea74774e651622e03890e3f974be77beed9cdeb5c1b3f96c70e65f2bd0bdf04fd371cdfffea7fa96336eee5b3e7014c05ac87d523953fe19f4816b2e7cd0dba1e24cf9390e16279be12e62fddbf3101fb8177c9c880d3caec4ce8973d4f88f99f6f791afe52a399747ac93c7943f84af579879710e4dff1737dd5a1c17f73b610dfe64db8a0f2690b70cc5adeebe1d6643e480fe2349539fa6da289186e033604bd99531fc9f9d093a97af47f037cf9346f16cf088fff7cbd8613388d42d29758c80c7635709d041f751acb07d5ce8ce0cd0de1ca7987f861c22b1c99d49e173ca2491872a53e8e0a2260d38d796cba7b27daadb46901fda857f5fd429971ae79bc5bd292a6bcdb2c98810eb517d4c43fd38b7d3753ddc17df0dbe264fb0702c669ff63e417cdb91bb73447a34d922cfa8f2f4624c7d6ed23f05380ffe90c6c6f2f9addec9346e3d5c5bcd72bee6debeb4afeca2ee66430e7e77dcbddec7fade3bd746efc99ad6b1be32e653efe2852e6ff504f26def74af87de5de74eef61abcdd5bce6187f9ea3ea0f6ad74f977a66a30c6d7d5157f62f6b7283b47739eb4b2d7b0717f7fda5b126d7b8bfc76b689732b4d6b42e7552aff7a4fdbbdddebdd5bbd72c434b4dea4a0757fd899ffbdf9adf6fecbd6b96abb9a6d468d3b6ba6f0d1beff6cedd7ef766fda6c2fb7a4f5502388b756d7113abf58c935cea2aedcf69f4b9963ddf3f4f17f5e2267d17b1b0767f5ce9216cda6743ef583aeebb31f746efd7ad3806b2fb3f0b7bcfab7ea21ee462116e8cb7a4ff2ca971a2c6deadcbf1b312576dd7620e03726e2c725f069ca4b8d34ae76311f862c4012f85b8f504f1d8f68cbcc79cd47e0087f7e6150e37e9fbe2b711373849553b78302617f5a63b18d9f8db863be3eef53edde11d59bdfefa7706f764257d06d5fb3393597cd2cbeddea596773aff4ee0fe3a37fa861ac77fa9f7a8553f5dfafc2f65b0499c2bcf798a21e97dcb3cc07f03f7070e899ff338271a2d36fd7aef50a34ecabd00d70fb21ef7c6775bfb0aae64bedbfb73c76f9b7f63d0641b9cde35de8ea17f8e77dc5c2f971972a6fec90a167de023edfa6ffb8d42732cffdc7bf3001fe9c02b6efec6a0994bddee9db9c7a71ee13bcdbf11f8be8f56754dfa5a8f59ef4aa3dd9b7db791d75fdbecaab69bc6ba2af64a59ef01f179b9babbe854cb2fef896ef66898798c33b331c51e8bde07e2ef72deff7020b55ed217013678ba37efadde8fec1ef7aa3f836f783ea87aa8aefa4204b0dd45aefc48efc60d7b473a5ddddf5cf45ea47a7e48af8d3d196deb36f6fd6735ee5aef433a0ef8af0d76471cf8a067ac8c50675061a3db77181d7b175acfc2957fa6f7def06c93dd51917793b5661fe757bf5586e7c578aeecb7affd9e22bfcbfbc86b39d5fd9ec695b12fab1ff3bc3d7ca3678a2dd9d89ecf319fc8be339d2287913c3c5bbafdf745bedf34b67a1c6d6a627a36c9f8b9279da5e1a4b85f4bfb79497f80e917f5dd517ab74aee44e1c3d6dfabf75614bc365da35eb7b83d9edd8c38b0cfa15eef9a927334e1498c4ffbceb6bfe7ffd9fc541c47fa3911bdf7f7df6edf3c2bbb177e6dbabf568cff4b5546cc593700ba43f1fd45915f6de448b1c80f467d09333bf6edc93f82d3bcbfee7a3d068d5e2cf5c5f4f7d1f1edbf08b670d4823e0000'
		// token = uni.getStorageSync("tokey-chat");
		// console.log(token)
		// &&URL!='/regist/sendRegistSms'&&URL!='/regist/regist'&&URL!='/retrievePwd/sendRetrievePwdSms'&&URL!='/regist/inviter'&&URL!='/retrievePwd/retrievePwd'
		if(token==''){
			// console.log(URL!='/regist/inviter')
			console.log('tokey为空')
			// if(URL!=='/login'&&URL!=='/retrievePwd/sendRetrievePwdSms'&&URL!=='/retrievePwd/retrievePwd'){
				uni.reLaunch({
					url: '@/../pages/login/login'
				})
				// return 0;
			
		}
	}
	return uni.request({

		// header['content-type']:'application/x-www-form-urlencoded'
		header: {
			// 'content-type': 'application/x-www-form-urlencoded',
			'content-type': 'application/json',
			access_token: token,
		},
		url: serverHttp + URL,
		data: data,
		method: POST,
		timeout: '3000',
		dataType: 'json',
	}).then(res => {
		// if(res.length == 2){
		// 	if(res.data.code == '401'){
		// 		ajax.clearTokey();
		// 		uni.reLaunch({
		// 			url:"/pages/user/login/login"
		// 		})
		// 	}
		// 	return res[1];
		// }
		if(res.length==1)
		{
			res[1] = {
				data:null
			}
			console.log('未请求到数据,ip:'+serverHttp+URL);
		}
		
		return res[1];
	})
};

const toast = (e) => {
	return uni.showToast({
		title: e,
		icon: 'none',
		duration:3000
	}).then(res => {
		return res
	})
}

let showLoading = (title = '加载中') => {
	uni.showLoading({
		title,
		mask: true
	});
}

let getTokey = () => {
	let	str = uni.getStorageSync('tokey-chat');

	return str;
	

}

let clearTokey = () => {
	// uni.clearStorageSync()
	uni.setStorageSync('tokey-chat','')

}

//得到用户数据
let getUserInfo = (param) =>{
	const userInfo = uni.getStorageSync('userinfo')
	return userInfo[param]
	
}
//修改用户信息
let setUserInfo = (name,value)=>{
	const userInfo = uni.getStorageSync('userinfo');
	userInfo[name] = value
	uni.setStorageSync('userinfo',userInfo)
}

//判断是不是首次打开app
let fristOpen = ()=>{
	try {
	    const value = uni.getStorageSync('fristopen');
	    if (value.length > 5) {
	        return true;
	    }
	} catch (e) {
	   return false
	}
}
								

//上传文件 (未写完)
const upload = (param) => {

	var _self = this,
		url = param.url || "",
		path = param.path || "",
		name = param.name || "file",
		data = param.data || {},
		token = "";

	if (url == "") {
		url = _self.getUploadFileUrl(); //默认的上传文件地址
	} else {
		url = "http://" + this.getIP() + "/" + url;
	}

	if (!param.token) {
		token = uni.getStorageSync("tokey-chat");
		console.log("当前token:" + token);
		if (!token) {
			uni.redirectTo({
				url: '../pages/login/login'
			});
			return;
		} else {
			data.token = token;
		}
	}
	var timestamp = Date.parse(new Date()); //时间戳
	data["timestamp"] = timestamp;

	console.log("网络请求start：url:" + url + "，params:" + JSON.stringify(data));
	uni.uploadFile({
		url: serverHttp + url,
		filePath: path,
		name: name,
		formData: data,
		success: (res) => {
			console.log("网络请求success-res:" + JSON.stringify(res)); //json对象转json字符串
			console.log("网络请求success-statusCode:" + res.statusCode);
			console.log("uniapp上传文件api返回的data是字符串类型:" + res.data);
			if (res.statusCode && res.statusCode != 200) { //api错误(Error StatusCode)
				uni.showToast({
					/* title:res.errMsg */
					title: "api错误",
					icon: 'none'
				});

				return;
			}
			var dataString = res.data; //json字符串
			var res = JSON.parse(dataString); //json字符串转json对象
			if (res.code) {
				if (res.code != "0") { //Error ResultCode
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});

					return;
				}
			} else { //No ResultCode
				uni.showToast({
					/* title:res.msg */
					title: "无结果码",
					icon: 'none'
				});

				return;
			}
			typeof param.success == "function" && param.success(res);
		},
		fail: (e) => {
			console.log("网络请求fail");
			uni.showToast({
				/* title: e.errMsg */
				title: "请检查网络",
				icon: 'none'
			});
			typeof param.fail == "function" && param.fail(e.data);
		},
		complete: () => {
			console.log("网络请求complete");
			typeof param.complete == "function" && param.complete();
			return;
		}
	});

}

export default {
	request,
	toast,
	showLoading,
	getTokey,
	clearTokey,
	serverHttp,
	getUserInfo,
	setUserInfo,
	fristOpen
	
}



