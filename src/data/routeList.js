// the action property is read only. don't change it!

const routeList = [
	{
		action: 'index',
		name: '首頁',
		path: '/',
		subTitle: 'Cats From All Over The World',
	},
	{
		action: 'login',
		name: '登入',
		path: '/login',
		subTitle: 'Login',
	},
	{
		action: 'favorites',
		name: '我的收藏',
		path: '/myfavorites',
		subTitle: 'My Favorites',
	},
	{
		action: 'uploaded',
		name: '我的貓貓',
		path: '/mycat',
		subTitle: 'My Cat',
	},
	{
		action: 'upload',
		name: '上傳貓貓',
		path: '/mycat/upload',
		subTitle: 'Upload',
	},
	{
		action: 'logout',
		name: '登出',
		path: '/login',
		subTitle: '',
	},
];
export default routeList;
