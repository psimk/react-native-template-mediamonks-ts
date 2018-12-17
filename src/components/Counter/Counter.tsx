import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { Props } from '.';

export default ({ increment, decrement, counter, anotherCounter }: Props) => (
	<View>
		<Text>Counter: {JSON.stringify(counter, null, 2)}</Text>
		<Text>Another Counter: {JSON.stringify(anotherCounter, null, 2)}</Text>
		<Button onPress={increment} title="Increment" />
		<Button onPress={decrement} title="Decrement" />
	</View>
);
