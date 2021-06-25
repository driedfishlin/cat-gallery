import arrowImg from '../../../image/arrow.png';

const PagingButton = () => {
	return (
		<div className={`flex justify-center items-center my-16`}>
			<button>
				<img
					className={`w-14 h-14 opacity-80 transform rotate-180`}
					src={arrowImg}
					alt={`arrow`}
				/>
			</button>
			<p className={`mx-10 text-2xl font-bit`}>
				<span>1</span> / <span>10</span>
			</p>
			<button>
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
