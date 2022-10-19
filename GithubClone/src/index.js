import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
const App = lazy(() => import('./App'))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<div style={{ color: "black", textAlign: 'center', marginTop: '3rem' }}> Loading ... </div>}>
    <App />
  </Suspense>
);

