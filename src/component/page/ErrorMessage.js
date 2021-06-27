import { Link } from 'react-router-dom';

const ErrorMessage = ({ situation }) => {
	return (
		<div className={`mx-auto my-20`}>
			<p className={`text-xl text-center`}>
				{(function () {
					switch (situation) {
						case 'noLogin':
							return '目前未登入';
						case 'noData':
							return '沒有資料';
						default:
							return '發生錯誤';
					}
				})()}
			</p>
			{situation === 'noLogin' && (
				<Link
					className={`mx-auto max-w-max block my-10 bg-yellow-500 text-white py-3 px-5 rounded-md`}
					to={`/login`}>
					回登入頁面
				</Link>
			)}
		</div>
	);
};

export default ErrorMessage;
