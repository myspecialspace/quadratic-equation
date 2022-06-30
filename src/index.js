module.exports = function solveEquation(equation) {
  console.log(equation);
  const equationArguments = equation.split(' ');//берет строку и превращает в массив, сплит разделяет его по пробелу на 1, 2 итд элементы

  console.log(equationArguments);
  //достали из формулы ax^2 + bx + c по счету с 0 элементы массива
  const a = Number(equationArguments[0]); //обернули в число
  const b =  equationArguments[3] === '-' ? Number(equationArguments[4]) * -1 : Number(equationArguments[4]);//знак в 3 ячейке массива. если 3 арг = "-" тогда? eqArg[4]*(-1) иначе: eqArg[4]
  const c = equationArguments[7]  === '-' ? Number(equationArguments[8]) * -1 : Number(equationArguments[8]);;

  //console.log(equationArguments);
  const desc = b**2 - 4 * a * c; //D=b^2-4ac

  const x1 = Math.round((-b + Math.sqrt(desc)) / (2 * a));
  const x2 = Math.round((-b - Math.sqrt(desc)) / (2 * a));

  return [x1, x2].sort((a,b) => a - b); //sort((a,b) => a > b ? 1 : -1);


}

//console.log(module.exports('-20 * x^2 - 108797540 * x - 130011773690520'));