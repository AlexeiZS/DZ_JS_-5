`use strict`   //контроль

console.log('<<Язык сценариев JavaScript и библиотека jQeerty>>');
console.log('Рекурсия');
console.log('');
console.log('              ','Задание # 1');

//функция возведения числа в степень
function pow(x,n){
   if(!n) return 1;
   else  return x * pow(x, n - 1);
}
console.log('pow(2,2): ',pow(2,2));//4
console.log('pow(2,4): ',pow(2,4));//16
console.log('pow(2,6): ',pow(2,6));//64
console.log('pow(4,4): ',pow(4,4));//256
console.log('pow(5,5): ',pow(5,5));//3125

//-------------------------------------
console.log('');
console.log('              ','Задание # 2');

//функция поиска наибольшего общего делителя
function  greatestCommonDivisor(a,b){
   if(!b) return a;
   else return greatestCommonDivisor(b, a % b);
}
console.log('greatestCommonDivisor(56,320): ',greatestCommonDivisor(56,320));//8
console.log('greatestCommonDivisor(2,10): ',greatestCommonDivisor(2,10));//2
console.log('greatestCommonDivisor(12,144): ',greatestCommonDivisor(12,144));//12
console.log('greatestCommonDivisor(35,364): ',greatestCommonDivisor(35,364));//7

//-------------------------------------
console.log('');
console.log('              ','Задание # 3');

//функция поиска максимальной цифры в числе
function maxNumber(number,max = 0){
   if(number < 10) return number > max ? number : max;
   const temp = (number % 10);
   if(temp > max) max = temp;
   number = Math.floor(number/10); //Math.floor()- сокращает число
   return maxNumber(number,max);
}
console.log('maxNumber(3456734541): ',maxNumber(3456734541));
console.log('maxNumber(387)): ',maxNumber(387));
console.log('maxNumber(123456): ',maxNumber(123456));
console.log('maxNumber(934543): ',maxNumber(934543));


//-------------------------------------
console.log('');
console.log('              ','Задание # 4'); 

//функция определяет простое число
function primeNum(number,divider = 3){
   if(divider > number / 2) return true;
   //if(divider * divider > number) return true;
   if(number === 2) return true;
   if(number < 2 || number % 2 === 0) return false;
   if(number % divider === 0) return false;
   return primeNum(number,divider + 2);
}
console.log('primeNum(7): ',primeNum(7)); 
console.log('primeNum(2): ',primeNum(2));
console.log('primeNum(22): ',primeNum(22));
console.log('primeNum(11): ',primeNum(11));
console.log('primeNum(333): ',primeNum(333));
console.log('primeNum(100): ',primeNum(100));
console.log('primeNum(17): ',primeNum(17));

//-------------------------------------
console.log('');
console.log('              ','Задание # 5');

//выводит все множители переданного числа(возрастающий порядок)
function multiplierNumbers(number, str ='',divider = 2,summ = 1){
   if(str === '')str += 'число ' + number + ' - множители: ';
   if(number === 2) return 2;
   if(divider > number /2) {
      str = str.substring(0, str.length - 2);   //удаляет последнии 2 символа 
      console.log(str);
      console.log('');
      return;
   }
   if(number % divider === 0 && ((summ *= divider) <= number)){
      str += divider + ' * ';
      multiplierNumbers(number,str,++divider,summ)
   }
   else{
      multiplierNumbers(number,str,++divider,summ);
   }
}
multiplierNumbers(18);
multiplierNumbers(150);
multiplierNumbers(180);
multiplierNumbers(400);

//-------------------------------------
console.log('');
console.log('              ','Задание # 6');

//возращает число Фобиначчи

function serialNumFob(n){
    return (n <= 1) ? n :serialNumFob(n - 1) + serialNumFob(n - 2)
}
console.log('порядковый номер 3 - число ',serialNumFob(3));//2
console.log('порядковый номер 6 - число ',serialNumFob(6));//8
console.log('порядковый номер 7 - число ',serialNumFob(7));//13
console.log('порядковый номер 8 - число ',serialNumFob(8));//21



//-------------------------------------
