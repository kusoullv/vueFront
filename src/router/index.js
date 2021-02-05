import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home,
		redirect: '/home/homePage',
		children: [{
			path: '/home/homePage',
			name: 'HomePage',
			component: () => import('@/views/homePage/HomePage.vue'),
			meta: {
				title: '首页',
				keepAlive: false,
				tabRoot: true
			}
		}, ]
	},
	{
		path: '/home/homePage',
		name: 'Home',
		component: import('@/views/homePage/HomePage.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
