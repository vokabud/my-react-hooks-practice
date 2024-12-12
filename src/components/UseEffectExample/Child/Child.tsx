import { FC, useEffect } from 'react';
import { Typography } from '@mui/material';

const UseStateExample: FC = () => {

    useEffect(() => {
        // Runs only once on mount
        console.log('Component mounted');

        return () => {
            // Runs only once on unmount
            console.log('Component unmounted');
        };
    }, []);

    return (
        <Typography variant={'body1'} gutterBottom>
            Some element...
        </Typography>
    );
};

export default UseStateExample;

// const a = () => {
//     console.log('test 1');
//     return () => {
//         console.log('test 1 return');
//     };
// };
// a()();
