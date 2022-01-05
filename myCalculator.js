///her we are defining varible to store to referace
'use strict';
// ==================================================================
const text_value = document.getElementById('text');
const btn_1 = document.getElementById('btn_1');
const btn_2 = document.getElementById('btn_2');
const btn_3 = document.getElementById('btn_3');
const btn_4 = document.getElementById('btn_4');
const btn_5 = document.getElementById('btn_5');
const btn_6 = document.getElementById('btn_6');
const btn_7 = document.getElementById('btn_7');
const btn_8 = document.getElementById('btn_8');
const btn_9 = document.getElementById('btn_9');
const btn_0 = document.getElementById('btn_0');
// ==================================================================
const btn_point = document.getElementById('btn_point');
const btn_plus = document.getElementById('btn_plus');
const btn_minus = document.getElementById('btn_minus');
const btn_division = document.getElementById('btn_division');
const btn_multiplication = document.getElementById('btn_multiplication');
const btn_sqrt = document.getElementById('btn_sqrt');
const btn_pwr = document.getElementById('btn_pwr');
const btn_clear = document.getElementById('btn_clear');
const btn_back = document.getElementById('btn_back');
const btn_1_x = document.getElementById('btn_1_x');
// ==========================================================================

const btn_equal = document.getElementById('btn_equal');
const result = document.getElementById('result');
const indigator = document.getElementById('indigator');
const indigator_2 = document.getElementById('indigator_2');
const btn_copy = document.getElementById('btn_copy');
const btn_paste = document.getElementById('btn_paste');
let operatorSymbol = ''; //for symbol storage like -,+ *
let btn_value = ''; /// to store the btn values
// ==============================================================
//here we are defining btn_1
// =================================================================
const btn_1_Funtion = () => {
  btn_value += btn_1.value;
  text_value.value = btn_value;
};
btn_1.addEventListener('click', btn_1_Funtion);

// ======================================================================
// Here we defining btn 2 function

const btn_2_Funtion = () => {
  btn_value += btn_2.value;
  text_value.value = btn_value;
};
btn_2.addEventListener('click', btn_2_Funtion);

// ===================================================================
// here we defining btn 3
const btn_3_Funtion = () => {
  btn_value += btn_3.value;
  text_value.value = btn_value;
};
btn_3.addEventListener('click', btn_3_Funtion);
// =================================================================
//here we defining btn4
const btn_4_Funtion = () => {
  btn_value += btn_4.value;
  text_value.value = btn_value;
};
btn_4.addEventListener('click', btn_4_Funtion);
// =============================================================
//here we defining btn5
const btn_5_Funtion = () => {
  btn_value += btn_5.value;
  text_value.value = btn_value;
};
btn_5.addEventListener('click', btn_5_Funtion);
// =============================================================
//here we defining btn6
const btn_6_Funtion = () => {
  btn_value += btn_6.value;
  text_value.value = btn_value;
};
btn_6.addEventListener('click', btn_6_Funtion);
// =============================================================
//here we defining btn7
const btn_7_Funtion = () => {
  btn_value += btn_7.value;
  text_value.value = btn_value;
};
btn_7.addEventListener('click', btn_7_Funtion);
// =============================================================
//here we defining btn4
const btn_8_Funtion = () => {
  btn_value += btn_8.value;
  text_value.value = btn_value;
};
btn_8.addEventListener('click', btn_8_Funtion);
// =============================================================
//here we defining btn9
const btn_9_Funtion = () => {
  btn_value += btn_9.value;
  text_value.value = btn_value;
};
btn_9.addEventListener('click', btn_9_Funtion);
// =============================================================
//here we defining btn0
const btn_0_Funtion = () => {
  btn_value += btn_0.value;
  text_value.value = btn_value;
};
btn_0.addEventListener('click', btn_0_Funtion);
// ==================================================================
//HERE WE ARE DEFINING COMMAN CLEAR FUNCTION (FOR BTN VALUE , TEXTVALUE OPERATORSYMBOL)
const commmanFunctionClear = (btnValue, textValue, opeartorSymbol) => {
  btn_value = btnValue;
  text_value.value = textValue;
  operatorSymbol = opeartorSymbol;
};
// =========================================================
const commanForIndiOrSym = (indigator_, sym) => {
  indigator.innerHTML = indigator_;
  operatorSymbol = sym;
};
///=====================================================================
const commmanFunctionClearForindigators = (
  indigator_1,
  indigator__2,
  opeartorSymbol
) => {
  indigator.innerHTML = indigator_1;
  indigator_2.innerHTML = indigator__2;
  operatorSymbol = opeartorSymbol;
};
// =======================================================================
const inputCheckValidation = (
  firstOperation,
  secondOperation,
  thirdOperation
) => {
  if (
    (indigator.textContent === firstOperation &&
      text_value.value !== '' &&
      result.textContent !== '') ||
    (indigator.textContent === secondOperation &&
      text_value.value !== '' &&
      result.textContent !== '') ||
    (indigator.textContent === thirdOperation &&
      text_value.value !== '' &&
      result.textContent !== '')
  )
    return true;
  else return false;
};
// =============================================================================
const clearResultOrindigator_1_2 = (result_, indigator_1, indigator__2) => {
  result.innerHTML = result_;
  indigator_2.innerHTML = indigator__2;
  indigator.innerHTML = indigator_1;
};
// ===========================================================================
//HERW WE DEFINIG COMMAN RESULT AND INDIGATOR_1
const updateResultAndIndigator_1 = (result_, indigator_1) => {
  result.innerHTML = result_;
  indigator.innerHTML = indigator_1;
};

