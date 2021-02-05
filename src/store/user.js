const state = {
	userInfo: null,
	name: '张三'
}
const getters = {
	fullName: state => {
		return 'zhangsan: ' + state.name
	}
}
const mutations = {
	setUserInfo(state, param) {
		state.userInfo = param
	},
	removeUserInfo(state) {
		state.userInfo = null
	},
	setName(state, param) {
		state.name = param.name
	},
	removeName(state) {
		state.name = '移除'
	}
}
const actions = {
	userAsync(context, param) {
		context.commit('setUserInfo', param)
	},
	removeNameAsync(context) {
		context.commit('removeName')
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
