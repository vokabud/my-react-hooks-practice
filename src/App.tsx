import { FC } from 'react';
import { CssBaseline } from '@mui/material';

import '@/App.css';

import UseStateExample from '@/components/UseStateExample';
import UseReducerExample from '@/components/UseReducerExample';
import UseEffectExample from '@/components/UseEffectExample';

const App: FC = () => {
  return (
    <>
      <CssBaseline />
      <UseStateExample />
      <UseReducerExample />
      <UseEffectExample />
    </>
  );
};

export default App;
