import { useLocation } from 'react-router-dom';

import CatItem from './UIElement/CatItem';
import PagingButton from './PagingButton';
import ErrorMessage from './page/ErrorMessage';

const Gallery = ({ reducerArr, currentPageData, ajaxFn }) => {
	const store = reducerArr[0];
	const path = useLocation().pathname;
	// console.log(path);

	if (path !== '/' && store.isLogin === false)
		return <ErrorMessage situation={'noLogin'} />;

	return (
		<>
			<div className={`flex flex-wrap`}>
				{currentPageData.list !== null &&
					(currentPageData.list.length === 0 ? (
						<ErrorMessage situation={`noData`} />
					) : (
						currentPageData.list.map(({ id, url, favoriteId }) => (
							<CatItem
								imgSrc={url}
								key={favoriteId || id}
								id={id}
								favoriteId={favoriteId}
								isLogin={store.isLogin}
							/>
						))
					))}
				{currentPageData.list === null &&
					// provide placeholder
					Array.from({ length: 9 }, () => 1).map((_, index) => (
						<CatItem key={index} />
					))}
			</div>
			<PagingButton
				currentNum={currentPageData.currentPage + 1}
				totalNum={currentPageData.totalPage}
				ajaxFn={ajaxFn}
			/>
		</>
	);
};

export default Gallery;
