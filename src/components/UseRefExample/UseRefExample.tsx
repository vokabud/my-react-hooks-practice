import { FC, useRef } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';

const UseRefExample: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <Container maxWidth={'sm'}>
            <Typography variant={'h4'} gutterBottom>
                useRef Example
            </Typography>
            <TextField
                label={'Input'}
                variant={'outlined'}
                fullWidth
                margin={'normal'}
                placeholder={'Focus me!'}
                inputRef={inputRef}
            />
            <Button onClick={handleClick}>Focus Input</Button>
            <ul>
                <li>useRef is commonly used to interact with DOM elements directly</li>
                <li>changes to a useRef value <b>DON'T TRIGGER A RE-RENDER</b>, useful for storing values that need to persist between renders but don't affect the UI</li>
                <li>Don't perform side effects like DOM manipulations directly in useRef</li>
                <li>Always initialize useRef with a default value</li>
                <li>Ensure proper cleanup for event listeners or subscriptions when using useRef</li>
            </ul>
        </Container>
    );
};

export default UseRefExample;


// const counter = useRef(0);
// const increment = () => {
//   counter.current += 1;
//   console.log(counter.current); // Logs the updated value
// };
