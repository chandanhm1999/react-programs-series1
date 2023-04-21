import React from 'react';
import './App.css';

function Series() {
  const series = [4, 6, 12, 18, 30, 42, 60, 72];

  return (
    <div className='series_1'>
      <h2 className='he_2'>1. Series :</h2>
      <ul className='series_line'>
        {series.map(num => <li key={num}>{num}</li>)}
      </ul>
    </div>
  );
}

export default Series;


// 1. Write a program to print the series 4,6,12,18,30,42,60,72