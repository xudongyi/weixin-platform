/**
 数据模块
 */
export default {
	state: {
    //基于缓存的用户信息，和缓存一致(初始化加载数据)
		user: {},
		isLogin: false, //是否登录
	},
	mutations: {
		//更新用户的信息
		updateUserInfo(state, user) {
			state.user = user;
		},
		//更新用户是否登录状态
		updateLoginState(state, Login) {
			state.isLogin = Login;
		},
	},
	actions: {

	}
}
