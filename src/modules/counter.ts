import { createStandardAction, createReducer, ActionType } from 'typesafe-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';
const DECREASE_BY = 'counter/DECREASE_BY';

export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();
export const decreaseBy = createStandardAction(DECREASE_BY)<number>();

type CounterState = {
    count: number;
};

const initialState: CounterState = {
    count: 0
};

const actions = { increase, decrease, increaseBy, decreaseBy };
type CounterAction = ActionType<typeof actions>;

const counter = createReducer<CounterState, CounterAction>(initialState)
    .handleAction(increase, state => ({ count: state.count + 1 }))
    .handleAction(decrease, state => ({ count: state.count - 1 }))
    .handleAction(increaseBy, (state, action) => ({ count: state.count + action.payload }))
    .handleAction(decreaseBy, (state, action) => ({ count: state.count - action.payload }));
    
/*
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({ count: state.count - 1 }),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
    [DECREASE_BY]: (state, action) => ({ count: state.count - action.payload })
});
*/

/*
function counter(
    state: CounterState = initialState, 
    action: CounterAction): CounterState {
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1};
        case DECREASE:
            return { count: state.count - 1};
        case INCREASE_BY:
            return { count: state.count + action.payload };
        case DECREASE_BY:
            return { count: state.count - action.payload };
        default:
            return state;
    }
}
*/

export default counter;