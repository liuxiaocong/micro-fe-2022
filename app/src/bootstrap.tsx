import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// @ts-ignore
// import Page12 from 'project1/Page12';
// @ts-ignore
const Page1 = React.lazy(() => import("project1/Page1"));
// @ts-ignore
const Page12 = React.lazy(() => import("project1/Page12"));
// @ts-ignore
const Page2 = React.lazy(() => import("project2/Page2"));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <App />
    <Page1 />
    <Page12 />
    <Page2/>
  </div>
);
