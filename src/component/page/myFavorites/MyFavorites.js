import { useEffect, useState } from 'react';
import Gallery from '../../Gallery';

import ErrorMessage from '../ErrorMessage';
import { getMyFavoritesFormRemote } from '../../../Utilities/ajax';

const MyFavorites = ({ store, dispatch }) => {
	const [ajaxErrorState, setAjaxErrorState] = useState(false);

	// order: -1 => 取往前九項, 0 => 取當前九項, 1 => 取往後九項
	const getMyFavorites = async (reducerArr, order = 0) => {
		const [store, dispatch] = reducerArr;
		try {
			const response = await getMyFavoritesFormRemote(
				store.catList.myFavorites.limitImg,
				store.catList.myFavorites.currentPage + order
			);
			const data = {
				currentPage: +response.headers['pagination-page'],
				totalPage: Math.ceil(+response.headers['pagination-count'] / 9),
				list: response.data.map(item => ({
					id: item.image.id,
					favoriteId: item.id,
					url: item.image.url,
				})),
			};
			dispatch({ type: 'getMyFavorites', data });
		} catch (error) {
			console.error(error.message);
			setAjaxErrorState(true);
		}
	};

	useEffect(() => {
		getMyFavorites([store, dispatch]);
	}, []);

	if (ajaxErrorState) return <ErrorMessage customClass={`py-20`} />;

	return (
		<Gallery
			currentPageData={store.catList.myFavorites}
			ajaxFns={getMyFavorites}
			reducerArr={[store, dispatch]}
		/>
	);
};

export default MyFavorites;
