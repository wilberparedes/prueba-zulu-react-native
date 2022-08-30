import { StyleSheet, ViewStyle } from 'react-native';
import { white } from '../../styles/palette';

interface ListItemStyles {
	container: ViewStyle;
}
export const Styles = StyleSheet.create<ListItemStyles>({
	container: { flex: 1, backgroundColor: white },
});
