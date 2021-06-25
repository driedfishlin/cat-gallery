import { Link } from 'react-router-dom';

const ErrorMessage = () => {
	return (
		<div className={``}>
			<p className={`text-xl text-center`}>目前未登入</p>
			<Link
				className={`mx-auto max-w-max block my-10 bg-yellow-500 text-white py-3 px-5 rounded-md`}
				to={`/login`}>
				回登入頁面
			</Link>
		</div>
	);
};

export default ErrorMessage;
