import { get } from '../xhr';

export const getTickers = (params?: string) => {
	return get(`/tickers/${params}`);
};
