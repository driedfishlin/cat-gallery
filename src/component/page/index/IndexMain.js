// 位於首頁的圖片列表區域 //
import { useEffect, useState } from 'react';
import Gallery from '../../Gallery';

import ErrorMessage from '../ErrorMessage';
import { getCatsOfTheWorld } from '../../../Utilities/ajax';

const IndexMain = ({ store, dispatch }) => {
	const [ajaxErrorState, setAjaxErrorState] = useState(false);

	// order: -1 => 取往前九項, 0 => 取當前九項, 1 => 取往後九項
	const getPublicCats = async (order = 0) => {
		try {
			const response = await getCatsOfTheWorld(
				store.catList.publicCats.limitImg,
				store.catList.publicCats.currentPage + order
			);
			const data = {
				currentPage: +response.headers['pagination-page'],
				totalPage: +response.headers['pagination-count'],
				list: response.data.map(({ id, url }) => ({
					id,
					url,
				})),
			};

			dispatch({ type: 'getPublicCats', data });
		} catch (error) {
			console.error(error.message);
			setAjaxErrorState(true);
		}
	};

	useEffect(() => {
		getPublicCats();
	}, []);

	if (ajaxErrorState) return <ErrorMessage customClass={`py-20`} />;

	return (
		<Gallery
			currentPageData={store.catList.publicCats}
			ajaxFn={getPublicCats}
			reducerArr={[store, dispatch]}
		/>
	);
};

export default IndexMain;
