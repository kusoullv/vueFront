const state = {
	userInfo: null,
	token: '',
	name: '张三'
}

const mutations = {
	// 保存登录用户的信息
	setUserInfo(state, param) {
		state.userInfo = param
	},
	// 移除登录用户的信息
	removeUserInfo(state) {
		state.userInfo = null
	},
	// 保存token
	setToke(state, token) {
		state.token = token
	}
}

const actions = {
	// 登录用户信息
	async login(context, param) {
		context.commit('setUserInfo', param)
		context.commit('token', param.token)
	}
}

const getters = {
	fullName: state => {
		return '全名' + state.name
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
