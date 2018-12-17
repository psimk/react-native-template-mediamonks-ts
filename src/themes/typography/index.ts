/**
 *  Stores the default typography
 */
import fonts from './fonts';
import colors from '../colors';
import styled from 'styled-components';

const H1 = styled.Text`
  font-family: ${fonts.primary};
  font-size: 26;
  color: ${colors.primaryDark};
`;

const P1 = styled.Text`
  font-family: ${fonts.primary};
  font-size: 16;
  color: ${colors.primaryDark};
`;

export default {
  H1,
  P1,
};
