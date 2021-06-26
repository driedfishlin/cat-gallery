import { useLocation } from 'react-router-dom';

import routeList from '../data/routeList';

import Navigator from './Navigator';

const Header = ({ store, dispatch }) => {
	const path = useLocation().pathname;
	return (
		<header className={`my-20`}>
			<div className={`h-40 flex flex-col`}>
				<h1 className="text-center text-7xl mb-12">Cat Gallery</h1>
				<h2 className="text-center text-md w-2/3 self-end font-bit tracking-normal">
					{'> ' + routeList.find(item => item.path === path).subTitle}
				</h2>
			</div>
			<Navigator dispatch={dispatch} store={store} />
		</header>
	);
};

export default Header;
