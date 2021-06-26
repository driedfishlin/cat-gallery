import { NavLink } from 'react-router-dom';

import routeList from '../data/routeList';

const LiItem = ({ page, onClick }) => {
	return (
		<li className={`mx-5 text-lg`}>
			<NavLink
				onClick={onClick}
				to={routeList.find(item => item.action === page).path}
				exact
				activeClassName={`text-th-yellow bg-th-black`}>
				{routeList.find(item => item.action === page).name}
			</NavLink>
		</li>
	);
};

const Navigator = ({ dispatch, store }) => {
	const onLogoutButtonClick = () =>
		dispatch({ type: 'login', isLogin: false });
	return (
		<nav className={`my-10`}>
			<ul className="flex justify-center">
				<LiItem page={'index'} />
				{store.isLogin ? (
					<>
						<LiItem page={'uploaded'} />
						<LiItem page={'upload'} />
						<LiItem page={'favorites'} />
						<LiItem page={'logout'} onClick={onLogoutButtonClick} />
					</>
				) : (
					<LiItem page={'login'} />
				)}
			</ul>
		</nav>
	);
};

export default Navigator;