// ======================================================================
// =============================================================
//here we defining btn clear
const btn_clear_Funtion = () => {
  text_value.value = '';
  btn_value = '';
  clearResultOrindigator_1_2('', '', '');
};
btn_clear.addEventListener('click', btn_clear_Funtion);
// =============================================================
//here we defining btn back
const btn_back_Funtion = () => {
  const len = btn_value.length;
  btn_value = btn_value.substring(0, len - 1);
  text_value.value = btn_value;
};
btn_back.addEventListener('click', btn_back_Funtion);
// =============================================================
//here we defining btn point
const btn_point_Funtion = () => {
  if (!btn_value.includes('.')) {
    btn_value += btn_point.value;
    text_value.value = btn_value;
  }
};
btn_point.addEventListener('click', btn_point_Funtion);
// ================================================================
// HERE WE ARE DIFINIG COPY BTN
let copyvaribale = 0;
const copy_btn_Function = () => {
  if (result.textContent !== '') {
    copyvaribale = +result.textContent;
  }
};
btn_copy.addEventListener('click', copy_btn_Function);
// ===============================================================
///here we defining paste btn
const paste_btn_Function = () => {
  if (copyvaribale !== 0) {
    text_value.value = copyvaribale;
    clearResultOrindigator_1_2('', '', '');
  }
};
btn_paste.addEventListener('click', paste_btn_Function);
///==========================================================

