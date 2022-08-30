import React from 'react';
import { Props } from './ListItem.props';
import { Divider, List } from 'react-native-paper';
import { Styles } from './ListItem.styles';

export const ListItem = ({
	item: {
		price_btc,
		symbol,
		price_usd,
		name,
		rank,
		percent_change_24h,
		percent_change_1h,
		percent_change_7d,
		market_cap_usd,
		volume24,
		volume24a,
		csupply,
		tsupply,
	},
}: Props) => {
	return (
		<>
			<List.Accordion
				title={`${name}`}
				description={`${price_btc} ${symbol} = $${price_usd} USD`}
				style={Styles.accordion}
			>
				<List.Item title='Symbol' description={symbol} style={Styles.subitem} />
				<List.Item title='Rank' description={rank} style={Styles.subitem} />
				<List.Item
					title='Percent change 24h'
					description={percent_change_24h}
					style={Styles.subitem}
				/>
				<List.Item
					title='Percent change 1h'
					description={percent_change_1h}
					style={Styles.subitem}
				/>
				<List.Item
					title='Percent change 7d'
					description={percent_change_7d}
					style={Styles.subitem}
				/>
				<List.Item
					title='Price btc'
					description={price_btc}
					style={Styles.subitem}
				/>
				<List.Item
					title='Market cap usd'
					description={market_cap_usd}
					style={Styles.subitem}
				/>
				<List.Item
					title='Volume 24'
					description={volume24}
					style={Styles.subitem}
				/>
				<List.Item
					title='Volume 24a'
					description={volume24a}
					style={Styles.subitem}
				/>
				<List.Item
					title='Csupply'
					description={csupply}
					style={Styles.subitem}
				/>
				<List.Item
					title='Tsupply'
					description={tsupply}
					style={Styles.subitem}
				/>
			</List.Accordion>

			<Divider />
		</>
	);
};
