import { FC } from 'react';
import { CssBaseline } from '@mui/material';

import '@/App.css';

import UseStateExample from '@/components/UseStateExample';
import UseReducerExample from '@/components/UseReducerExample';
import UseEffectExample from '@/components/UseEffectExample';
import UseContextExample from '@/components/useContextExample';
import UseRefExample from '@/components/UseRefExample';
import UseMemoExample from './components/UseMemoExample';

const App: FC = () => {
  return (
    <>
      <CssBaseline />
      <UseStateExample />
      <UseReducerExample />
      <UseEffectExample />
      <UseContextExample />
      <UseRefExample />
      <UseMemoExample />
    </>
  );
};

export default App;
