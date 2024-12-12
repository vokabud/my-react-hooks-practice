import { FC } from 'react';
import { Container, Typography } from '@mui/material';

import ThemeProvider from './ThemeProvider';
import ThemeSwitcher from './ThemeSwitcher';

const useContextExample: FC = () => {
    return (
        <Container maxWidth={'sm'}>
            <Typography variant={'h4'} gutterBottom>
                useContext Example
            </Typography>
            <ThemeProvider>
                <ThemeSwitcher />
            </ThemeProvider>
            <ul>
                <li>Global State Management, share themes, to avoiding repetitive prop passing, encapsulate and share reusable logic</li>
                <li>If your app grows more complex, consider tools like Redux for better scalability</li>
                <li>Place your provider as close as possible to the components that consume it to avoid unnecessary re-renders</li>
            </ul>
        </Container>
    );
};

export default useContextExample;
