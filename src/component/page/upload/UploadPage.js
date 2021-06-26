import { useEffect, useRef, useState } from 'react';
import Dropzone from 'dropzone';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.min.css';

import GeneralButton from '../../UIElement/GeneralButton';
import { postUploadImage } from '../../../Utilities/ajax';

const UploadPage = () => {
	const cropperRef = useRef(null);
	const [imgSrcState, setImgState] = useState(null);
	const [errorMessageState, setErrorMessageState] = useState(null);

	//PART> Dropzone settings
	useEffect(() => {
		const dropzoneElement = document.getElementById('dropzone_block');
		try {
			new Dropzone(dropzoneElement, {
				url: '/upload',
				uploadMultiple: false,
				transformFile(file) {
					const acceptFormat = ['image/jpeg', 'image/png'];
					try {
						if (file.size > 500 * 1000)
							return setErrorMessageState(
								'檔案尺寸需小於 500kb！'
							);
						if (!acceptFormat.includes(file.type))
							return setErrorMessageState(
								'檔案需為 JPEG / PNG 格式！'
							);
						const imgURL = URL.createObjectURL(file);
						setImgState(imgURL);
					} finally {
						dropzoneElement.innerHTML = '';
					}
				},
			});
		} catch (error) {
			//FIXME> 為了方便開發，先避免錯誤彈出
			// console.log(error);
		}
	}, []);

	//PART> FUNCTION
	const onFormSubmit = async event => {
		event.preventDefault();
		console.log('submit!');

		if (!cropperRef.current) return;
		const imgBase64 = cropperRef.current.cropper
			.getCroppedCanvas()
			.toDataURL();
		const converted = await fetch(imgBase64);
		const blob = await converted.blob();
		//
		const response = await postUploadImage(blob);
		console.log(response);
	};

	return (
		<div>
			<form
				onSubmit={onFormSubmit}
				className={`flex flex-col items-center `}>
				<div
					className={`relative mb-14 bg-white rounded-2xl shadow-md`}
					style={{
						height: 400,
						width: 600,
						marginRight: 'auto',
						marginLeft: 'auto',
					}}>
					{imgSrcState === null ? (
						<>
							<div
								id={`dropzone_block`}
								className={`w-full h-full cursor-pointer`}></div>
							<div
								className={`absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none`}>
								<p
									className={`text-center whitespace-nowrap text-xl mb-5 opacity-50`}>
									點擊區塊或拖曳檔案以進行圖片上傳
								</p>
								<p
									className={`text-center whitespace-nowrap opacity-50 mb-5`}>
									接受格式：JPEG、PNG / 500KB 以下 /
									必須含有貓貓！
								</p>
								<p
									className={`text-center text-red-500 whitespace-nowrap block h-5`}>
									{errorMessageState || ''}
								</p>
							</div>
						</>
					) : (
						<Cropper
							className={``}
							src={imgSrcState}
							style={{
								height: '100%',
								width: '100%',
							}}
							background={false}
							initialAspectRatio={3 / 2}
							ref={cropperRef}
							viewMode={1}
							minCropBoxHeight={100}
							minCropBoxWidth={100}
							responsive={true}
						/>
					)}
				</div>
				<GeneralButton
					text={'上傳'}
					disabled={imgSrcState ? false : true}
					customClass={imgSrcState || 'opacity-50'}
				/>
			</form>
		</div>
	);
};

export default UploadPage;
