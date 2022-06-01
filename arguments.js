function check(num1,num2){
    console.log([...arguments]);
    sum =num1 + num2;
    console.log(num1,"+", num2,"=", sum);
}
const newCheck = check(2,3,45,654,24,3);