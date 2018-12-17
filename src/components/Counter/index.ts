import { connect } from 'react-redux';
import Counter from './Counter';
import { increment, decrement, CounterState } from '../../store/models/counter';
import { RootState } from '../../store';

const mapStateToProps = ({ counterReducer }: RootState): CounterState => counterReducer;
const mapDispatchToProps = {
	increment,
	decrement
};

export type Props = typeof mapDispatchToProps & CounterState;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);
