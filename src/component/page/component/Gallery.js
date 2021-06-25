import CatItem from './UIElement/CatItem';
import PagingButton from './PagingButton';
import ErrorMessage from '../ErrorMessage';

const Gallery = ({ store }) => {
	if (store.isLogin === false) return <ErrorMessage />;
	return (
		<>
			<div className={`flex justify-center flex-wrap`}>
				<CatItem />
				<CatItem />
				<CatItem />
				<CatItem />
				<CatItem />
				<CatItem />
				<CatItem />
				<CatItem />
				<CatItem />
			</div>
			<PagingButton />
		</>
	);
};

export default Gallery;
