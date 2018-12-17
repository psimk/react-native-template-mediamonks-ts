import React from 'react';
import { Text, View } from 'react-native';
import { testComponent } from '../../enum/TestIDs';
import Button from '../Button';
import { getLocalizedString } from '../../utils/localizedUtils';
import styled from 'styled-components';
import { typography } from '../../themes';

const Container = styled.View`
  flex: 1;
  margin-top: 50;
  align-items: center;
  margin-horizontal: 20;
`;

const CounterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: 'center';
  margin-bottom: 30;
`;

const CounterButton = styled(Button)`

  margin-vertical: 10;
`;

const Welcome = styled(typography.H1)`
text-align:center;
`;

const Description = styled(typography.P1)`
text-align:center;
margin-vertical:15;
`;

const enum COPY {
  IncrementTitle = 'Increment counter value',
  DecrementTitle = 'Decrement counter value',
  CounterValue = 'Counter value:',
}

const enum LOCALIZED {
  Title = 'gettingStarted.title',
  Description = 'gettingStarted.description',
}

interface IProps {
  counterValue: number;
  incrementCounterValue: () => {};
  decrementCounterValue: () => {};
}

export default ({ counterValue, incrementCounterValue, decrementCounterValue }: IProps) => (
  <Container testID={testComponent.CONTAINER}>
    <Welcome>{getLocalizedString(LOCALIZED.Title)}</Welcome>
    <Description>{getLocalizedString(LOCALIZED.Description)}</Description>
    <CounterContainer>
      <Text testID={testComponent.COUNTER_VALUE}>{`${COPY.CounterValue} ${counterValue}`}</Text>
      <CounterButton
        testID={testComponent.INCREMENT_BUTTON}
        title={COPY.IncrementTitle}
        onPress={incrementCounterValue}
      />
      <CounterButton
        testID={testComponent.DECREMENT_BUTTON}
        title={COPY.DecrementTitle}
        onPress={decrementCounterValue}
      />
    </CounterContainer>
  </Container>
);
