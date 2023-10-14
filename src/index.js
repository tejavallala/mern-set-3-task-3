import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ColorPicker from './Components/Color'; 
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const colors = ['DarkRed', 'DarkGreen', 'DarkBlue', 'DarkSlateGray', 'DarkOrange', 'DarkCyan', 'DarkGoldenRod',
 'DarkGray', 'DarkMagenta', 'SaddleBrown', 'SeaGreen', 'SlateBlue', 'Teal', 'FireBrick', 'MidnightBlue', 'DimGray', 
 'Indigo', 'DarkOliveGreen', 'Sienna', 'Maroon'];
root.render(
  <ColorPicker colors={colors} />
);

reportWebVitals();
