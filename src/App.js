import { useReducer } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import routeList from './data/routeList';

import Header from './component/Header';
import Gallery from './component/page/component/Gallery';
import LoginCart from './component/page/login/LoginCard';

const reducer = (state, action) => {
	// console.log(action);

	switch (action.type) {
		case 'login':
			return { ...state, isLogin: action.isLogin };
		default:
			return state;
	}
};

const initState = {
	isLogin: false,
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
							{/* <Gallery store={store} /> */}
						</Route>
						<Route
							path={
								routeList.find(
									item => item.action === 'uploaded'
								).path
							}
							exact>
							<Gallery store={store} />
						</Route>
						<Route
							path={
								routeList.find(
									item => item.action === 'favorites'
								).path
							}
							exact>
							<Gallery store={store} />
						</Route>
						<Route
							path={
								routeList.find(item => item.action === 'login')
									.path
							}
							exact>
							<LoginCart dispatch={dispatch} />
						</Route>
						<Route path={`/`} exact>
							<Gallery store={store} />
						</Route>
						<Redirect to={`/`} />
					</Switch>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
