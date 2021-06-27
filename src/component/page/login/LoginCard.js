import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import GeneralButton from '../../UIElement/GeneralButton';

const labelClass = `mb-1`;
const inputClass = `text-th-black bg-gray-100 rounded-md mb-5 border-none  focus:ring-0`;

// generate a hash from string
const convertStringIntoHash = string => {
	let hash = 0;
	for (let i = 0; i < string.length; ++i)
		hash = Math.imul(31, hash) + string.charCodeAt(i);
	return hash | 0;
};

const LoginCart = ({ dispatch, history }) => {
	const [accountState, setAccountState] = useState('');
	const [passwordState, setPasswordState] = useState('');
	const [inputValidationState, setInputValidationState] = useState(false);
	const [errorMessageState, setErrorMessageState] = useState('');

	//PART> FUNCTION

	// decide whether the「登入」button can be clicked
	const bothInputValidation = event => {
		let targetIsAccount =
			event.target.id === 'login_account' ? event.target.value : null;
		let targetIsPassword =
			event.target.id === 'login_password' ? event.target.value : null;
		if (
			/^[a-zA-Z0-9]{6,12}$/.test(targetIsAccount || accountState) &&
			/^[a-zA-Z0-9]{6,12}$/.test(targetIsPassword || passwordState)
		)
			return setInputValidationState(true);
		setInputValidationState(false);
	};
	// verify that the input value is valid (on input value changing)
	const inputValidationOnChange = event => {
		if (event.target.value.length > 12) {
			setInputValidationState(false);
			setErrorMessageState(
				`${
					event.target.id === 'login_account' ? '帳號' : '密碼'
				}長度為 6-12 個字元`
			);
			return;
		}
		if (!/^[a-zA-Z0-9]*$/.test(event.target.value)) {
			setInputValidationState(false);
			setErrorMessageState(`僅接受大/小寫英文字母、數字`);
			return;
		}
		setErrorMessageState('');
	};
	// verify that the input value is valid (on input element blurring)
	const inputValidationOnBlur = event => {
		if (event.target.value.length < 6) {
			setInputValidationState(false);
			setErrorMessageState(
				`${
					event.target.id === 'login_account' ? '帳號' : '密碼'
				}長度為 6-12 個字元`
			);
			return;
		}
		setErrorMessageState('');
	};

	// on button「登入」clicked
	const onFormSubmit = event => {
		event.preventDefault();
		try {
			if (
				String(convertStringIntoHash(accountState.trim())) ===
					'1066265387' &&
				String(convertStringIntoHash(passwordState)) === '-1861386176'
			) {
				console.log('correct');
				dispatch({ type: 'login', isLogin: true });
				return history.replace('/');
			}
			throw new Error('帳號或密碼錯誤');
		} catch (error) {
			console.log(error);
			setErrorMessageState(error.message);
		}
	};

	//PART> JSX

	return (
		<div className={`w-1/3 mx-auto bg-white p-10 rounded-md shadow-lg`}>
			<form onSubmit={onFormSubmit} className={`flex flex-col`}>
				<label htmlFor={`login_account`} className={labelClass}>
					帳號
				</label>
				<input
					onChange={event => {
						setAccountState(event.target.value);
						inputValidationOnChange(event);
						bothInputValidation(event);
					}}
					onBlur={inputValidationOnBlur}
					// name={`login_account`}
					id={`login_account`}
					className={inputClass}
					type={`text`}
					value={accountState}
				/>
				<label htmlFor={`login_password`} className={labelClass}>
					密碼
				</label>
				<input
					onChange={event => {
						setPasswordState(event.target.value);
						inputValidationOnChange(event);
						bothInputValidation(event);
					}}
					onBlur={inputValidationOnBlur}
					// name={`login_account`}
					id={`login_password`}
					className={inputClass}
					type={`password`}
					value={passwordState}
				/>
				<p
					className={`text-center text-sm text-red-500 h-5 ${
						errorMessageState ? '' : 'invisible'
					}`}>
					{errorMessageState}
				</p>
				<GeneralButton
					text={`登入`}
					customClass={`${
						inputValidationState
							? ''
							: 'pointer-events-none opacity-50'
					}`}
				/>
			</form>
		</div>
	);
};

export default withRouter(LoginCart);
