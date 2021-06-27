import axios from 'axios';
import apiKey from '../data/private/apiKey';

const url = `https://api.thecatapi.com/v1`;

export const postUploadImage = file => {
	const form = new FormData();
	form.append('file', file);
	return axios({
		headers: { 'x-api-key': apiKey, 'Content-Type': 'multipart/form-data' },
		method: 'post',
		url: url + '/images/upload',
		data: form,
	});
};

export const deleteUploadedImage = id => {
	return axios({
		headers: { 'x-api-key': apiKey },
		method: 'delete',
		url: url + '/images/' + id,
	});
};

export const getMyCatsFormRemote = (limit, page) => {
	return axios({
		method: 'get',
		url: url + '/images/',
		params: {
			limit,
			page,
			order: 'ASC',
			format: 'json',
		},
		headers: { 'x-api-key': apiKey },
	});
};

export const getCatsOfTheWorld = (limit, page) => {
	return axios({
		method: 'get',
		url: url + '/images/search',
		params: {
			limit,
			page,
			order: 'ASC',
			size: 'small',
		},
		headers: { 'x-api-key': 'DEMO-API-KEY' },
	});
};

export const getMyFavoritesFormRemote = (limit, page) => {
	return axios({
		method: 'get',
		url: url + '/favourites',
		params: {
			limit,
			page,
		},
		headers: { 'x-api-key': apiKey },
	});
};

export const postFavoriteCat = id => {
	return axios({
		method: 'post',
		headers: { 'x-api-key': apiKey },
		url: url + '/favourites/',
		data: {
			image_id: id,
			sub_id: id, // 提供此項可避免重複收藏
		},
	});
};

export const deleteFavoriteCat = id => {
	return axios({
		method: 'delete',
		headers: { 'x-api-key': apiKey },
		url: url + '/favourites/' + id,
	});
};
