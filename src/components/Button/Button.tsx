import React from 'react';
import styled from 'styled-components';
import { colors } from '../../themes';

interface IProps {
  title: string;
  onPress: () => {};
  style: any;
  fontStyle: any;
  testID: string;
}

const Touchable = styled.TouchableOpacity`
  padding: 20;
  border-radius: 10;
  justify-content: center;
  align-items: center;
  background-color: ${colors.button};
`;

const Text = styled.Text`color: white;`;

export default ({ title, onPress, style, fontStyle, testID }: IProps) => (
  <Touchable testID={testID} style={[ style ]} onPress={onPress}>
    <Text style={[ fontStyle ]}> {title} </Text>
  </Touchable>
);
