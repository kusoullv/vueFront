import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import order from './order'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		user: user,
		order: order
		
	}
})

export default store