const LoadingAnimation = ({ customClass }) => {
	return (
		<div
			className={`w-full h-full flex items-center justify-center ${customClass}`}>
			<div
				style={{
					borderTopColor: 'rgba(233,233,255,0.5)',
					borderRightColor: 'rgba(233,233,255,0.5)',
					borderBottomColor: 'rgba(233,233,255,0.5)',
				}}
				className={`w-10 h-10 border-4 border-th-black rounded-full animate-spin`}
			/>
		</div>
	);
};
export default LoadingAnimation;
