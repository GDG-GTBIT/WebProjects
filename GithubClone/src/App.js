
import { AppProvider } from '@shopify/polaris';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '@shopify/polaris/build/esm/styles.css';
import { Store } from './Redux/Store';
import HomePage from './Components/HomePage';
import DetailsPage from './Components/DetailsPage';

function App() {


  return (
    <div className="App">
      <Provider store={Store}>
        <AppProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/details' element={<DetailsPage />} />
            </Routes>
          </BrowserRouter>
        </AppProvider>
      </Provider>
    </div>
  );
}

export default App;