// ====================================================================
// HERE WE DEFINING PLUSE OPEARTION BTN ============SUCCESS
const btn_plus_Function = () => {
  let firstNumber = +result.textContent;
  if (inputCheckValidation('*', '-', '/')) {
  } else {
    if (text_value.value !== '') {
      firstNumber += +text_value.value;
      updateResultAndIndigator_1(firstNumber, btn_plus.value);
      if (indigator_2.textContent !== '') indigator_2.innerHTML = '';
      commmanFunctionClear('', '', '+');
    } else if (result.textContent !== '' && operatorSymbol === '') {
      commmanFunctionClearForindigators(
        btn_plus.value.value,
        '',
        btn_plus.value.value
      );
    }
  }
  if (result.textContent !== '' && text_value.value === '') {
    operatorSymbol = '+';
    indigator.innerHTML = btn_plus.value;
  }
};
btn_plus.addEventListener('click', btn_plus_Function);
// ===========================================================SUCCESS
// HERE WE ARE DEFINING MULTIPLICATION OPEARTION STAR HERE SUCCESS
// ====================================================================================
const btn_Multiplication_Function = () => {
  let firstNumber = 0;
  if (inputCheckValidation('+', '-', '/')) {
  } else {
    if (result.textContent === '') {
      updateResultAndIndigator_1(text_value.value, btn_multiplication.value);
      commmanFunctionClear('', '', '*');
    } else {
      firstNumber = +result.textContent;
      if (text_value.value !== '') {
        firstNumber *= +text_value.value;
        updateResultAndIndigator_1(firstNumber, btn_multiplication.value);
        commmanFunctionClear('', '', '*');
        if (indigator_2.textContent !== '') indigator_2.innerHTML = '';
      } else if (result.textContent !== '' && operatorSymbol === '') {
        commmanFunctionClearForindigators(
          btn_Multiplication_Function.value,
          '',
          btn_multiplication.value
        );
      }
    }
  }
  if (result.textContent !== '' && text_value.value === '') {
    commanForIndiOrSym(btn_multiplication.value, btn_multiplication.value);
  }
};
btn_multiplication.addEventListener('click', btn_Multiplication_Function);
// ==================================================================================
//HERE WE DIFINING MINIU OPEARTION SUCCESS
// ==================================================================================
const btn_minius_Function = () => {
  let firstNumber = 0;
  let seconNumber = 0;
  if (inputCheckValidation('*', '+', '/')) {
  } else {
    if (text_value.value !== '') {
      if (result.textContent === '') {
        result.textContent = text_value.value;
        commmanFunctionClear('', '', '-');
        indigator.innerHTML = btn_minus.value;
      } else {
        if (text_value.value !== '') {
          firstNumber = +result.textContent;
          seconNumber = +text_value.value;
          updateResultAndIndigator_1(
            `${firstNumber - seconNumber}`,
            btn_minus.value
          );
          commmanFunctionClear('', '', '-');
          if (indigator_2.textContent !== '') indigator_2.innerHTML = '';
        }
      }
    } else if (text_value.value === '' && result.textContent !== '') {
      commanForIndiOrSym(btn_minus.value, btn_minus.value);
    }
  }
};
btn_minus.addEventListener('click', btn_minius_Function);
// /HERE END HERE MINIU OPEARTION SUCCESS
// ========================================
// HERE WE DEFINING DIVISIONO PERATION//SUCCESS START HERE
const btn_Divison_Function = () => {
  let firstNumber = 0;
  let seconNumber = 0;
  if (inputCheckValidation('*', '+', '-')) {
  } else {
    if (text_value.value !== '') {
      if (result.textContent === '') {
        result.textContent = text_value.value;
        commmanFunctionClear('', '', '/');
        indigator.innerHTML = btn_division.value;
      } else {
        if (text_value.value !== '') {
          firstNumber = +result.textContent;
          seconNumber = +text_value.value;
          updateResultAndIndigator_1(
            `${firstNumber / seconNumber}`,
            btn_division.value
          );
          commmanFunctionClear('', '', '/');
          if (indigator_2.textContent !== '') indigator_2.innerHTML = '';
        }
      }
    } else if (text_value.value === '' && result.textContent !== '') {
      commanForIndiOrSym(btn_division.value, btn_division.value);
    }
  }
};
btn_division.addEventListener('click', btn_Divison_Function);
// HERE WE DEFINING DIVISION OPERATION//SUCCESS END HERE
// =======================================================================
//HERE WE ARE DEFINING SQRT OPERATION SUCCESS strat here
const btn_Sqrt_Function = () => {
  if (text_value.value !== '') {
    const firstNumber = +text_value.value;
    indigator_2.innerHTML = `Square of ${firstNumber}: `;
    result.innerHTML = Math.pow(firstNumber, 2);
    text_value.value = '';
    btn_value = '';
  }
};
btn_pwr.addEventListener('click', btn_Sqrt_Function);
///HERE WE ARE DEFINING SQRT OPERATION end here
// =====================================================================
//HERE WE ARE DEFINGING ROOT OF NUMBER
const btn_Root_Function = () => {
  if (text_value.value !== '') {
    const firstNumber = +text_value.value;
    indigator_2.innerHTML = `Square of ${firstNumber}: `;
    result.innerHTML = Math.pow(firstNumber, 1 / 2).toPrecision(4);
    text_value.value = '';
    btn_value = '';
  }
};
btn_sqrt.addEventListener('click', btn_Root_Function);
///HERE WE ARE DEFINING SQRT OPERATION end here
// =========================================================SUCCESS
// HERE WE ARE DIFINING EQUAL OPEARTION
// ====================================

const btn_Equal_Function = () => {
  if (text_value.value !== '' && result.textContent !== '') {
    const firstNumber = +result.textContent;
    const secondNumber = +text_value.value;
    // =======================================plus opeartion start here
    if (operatorSymbol === '+') {
      indigator_2.innerHTML = `Result: ${firstNumber}+${secondNumber}=`;
      updateResultAndIndigator_1(firstNumber + secondNumber, '');
      commmanFunctionClear('', '', '');
    }
    // ===========================plus opeartion end here

    // =====================multiplication opeartion start here
    else if (operatorSymbol === '*') {
      indigator_2.innerHTML = `Result: ${firstNumber}*${secondNumber}=`;
      result.innerHTML = firstNumber * secondNumber;
      commmanFunctionClear('', '', '');
      indigator.innerHTML = '';
    }
    ///=======================multiplication opeartion end here
    // =====================================================================
    // minis opeartion start here============================================
    else if (operatorSymbol === '-') {
      indigator_2.innerHTML = `Result: ${firstNumber}-${secondNumber}=`;
      result.innerHTML = firstNumber - secondNumber;
      commmanFunctionClear('', '', '');
      indigator.innerHTML = '';
    }
    // =============================================================
    // minis opeartion end here
    //==================================================================

    ///======================division opeartion start here
    // =====================================================================
    // minis opeartion start here============================================
    else if (operatorSymbol === '/') {
      indigator_2.innerHTML = `Result: ${firstNumber}/${secondNumber}=`;
      if (firstNumber % secondNumber === 0) {
        result.innerHTML = firstNumber / secondNumber;
      } else {
        result.innerHTML = (firstNumber / secondNumber).toPrecision(4);
      }

      commmanFunctionClear('', '', '');
      indigator.innerHTML = '';
    }
    // =============================================================
    // division opeartion end here
    //==================================================================
  }
};
btn_equal.addEventListener('click', btn_Equal_Function);
// =======================================================================================
