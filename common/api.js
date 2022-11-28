
import ajax from '@/common/method.js';
const configApiPrefix = uni.getStorageSync('configApiPrefix')
const iquoteUrl = configApiPrefix.iquoteUrl
export const apiList = {
	// 接口地址
	getShareInfo: (data) => {
		return ajax.request(
			// 仅作为演示用，并非真实接口地址
			 iquoteUrl+'/iquote/user/getShareInfo',
			 '',
			 'get',
			data
		)
	},
	// 登录
	login: (data) => {
		return ajax.request(
			 configApiPrefix.loginUrl,
			 '',
			 'post',
			data
		)
	},
	// 省市区
	queryProjectAreaById: (data) => {
		return ajax.request(
			'http://47.107.233.181:2401/iquote/projectArea/queryProjectAreaById?id=root',
			 '',
			 'get',
			data
		)
	},
	// 微信上传图片
	fileStr: (data) => {
		return ajax.request(
			'https://crm.bc100.com/cmapi/common/batchUpload/compress/fileStr',
			 '',
			 'post',
			data
		)
	},
}

