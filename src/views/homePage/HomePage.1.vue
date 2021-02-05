<template>
  <div>
    <div> 全名 {{ fullName }}</div>
    <div>(this.$store.state.name) 这种方式去获得 store 里面的数据 {{ $store.state.name }}</div>
    <div>(...mapState) 这种方式去获得 store 里面的数据 {{ name }}</div>
    <button @click="setUserName">
      Mutations 设置名字
    </button>
    <button @click="removeUserName">
      Actions 异步移除名字12321
    </button>
    <button @click="loginIn">
      登录
    </button>
  </div>
</template>

<script>
	import {
		Toast
	} from 'vant'
	import {
		login
	} from '@/src/api/user'
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		name: "HomePage",
		data() {
			return {
				names: "sfasdf"
			}
		},
		computed: {
			...mapState(['name']),
			fullName() {
				return this.$store.getters.fullName
			}
		},
		methods: {
			...mapMutations(['setName']),
			setUserName() {
				Toast.success('111')
				const param = {
					name: '王五'
				}
				this.setName(param)
			},
			...mapActions(['removeNameAsync']),
			removeUserName() {
				this.removeNameAsync()
			},
			loginIn() {
				alert(1)
				login({
					username: "admin",
					password: "123",
				}).then(res => {
					console.log(res);
				}).catch(error => {
					console.log(error);
				})
			}
		}
	}
</script>

<style>
</style>
