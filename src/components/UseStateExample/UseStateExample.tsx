import { FC, useState } from 'react';
import { Container, TextField, Typography } from '@mui/material';

const UseStateExample: FC = () => {
    const [inputValue, setInputValue] = useState<string>('');


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <Container maxWidth={'sm'}>
            <Typography variant={'h4'} gutterBottom>
                useState Example
            </Typography>
            <TextField
                label="Input"
                variant="outlined"
                value={inputValue}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
            />
            <Typography variant={'body1'} gutterBottom>
                Input value: {inputValue}
            </Typography>
            <ul>
                <li>Use for component state, not global</li>
                <li>Ensure your state variable names clearly describe what they represent</li>
                <li>Always initialize the state with the correct type and structure to avoid bugs</li>
                <li>When updating state based on the previous state, use the functional update form 'useState(prevCount ={'>'} prevCount + 1)'</li>
                <li>Be cautious with objects or arrays in state. Always create a new copy when updating</li>
                <li>Use useReducer for more complex state logic</li>
            </ul>
        </Container>
    );
};

export default UseStateExample;