import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state';
import RepositoriesList from './components/RepositoriesList';
interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Pavkage</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
