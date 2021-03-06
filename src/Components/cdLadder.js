import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

export default function CDLadder() {
  const [result, setResult] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    // const stockCorrelationObj = {
      
    // };
    // setResult();
  };
// need a way to add or take away from the ladder and calculate the interest rates
  return (
    <form className='calculator-face'>
      
      <div className='problem'>
        <h1>CD Ladder Calculator</h1>
        <div className='inputs'>
          <span className='label'>Enter Ticker Here</span>
          {/* <input
            className='present-value'
            name='begPrice'
            type='number'
            placeholder='Beta'
            value={ticker1}
            onChange={e => setticker1(e.target.value)}
          /> */}
        </div>
        <div className='inputs'>
          <span className='label'>Enter Ticker Here</span>
          {/* <input
            className='interest-rate'
            name='rf'
            type='number'
            placeholder='Risk Free Rate'
            value={ticker2}
            onChange={e => setticker2(e.target.value)}
          /> */}
        </div>
        <div className='result'>
          <Button
            onClick={e => {
              handleSubmit(e);
            }}
          >
            Calculate
          </Button>
          <div className='calculated-result'>{result}</div>
        </div>
      </div>
    </form>
  );
}
