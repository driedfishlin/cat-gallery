// 圖片列表的每個項目單位元件 //
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import heart from '../../image/heart_red.png';

import {
	postFavoriteCat,
	deleteFavoriteCat,
	deleteUploadedImage,
} from '../../Utilities/ajax';

const CatItem = ({ imgSrc, isLogin, id, favoriteId }) => {
	const path = useLocation().pathname;
	const [favoriteState, setFavoriteState] = useState(
		favoriteId !== undefined
	);
	const [ajaxLoadingState, setAjaxLoadingState] = useState(false);

	//PART> FUNCTION

	const addFavoriteCat = async id => {
		setAjaxLoadingState(true);
		try {
			await postFavoriteCat(id);
			setFavoriteState(true);
		} catch (error) {
			console.error(error.message);
			if (
				error.response.data.message ===
				'DUPLICATE_FAVOURITE - favourites are unique for account + image_id + sub_id'
			)
				setFavoriteState(true);
		} finally {
			// 礙於 API 的回傳資料不足
			// 讓按鈕在「我的收藏」頁之外的地方無法進行後續互動
			if (favoriteId !== undefined) setAjaxLoadingState(false);
		}
	};

	const removeFavoriteCat = async id => {
		setAjaxLoadingState(true);
		try {
			await deleteFavoriteCat(id);
			setFavoriteState(false);
		} catch (error) {
			console.error(error.message);
		} finally {
			setAjaxLoadingState(false);
		}
	};

	const removeUploadedCat = async id => {
		setAjaxLoadingState(true);
		try {
			await deleteUploadedImage(id);
			window.location.assign(window.location.href);
		} catch (error) {
			console.error(error.message);
		}
	};

	//PART>
	return (
		<div className={`my-10 mx-10 px-2 relative group`}>
			{isLogin && (
				<button
					onClick={
						favoriteState
							? () => removeFavoriteCat(favoriteId)
							: () => addFavoriteCat(id)
					}
					className={`w-14 h-14 bg-white rounded-full absolute shadow-lg flex justify-center items-center transition-transform duration-150 transform active:scale-110 ${
						ajaxLoadingState ? 'pointer-events-none' : ''
					}`}>
					<img
						className={`w-2/3 h-2/3 ${
							favoriteState ? '' : 'opacity-20 hover:opacity-60'
						}`}
						src={heart}
						alt={`heart`}
					/>
				</button>
			)}

			<div
				className={`w-60 h-60 rounded-full overflow-hidden shadow-xl bg-th-black`}>
				{imgSrc && (
					<img
						className={`object-cover h-full w-full`}
						src={imgSrc}
						alt="cat"
					/>
				)}
			</div>
			{path === '/mycat' && id && (
				<button
					onClick={() => removeUploadedCat(id)}
					className={`bg-white text-2xl w-10 h-10 rounded-full  leading-10 absolute right-3 bottom-3 transition-transform transform ${
						ajaxLoadingState
							? 'pointer-events-none'
							: 'invisible scale-0'
					} group-hover:visible group-hover:scale-100`}>
					×
				</button>
			)}
		</div>
	);
};

export default CatItem;
