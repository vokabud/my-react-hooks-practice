import { FC, useReducer } from 'react';
import { Container, Typography, Button } from '@mui/material';

interface State {
    count: number;
}

const INITIAL_STATE: State = {
    count: 0,
};

enum ActionType {
    Increment = 'increment',
    Decrement = 'decrement',
    Reset = 'reset',
    SetNumber = 'setTwo',
}

interface Action {
    type: ActionType;
    payload?: number;
}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.Increment:
            return { count: state.count + 1 };
        case ActionType.Decrement:
            return { count: state.count - 1 };
        case ActionType.Reset:
            return INITIAL_STATE;
        case ActionType.SetNumber:
            if (action.payload === undefined) {
                throw new Error('Payload is required');
            }
            return { count: action.payload };
        default:
            throw new Error('Unknown action type');
    }
}

const UseReducerExample: FC = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <Container maxWidth={'sm'}>
            <Typography variant={'h4'} gutterBottom>
                useReducer Example
            </Typography>

            <Typography variant={'body1'} gutterBottom>
                Count: {state.count}
            </Typography>
            <Button variant={'text'} onClick={() => dispatch({ type: ActionType.Increment })}>Increment</Button>
            <Button variant={'text'} onClick={() => dispatch({ type: ActionType.Decrement })}>Decrement</Button>
            <Button variant={'text'} onClick={() => dispatch({ type: ActionType.Reset })}>Reset</Button>
            <Button variant={'text'} onClick={() => dispatch({ type: ActionType.SetNumber, payload: 2 })}>Set to 2</Button>
            <ul>
                <li>If you have a state object with multiple fields or dependencies, and their updates are interdependent, useReducer simplifies the logic</li>
                <li>Use for more complex state logic</li>
                <li>Reducer functions are pure, making them easy to test</li>
                <li>Centralizes state logic in one place</li>
            </ul>
        </Container>
    );
};

export default UseReducerExample;