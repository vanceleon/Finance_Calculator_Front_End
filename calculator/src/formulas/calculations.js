export const futureValue = (pv, int, yr, pmt) => {
  const intConversion = ((1 + int) / 100) - 1;
  console.log("intConversion",intConversion);
  let fv = 0;
  if (pmt !== 0 && pv === 0) {
    fv = futureValueOfAnnuity(pv, intConversion, yr, pmt);
  } else if (pmt !== 0 && pv !== 0) {
    console.log(futureValueOfPresentValue(pv, intConversion, yr));
    console.log(futureValueOfAnnuity(pv, intConversion, yr, pmt));
    let annuity = futureValueOfAnnuity(pv, intConversion, yr, pmt);
    let presentValue = futureValueOfPresentValue(pv, intConversion, yr);
    fv =  presentValue + annuity;
    console.log("present value and annuity",fv);

  }else {
    fv = futureValueOfPresentValue(pv, intConversion, yr);
  }
  return fv;
};


// creating separate function to keep dry code
export const futureValueOfPresentValue = (pv, int, yr) => {
  let fv = 0;
  fv = pv * Math.pow((1+int), yr);
  // console.log(fv)
  return fv;
}


export const futureValueOfAnnuity = (pv, int, yr, pmt) => {
  let fv = 0;
  // console.log(Math.pow((onePlusInterest, yr)));
  fv = pmt * (((Math.pow((1 + int), yr) - 1) / int));
  // console.log(fv);
  return fv;
};
