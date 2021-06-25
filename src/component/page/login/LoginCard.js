import { withRouter } from 'react-router-dom';

const labelClass = `mb-1`;
const inputClass = `text-white bg-th-black rounded-md mb-5`;

const LoginCart = ({ dispatch, history }) => {
	const onFormSubmit = event => {
		//TODO> 使用者驗證
		event.preventDefault();
		dispatch({ type: 'login', isLogin: true });
		history.replace('/');
	};
	return (
		<div className={`w-1/3 mx-auto bg-white p-10 rounded-md shadow-lg`}>
			<form onSubmit={onFormSubmit} className={`flex flex-col`}>
				<label className={labelClass}>帳號</label>
				<input className={inputClass} type={`text`} />
				<label className={labelClass}>密碼</label>
				<input className={inputClass} type={`password`} />
				<button
					className={`mt-5 w-1/2 self-end bg-yellow-500 py-3 px-5 text-white rounded-md`}>
					登入
				</button>
			</form>
		</div>
	);
};

export default withRouter(LoginCart);
