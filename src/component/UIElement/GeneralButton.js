const GeneralButton = ({ text, color, onClick, customClass, disabled }) => {
	return (
		<button
			disabled={disabled || false}
			onClick={onClick || null}
			className={`mt-5 py-3 px-5 text-white rounded-md focus:ring-0 ${
				color || 'bg-yellow-500 active:bg-yellow-600'
			} ${customClass || ''}`}>
			{text}
		</button>
	);
};

export default GeneralButton;
