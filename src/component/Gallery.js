import { useLocation } from 'react-router-dom';

import CatItem from './UIElement/CatItem';
import PagingButton from './PagingButton';
import ErrorMessage from './page/ErrorMessage';

const Gallery = ({ reducerArr, currentPageData, ajaxFns }) => {
	const store = reducerArr[0];
	const path = useLocation().pathname;
	// console.log(path);

	if (path !== '/' && store.isLogin === false) return <ErrorMessage />;

	return (
		<>
			<div className={`flex justify-center flex-wrap`}>
				{currentPageData.list.length === 0
					? // provide placeholder
					  Array.from({ length: 9 }, () => 1).map((_, index) => (
							<CatItem key={index} />
					  ))
					: currentPageData.list.map(({ id, url }) => (
							<CatItem imgSrc={url} key={id} id={id} />
					  ))}
			</div>
			<PagingButton
				currentNum={currentPageData.currentPage + 1}
				totalNum={currentPageData.totalPage}
				ajaxFn={ajaxFns.getPublicCats}
				reducerArr={reducerArr}
			/>
		</>
	);
};

export default Gallery;
