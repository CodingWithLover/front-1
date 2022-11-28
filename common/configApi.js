// 公共配置接口域名接口
import ajax from '@/common/method.js';
export const configApi = (data) => {
	  return ajax.request(
		'https://longtou.bc100.com/oapi/config/pc',
		'',
	    'post',
	    data
	  )
}

