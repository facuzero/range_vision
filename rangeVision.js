function range_vision(number) {
  let result = false;
  if (number > 0) {
    let parseString = number.toString();
    let value = 0;
    console.log("NUMERO: ", number);
    for (let i = 0; i < parseString.length; i++) {
      let digit = parseString.charAt(i);
      console.log(`Digito: ${digit}`);

      let leftString = "";
      let rightString = "";
      //Puede ver a la izquierda
      for (let j = i; j >= 0; j--) {
        if (i === 0) {
          leftString = "-";
          break;
        }
        leftString += parseString.charAt(j - 1);
      }
      let leftDigits = leftString.split("").map(Number);
      let leftSum = leftDigits.reduce((a, b) => a + b, 0);
      //Puede ver a la derecha
      for (k = i + 1; k < i + 1 + Number(digit); k++) {
        rightString += parseString.charAt(k);
      }
      if (i + 1 === parseString.length) {
        rightString = "-";
      }
      let rightDigits = rightString.split("").map(Number);
      let rightSum = rightDigits.reduce((a, b) => a + b, 0);

      if (isNaN(leftSum)) leftSum = 0;
      if (isNaN(rightSum)) rightSum = 0;

      value = leftSum + rightSum;
      leftString = leftString.split("").reverse().join("");
      console.log(`Puede ver a la izquierda: ${leftString}`);
      console.log(`Puede ver a la derecha: ${rightString}`);
      console.log(`Valor de la vision: = ${value}`);

      result = true;
    }
  }
  return result;
}

range_vision(1234);
