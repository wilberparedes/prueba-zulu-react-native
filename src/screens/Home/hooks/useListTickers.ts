import { useEffect, useState } from 'react';
import { getTickers } from '../../../adapters/Tickers';
import {
	Tickers,
	TickersResult,
} from '../components/ListTickers/ListTickers.props';
import { AxiosResponse } from 'axios';

const INITIAL_PAGE: number = 1;
const LIMIT_PAGE: number = 20;
const INITIAL_TICKERS: Tickers[] = [];

export const useListTickers = (): {
	tickers: Tickers[];
	isLoading: boolean;
	nextPage: () => void;
} => {
	const [tickers, setTickers] = useState<Tickers[]>(INITIAL_TICKERS);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [thereMoreData, setThereMoreData] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState<number>(INITIAL_PAGE);

	useEffect(() => {
		getTickerList();
	}, [currentPage]);

	const getTickerList = async () => {
		try {
			setIsLoading(true);
			const params = `?start=${currentPage}&limit=${LIMIT_PAGE}`;
			getTickers(params).then((response: AxiosResponse<TickersResult>) => {
				const tickersResponse = response.data;
				setThereMoreData(!(tickersResponse.data.length < LIMIT_PAGE));
				const newTickers =
					currentPage === INITIAL_PAGE
						? tickersResponse.data
						: [...tickers, ...tickersResponse.data];
				setTickers(() => newTickers);
			});
		} catch (err) {
			console.warn(err);
		} finally {
			setIsLoading(false);
		}
	};

	const nextPage = async () => {
		if (isLoading || !thereMoreData) return;
		setCurrentPage(currentPage + LIMIT_PAGE);
	};

	return {
		tickers,
		isLoading,
		nextPage,
	};
};
