import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from "./components/Header";
import {Main} from "./components/Main";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <>
      <Header/>
      <Main/>
    </>
);