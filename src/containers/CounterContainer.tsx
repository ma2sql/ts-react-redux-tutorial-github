import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy, decreaseBy } from '../modules/counter';

function CounterContainer() {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => {dispatch(increase())};
    const onDecrease = () => {dispatch(decrease())};
    const onIncreaseBy = (diff: number) => {dispatch(increaseBy(5))};
    const onDecreaseBy = (diff: number) => {dispatch(decreaseBy(5))};

    return (
        <Counter 
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
            onDecreaseBy={onDecreaseBy}
        />
    )
}

export default CounterContainer;