import { useReducer } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import routeList from './data/routeList';

import Header from './component/Header';
import IndexMain from './component/page/index/IndexMain';
import MyCatMain from './component/page/mycat/MyCatMain';
import LoginCard from './component/page/login/LoginCard';
import Cropper from './component/page/upload/UploadPage';

const reducer = (state, action) => {
	// console.log(state);

	// console.log(action);

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
		default:
			return state;
	}
};

const initState = {
	isLogin: true,
	catList: {
		publicCats: {
			currentPage: 0,
			totalPage: 0,
			limitImg: 9,
			list: [],
		},
		myCats: {
			currentPage: 0,
			totalPage: 0,
			limitImg: 9,
			list: [],
		},
	},
};

function App() {
	const [store, dispatch] = useReducer(reducer, initState);
	// console.log(store);

	return (
		<BrowserRouter>
			<div className="max-w-screen-lg mx-auto pb-28">
				<Header store={store} dispatch={dispatch} />
				<main>
					<Switch>
						<Route
							path={
								routeList.find(item => item.action === 'upload')
									.path
							}
							exact>
							<Cropper />
						</Route>
						<Route
							path={
								routeList.find(
									item => item.action === 'uploaded'
								).path
							}
							exact>
							<MyCatMain store={store} dispatch={dispatch} />
						</Route>
						<Route
							path={
								routeList.find(
									item => item.action === 'favorites'
								).path
							}
							exact>
							{/* <Gallery store={store} dispatch={dispatch} /> */}
						</Route>
						<Route
							path={
								routeList.find(item => item.action === 'login')
									.path
							}
							exact>
							<LoginCard dispatch={dispatch} />
						</Route>
						<Route path={`/`} exact>
							<IndexMain store={store} dispatch={dispatch} />
						</Route>
						<Redirect to={`/`} />
					</Switch>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
