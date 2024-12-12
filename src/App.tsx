import { FC } from 'react';
import UseStateExample from '@/components/UseStateExample';
import UseReducerExample from '@/components/UseReducerExample';
import { CssBaseline } from '@mui/material';
import '@/App.css';

const App: FC = () => {
  return (
    <>
      <CssBaseline />
      <UseStateExample />
      <UseReducerExample />
    </>
  );
};

export default App;
