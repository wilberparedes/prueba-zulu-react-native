import Axios from 'axios';
import { API_URL } from '@env';

const initializers = {
	baseURL: API_URL,
	headers: {},
};

const returnAxiosInstance = () => {
	return Axios.create(initializers);
};

export const get = (url: string) => {
	const axios = returnAxiosInstance();
	return axios.get(url);
};
