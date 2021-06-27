import { useReducer } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { reducer, initState } from './store';
import routeList from './data/routeList';

import Header from './component/Header';
import IndexMain from './component/page/index/IndexMain';
import MyCatMain from './component/page/mycat/MyCatMain';
import MyFavorites from './component/page/myFavorites/MyFavorites';
import LoginCard from './component/page/login/LoginCard';
import Cropper from './component/page/upload/UploadPage';

function App() {
	const [store, dispatch] = useReducer(reducer, initState);

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
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
							<MyFavorites store={store} dispatch={dispatch} />
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
