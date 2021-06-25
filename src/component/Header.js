import { useLocation } from 'react-router-dom';

import routeList from '../data/routeList';

import Navigator from './Navigator';

const Header = ({ store, dispatch }) => {
	const path = useLocation().pathname;
	// console.log(path);

	return (
		<header className={`my-20`}>
			<div className={`h-36 flex flex-col`}>
				<h1 className="text-center text-7xl mb-12">Cat Gallery</h1>
				<h2 className="text-center text-2xl w-2/3 self-end">
					{routeList.find(item => item.path === path).name}
				</h2>
			</div>
			{store.isLogin && <Navigator dispatch={dispatch} />}
		</header>
	);
};

export default Header;
