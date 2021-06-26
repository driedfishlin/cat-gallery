import arrowImg from '../image/arrow.png';

const PagingButton = ({ currentNum, totalNum, ajaxFn, reducerArr }) => {
	return (
		<div className={`flex justify-center items-center my-16`}>
			<button
				onClick={
					currentNum > 1
						? () => {
								ajaxFn(reducerArr, -1);
								window.scrollTo({ top: 0, behavior: 'smooth' });
						  }
						: null
				}>
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
				onClick={
					currentNum < totalNum
						? () => {
								ajaxFn(reducerArr, 1);
								window.scrollTo({ top: 0, behavior: 'smooth' });
						  }
						: null
				}>
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
