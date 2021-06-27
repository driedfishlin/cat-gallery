export const reducer = (state, action) => {
	const copyState = JSON.parse(JSON.stringify(state));

	switch (action.type) {
		case 'login':
			return { ...state, isLogin: action.isLogin };
		case 'getPublicCats':
			const { publicCats } = copyState.catList;
			const newPublicCats = { ...publicCats, ...action.data };
			copyState.catList.publicCats = newPublicCats;
			return copyState;
		case 'getMyCats':
			const { myCats } = copyState.catList;
			const newMyCats = { ...myCats, ...action.data };
			copyState.catList.myCats = newMyCats;
			return copyState;
		case 'getMyFavorites':
			const { myFavorites } = copyState.catList;
			const newMyFavorites = { ...myFavorites, ...action.data };
			copyState.catList.myFavorites = newMyFavorites;
			return copyState;
		default:
			return state;
	}
};

export const initState = {
	isLogin: true,
	catList: {
		publicCats: {
			currentPage: 0,
			totalPage: 0,
			limitImg: 9,
			list: null,
		},
		myCats: {
			currentPage: 0,
			totalPage: 0,
			limitImg: 9,
			list: null,
		},
		myFavorites: {
			currentPage: 0,
			totalPage: 0,
			limitImg: 9,
			list: null,
		},
	},
};
