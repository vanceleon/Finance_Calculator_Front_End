import React, { useState } from 'react';
import {
  weightedAverageCostOfCapital,
  costOfDebt,
  costOfEquity
} from '../modules/waccCalculations';
import { Button } from 'semantic-ui-react';

export default function WACCInputs() {
  // Cost of Equity
  const [beta, setBeta] = useState(0);
  const [rm, setRm] = useState(0);
  const [rf, setRf] = useState(0);
  const [costEquity, setCostOfEquity] = useState(0);

  // Cost of Debt
  const [int, setInt] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [costDebt, setCostOfDebt] = useState(0);

  // Weighted Average Cost of Capital
  const [weightEquity, setEquityWeight] = useState(0);
  const [weightDebt, setDebtWeight] = useState(0);
  const [wacc, setWACC] = useState(0);

  const handleEquitySubmit = e => {
    e.preventDefault();
    const WACCObj = {
      weightDebt,
      weightEquity,
      rf,
      beta,
      rm,
      int,
      taxRate
    };
    const costofEq = costOfEquity(WACCObj);
    setCostOfEquity(costofEq);
  };

  const handleDebtSubmit = e => {
    e.preventDefault();
    const WACCObj = {
      weightDebt,
      weightEquity,
      rf,
      beta,
      rm,
      int,
      taxRate
    };
    const costofD = costOfDebt(WACCObj);
    setCostOfDebt(costofD);
  };

  const handleWaccSubmit = e => {
    e.preventDefault();
    const WACCObj = {
      weightDebt,
      weightEquity,
      rf,
      beta,
      rm,
      int,
      taxRate
    };
    const wacc = weightedAverageCostOfCapital(WACCObj);
    setWACC(wacc);
  };

  return (
    <form className='calculator-face'>
      <div className='problem'>
        <h1>Cost of Equity</h1>
        <div className='inputs'>
          <span className='label'>Beta</span>
          <input
            className='present-value'
            name='beta'
            type='number'
            placeholder='Beta'
            value={beta}
            onChange={e => setBeta(e.target.value)}
          />
        </div>
        <div className='inputs'>
          <span className='label'>Risk Free Rate</span>
          <input
            className='interest-rate'
            name='rf'
            type='number'
            placeholder='Risk Free Rate'
            value={rf}
            onChange={e => setRf(e.target.value)}
          />
        </div>
        <div className='inputs'>
          <span className='label'>Market Return</span>
          <input
            className='term-length'
            name='rm'
            type='number'
            placeholder='Market Return'
            value={rm}
            onChange={e => setRm(e.target.value)}
          />
        </div>
        <div className='result'>
          <Button
            onClick={e => {
              handleEquitySubmit(e);
            }}
          >
            Calculate
          </Button>
          <div className='calculated-result'>{costEquity}</div>
        </div>
      </div>
      <div className='problem'>
        <h1>Cost of Debt</h1>
        <div className='inputs'>
          <span className='label'>Interest Rate</span>
          <input
            className='present-value'
            name='int'
            type='number'
            placeholder='Interest Rate'
            value={int}
            onChange={e => setInt(e.target.value)}
          />
        </div>
        <div className='inputs'>
          <span className='label'>Tax Rate</span>
          <input
            className='interest-rate'
            name='taxRate'
            type='number'
            placeholder='Tax Rate'
            value={taxRate}
            onChange={e => setTaxRate(e.target.value)}
          />
        </div>
        <div className='result'>
          <Button
            className='result'
            onClick={e => {
              handleDebtSubmit(e);
            }}
          >
            Calculate
          </Button>
          <div className='calculated-result'>{costDebt}</div>
        </div>
      </div>
      <div className='problem'>
        <h1>Weighted Average Cost of Capital</h1>
        <div className='inputs'>
          <span className='label'>Weight of Equity</span>
          <input
            className='present-value'
            name='weightEquity'
            type='number'
            placeholder='Weight of Equity'
            value={weightEquity}
            onChange={e => setEquityWeight(e.target.value)}
          />
        </div>
        <div className='inputs'>
          <span className='label'>Weight of Debt</span>
          <input
            className='interest-rate'
            name='weightDebt'
            type='number'
            placeholder='Weight of Debt'
            value={weightDebt}
            onChange={e => setDebtWeight(e.target.value)}
          />
        </div>
        <div className='result'>
          <Button
            onClick={e => {
              handleWaccSubmit(e);
            }}
          >
            Calculate WACC
          </Button>
          <div className='calculated-result'>{wacc}</div>
        </div>
      </div>
    </form>
  );
}
