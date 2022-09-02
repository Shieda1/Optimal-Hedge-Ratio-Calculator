// https://www.omnicalculator.com/finance/optimal-hedge-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const optimalhedgeratioRadio = document.getElementById('optimalhedgeratioRadio');
const sDofchangesinspotpriceRadio = document.getElementById('sDofchangesinspotpriceRadio');
const sDofchangesinfuturepriceRadio = document.getElementById('sDofchangesinfuturepriceRadio');
const correlationcoefficientRadio = document.getElementById('correlationcoefficientRadio');

let optimalhedgeratio;
let sDofchangesinspotprice = v1;
let sDofchangesinfutureprice = v2;
let correlationcoefficient = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

optimalhedgeratioRadio.addEventListener('click', function() {
  variable1.textContent = 'SD. of changes in spot price';
  variable2.textContent = 'SD. of changes in future price';
  variable3.textContent = 'Correlation coefficient';
  sDofchangesinspotprice = v1;
  sDofchangesinfutureprice = v2;
  correlationcoefficient = v3;
  result.textContent = '';
});

sDofchangesinspotpriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Optimal hedge ratio';
  variable2.textContent = 'SD. of changes in future price';
  variable3.textContent = 'Correlation coefficient';
  optimalhedgeratio = v1;
  sDofchangesinfutureprice = v2;
  correlationcoefficient = v3;
  result.textContent = '';
});

sDofchangesinfuturepriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Optimal hedge ratio';
  variable2.textContent = 'SD. of changes in spot price';
  variable3.textContent = 'Correlation coefficient';
  optimalhedgeratio = v1;
  sDofchangesinspotprice = v2;
  correlationcoefficient = v3;
  result.textContent = '';
});

correlationcoefficientRadio.addEventListener('click', function() {
  variable1.textContent = 'Optimal hedge ratio';
  variable2.textContent = 'SD. of changes in spot price';
  variable3.textContent = 'SD. of changes in future price';
  optimalhedgeratio = v1;
  sDofchangesinspotprice = v2;
  sDofchangesinfutureprice = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(optimalhedgeratioRadio.checked)
    result.textContent = `Optimal hedge ratio = ${computeoptimalhedgeratio().toFixed(2)}`;

  else if(sDofchangesinspotpriceRadio.checked)
    result.textContent = `SD. of changes in spot price = ${computesDofchangesinspotprice().toFixed(2)}`;

  else if(sDofchangesinfuturepriceRadio.checked)
    result.textContent = `SD. of changes in future price = ${computesDofchangesinfutureprice().toFixed(2)}`;

  else if(correlationcoefficientRadio.checked)
    result.textContent = `Correlation coefficient = ${computecorrelationcoefficient().toFixed(2)}`;
})

// calculation

// optimal hedge ratio = correlation coefficient * (spot price sd. / future price sd.)

function computeoptimalhedgeratio() {
  return Number(correlationcoefficient.value) * (Number(sDofchangesinspotprice.value) / Number(sDofchangesinfutureprice.value));
}

function computesDofchangesinspotprice() {
  return (Number(optimalhedgeratio.value) * Number(sDofchangesinfutureprice.value)) / Number(correlationcoefficient.value);
}

function computesDofchangesinfutureprice() {
  return Number(correlationcoefficient.value) * (Number(sDofchangesinspotprice.value) / Number(optimalhedgeratio.value));
}

function computecorrelationcoefficient() {
  return Number(optimalhedgeratio.value) / (Number(sDofchangesinspotprice.value) / Number(sDofchangesinfutureprice.value));
}