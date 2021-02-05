import request from '@/utils/request'

export function login(data) {
	return request({
		url: 'http://localhost:8777/login',
		method: 'post',
		data,
		transformRequest: [
			function(data) {
				let ret = ''
				for (let it in data) {
					ret +=
						encodeURIComponent(it) +
						'=' +
						encodeURIComponent(data[it]) +
						'&'
				}
				return ret
			}
		],
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
}

export function getInfo(token) {
	return request({
		url: '/vue-element-admin/user/info',
		method: 'get',
		params: {
			token
		}
	})
}

export function logout() {
	return request({
		url: '/vue-element-admin/user/logout',
		method: 'post'
	})
}
