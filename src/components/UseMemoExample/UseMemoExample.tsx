import { FC, useMemo, useState } from 'react';
import { Button, Container, List, ListItem, TextField, Typography } from '@mui/material';

const UseMemoExample: FC = () => {
    const [filter, setFilter] = useState('');
    const [count, setCount] = useState(0);

    const items = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

    const expensiveFilter = (items: string[], filter: string) => {
        console.log('Running expensive filter...');
        return items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
    };

    //const filteredItems = expensiveFilter(items, filter);
    const filteredItems = useMemo(() => expensiveFilter(items, filter), [filter]);

    return (
        <Container maxWidth={'sm'}>
            <Typography variant={'h4'} gutterBottom>
                useMemo Example
            </Typography>

            <TextField
                label={'Input'}
                variant={'outlined'}
                value={filter}
                onChange={(_) => setFilter(_.target.value)}
                fullWidth
                margin="normal"
            />

            <List>
                {filteredItems.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                ))}
            </List>

            <Button onClick={() => setCount(count + 1)}>
                Increment Counter
            </Button>
            <Typography variant={'body1'} gutterBottom>
                Counter: {count}
            </Typography>
            <ul>
                <li>If you have a function or logic that performs a computationally heavy operation (e.g., sorting a large dataset, filtering, or performing complex calculations), wrap it in useMemo to avoid recalculating it on every render</li>
                <li>When you derive a new value from props or state, and recalculating it on every render is unnecessary</li>
                <li>Keep the logic inside useMemo clean and simple for maintainability</li>
            </ul>
        </Container>
    );
};

export default UseMemoExample;

