import { FC, useEffect, useState } from 'react';
import { Container, Button, Typography } from '@mui/material';

import Child from './Child';

const UseStateExample: FC = () => {
    const [showChild, setShowChild] = useState<boolean>(false);

    useEffect(() => {
        console.log('showChild:', showChild);
    }, [showChild]);

    return (
        <Container maxWidth={'sm'}>
            <Typography variant={'h4'} gutterBottom>
                useEffect Example
            </Typography>
            <Typography variant={'body1'} gutterBottom>
                mount/unmount
            </Typography>
            <Button variant={'text'} onClick={() => setShowChild(!showChild)}>
                {showChild ? 'Hide' : 'Show'} Child
            </Button>
            {showChild && <Child />}
            <ul>
                <li>Fetch data from an API when the component mounts</li>
                <li>Subscribing/Unsubscribing to Events, Managing Timers or Intervals</li>
                <li>Reacting to Props or State Changes</li>
                <li>Clean-up Operations</li>
                <li>Separate concerns by using multiple hooks rather than combining unrelated logic into one</li>
                <li>Return a cleanup function for effects that require it.</li>
                <li>Avoid Overusing useEffect</li>
            </ul>
        </Container>
    );
};

export default UseStateExample;

// useEffect(() => {
//     const handleResize = () => console.log(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//
//     return () => {
//         // Cleanup when the component unmounts
//         window.removeEventListener('resize', handleResize);
//     };
// }, []);
