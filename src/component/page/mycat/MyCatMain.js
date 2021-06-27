import { useEffect } from 'react';
import Gallery from '../../Gallery';

import { getMyCatsFormRemote } from '../../../Utilities/ajax';

// order: -1 => 取往前九項, 0 => 取當前九項, 1 => 取往後九項
const getMyCats = async (reducerArr, order = 0) => {
	const [store, dispatch] = reducerArr;
	try {
		const response = await getMyCatsFormRemote(
			store.catList.myCats.limitImg,
			store.catList.myCats.currentPage + order
		);
		const data = {
			currentPage: +response.headers['pagination-page'],
			totalPage: Math.ceil(+response.headers['pagination-count'] / 9),
			list: response.data.map(({ id, url }) => ({
				id,
				url,
			})),
		};
		dispatch({ type: 'getMyCats', data });
	} catch (error) {
		console.log(error);
	}
};

const MyCatMain = ({ store, dispatch }) => {
	useEffect(() => {
		getMyCats([store, dispatch]);
	}, []);

	return (
		<Gallery
			currentPageData={store.catList.myCats}
			ajaxFns={getMyCats}
			reducerArr={[store, dispatch]}
		/>
	);
};

export default MyCatMain;
