import { NavLink } from 'react-router-dom';

const li_class = `mx-5 text-lg`;

const Navigator = ({ dispatch }) => {
	const onLogoutButtonClick = () =>
		dispatch({ type: 'login', isLogin: false });
	return (
		<nav className={`my-10`}>
			<ul className="flex justify-center">
				<li className={`${li_class} `}>
					<NavLink
						to={`/`}
						exact
						activeClassName={`text-th-yellow bg-th-black`}>
						首頁
					</NavLink>
				</li>
				<li className={`${li_class} `}>
					<NavLink
						to={`/mycat`}
						exact
						activeClassName={`text-th-yellow bg-th-black`}>
						我的貓貓
					</NavLink>
				</li>
				<li className={`${li_class} `}>
					<NavLink
						to={`/mycat/upload`}
						exact
						activeClassName={`text-th-yellow bg-th-black`}>
						上傳貓貓
					</NavLink>
				</li>
				<li className={`${li_class} `}>
					<NavLink
						to={`/myfavorites`}
						exact
						activeClassName={`text-th-yellow bg-th-black`}>
						我的收藏
					</NavLink>
				</li>
				<li className={`${li_class} `}>
					<NavLink
						onClick={onLogoutButtonClick}
						to={`/login`}
						exact
						activeClassName={`text-th-yellow bg-th-black`}>
						登出
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigator;
