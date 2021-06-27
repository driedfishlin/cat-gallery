// 位於照片列表下方的分頁按鈕 //
import arrowImg from '../image/arrow.png';

const PagingButton = ({ currentNum, totalNum, ajaxFn }) => {
	const onButtonClick = order => {
		ajaxFn(order);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<div className={`flex justify-center items-center my-16`}>
			<button onClick={currentNum > 1 ? () => onButtonClick(-1) : null}>
				<img
					className={`w-14 h-14 opacity-80 transform rotate-180`}
					src={arrowImg}
					alt={`arrow`}
				/>
			</button>
			<p className={`mx-10 text-2xl font-bit`}>
				<span>{currentNum || 1}</span> / <span>{totalNum || 1}</span>
			</p>
			<button
				onClick={currentNum < totalNum ? () => onButtonClick(1) : null}>
				<img
					className={`w-14 h-14 opacity-80`}
					src={arrowImg}
					alt={`arrow`}
				/>
			</button>
		</div>
	);
};

export default PagingButton;
