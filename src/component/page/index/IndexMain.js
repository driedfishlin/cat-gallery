import { useEffect } from 'react';
import Gallery from '../../Gallery';

import { getCatsOfTheWorld } from '../../../Utilities/ajax';

// order: -1 => 取往前九項, 0 => 取當前九項, 1 => 取往後九項
const getPublicCats = async (reducerArr, order = 0) => {
	const [store, dispatch] = reducerArr;
	// console.log('order=> ', order);
	// console.log('current=> ', store.catList.publicCats.currentPage);

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
		// console.log(data);

		dispatch({ type: 'getPublicCats', data });
	} catch (error) {
		console.log(error);
	}
};

const IndexMain = ({ store, dispatch }) => {
	useEffect(() => {
		getPublicCats([store, dispatch]);
	}, []);

	return (
		<Gallery
			currentPageData={store.catList.publicCats}
			ajaxFns={{ getPublicCats }}
			reducerArr={[store, dispatch]}
		/>
	);
};

export default IndexMain;
