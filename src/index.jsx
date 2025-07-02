import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from "./components/Header";
import {Main} from "./components/Main";

const mainRoot = ReactDOM.createRoot(document.getElementById('main'));

const headerRoot = ReactDOM.createRoot(document.getElementById("header"));
headerRoot.render(<Header/>)
mainRoot.render(<Main/>);