// import catImage from '../../../../image/IMG_1502.JPG';
import heart from '../../image/heart_red.png';

const CatItem = ({ imgSrc }) => {
	return (
		<div className={`my-10 mx-10`}>
			<button
				className={`w-14 h-14 bg-white rounded-full absolute shadow-lg flex justify-center items-center`}>
				<img className={`w-2/3 h-2/3`} src={heart} alt={`heart`} />
			</button>
			<div
				className={`w-60 h-60 rounded-full overflow-hidden shadow-xl bg-th-black`}>
				{imgSrc && (
					<img
						className={`object-cover h-full w-full`}
						src={imgSrc}
						// src={imgSrc || catImage}
						alt="cat"
					/>
				)}
			</div>
		</div>
	);
};

export default CatItem;
