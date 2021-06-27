// 位於已上傳圖片頁的列表區域 //
import { useEffect, useState } from 'react';
import Gallery from '../../Gallery';

import ErrorMessage from '../ErrorMessage';
import { getMyCatsFormRemote } from '../../../Utilities/ajax';

const MyCatMain = ({ store, dispatch }) => {
	const [ajaxErrorState, setAjaxErrorState] = useState(false);

	// order: -1 => 取往前九項, 0 => 取當前九項, 1 => 取往後九項
	const getMyCats = async (order = 0) => {
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
			console.error(error.message);
			setAjaxErrorState(true);
		}
	};

	useEffect(() => {
		getMyCats();
	}, []);

	if (ajaxErrorState) return <ErrorMessage customClass={`py-20`} />;

	return (
		<Gallery
			currentPageData={store.catList.myCats}
			ajaxFn={getMyCats}
			reducerArr={[store, dispatch]}
		/>
	);
};

export default MyCatMain;
