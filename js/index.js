// Q1
var a = +window.prompt("Enter the number!");
console.log("The Number is => "+ a);
// Q1_end

// *******************************

// Q2
var b = +window.prompt("Enter The Number !");
if(b%3==0 && b%4==0){
    console.log("Yes");
}
else{
    console.log("No");
}
// Q2_end

// *******************************

// Q3
var c = +window.prompt("Enter the First Number :");
var d = +window.prompt("Enter the Sec Number: ");
if(c>d){
    console.log(c +" is the Bigger");
}
else if (d>c){
    console.log(d +" is the Bigger")
}
else{
    console.log(" Are Equals");
}
// Q3_end

// *******************************

// Q4
 var a = window.prompt("Enter the Number :");
 if(a<0){
    console.log("Negative Number");
 }
 else{
    console.log("Positive Number");
 }
// Q4_end

// *******************************

// Q5
var a = +window.prompt("Enter the 1st number : ");
var b = +window.prompt("Enter the 2nd number : ");
var c = +window.prompt("Enter the 3rd number : ");
if(a>b && a>c && b>c){
    console.log("Max number = "+ a);
    console.log("Min number = "+ c);
}
else if(a>b && a>c && c>b){
    console.log("Max number = "+ a);
    console.log("Min number = "+ b); 
}
else if(b>a && b>c && a>c){
    console.log("Max number = "+ b);
    console.log("Min number = "+ c);
}
else if(b>a && b>c && c>a){
    console.log("Max number = "+ b);
    console.log("Min number = "+ a);
}
else if(c>a && c>b && a>b)
{
    console.log("Max number = "+ c);
    console.log("Min number = "+ b);
}
else if(c>a && c>b && b>a)
{
    console.log("Max number = "+ c);
    console.log("Min number = "+ a);
}
// Q5_end

// *******************************

// Q6
var a = +window.prompt("Enter The Number that you want to chick : ");
if(a%2 == 0){
    console.log("Even");
}
else{
    console.log("Odd");
}
// Q6_end

// *******************************

// Q7
var letter = window.prompt("Enter The Charachter : ");
if (letter == 'a' || letter == 'A' || letter=='e' || letter =='E' ||letter == 'o' || letter == 'O' || letter == 'i' || letter == 'I' || letter == 'u'|| letter == 'U'){
    console.log("Vowel");
}
else{
    console.log("Consonant");
}
// Q7_end

// *******************************

// Q8
var num = +window.prompt("Enter the number : ");
for(var i = 1 ; i<=num;i++){
    console.log(i);
}
// Q8_end

// *******************************

// Q9
var num = +window.prompt("Enter the Number : ");
for(var i =num; i<=num*12;i+=num){
    console.log(i);
}
// Q9_end

// *******************************

// Q10
var number = +window.prompt("Enter the number : ");
for(var i = 1; i<=number;i++){
    if (i%2 == 0){
        console.log(i);
    }
}
// Q10_end

// *******************************

// Q11
var a = +window.prompt("Enter the Number : ");
var b = +window.prompt("Enter the Power number : ");
var result = a**b;
console.log("the result is => "+result);
// Q11_end

// *******************************
// Q12
var sum = 0;
var noOfSub = 5;
for(var i = 1 ; i<=noOfSub;i++){
    var grade = +window.prompt("Enter Grade Number "+i);
    sum+=grade;
}
var avg = sum/noOfSub;
var percent = (avg/sum)*100
console.log(sum);
console.log(avg);
console.log(percent+"%");
// Q12_end

// *******************************

// Q13
var Mno = +window.prompt("Enter Month Number : ");
if(Mno == 1 || Mno == 3 || Mno==5 || Mno==7 || Mno == 8 ||Mno == 10 ||Mno ==12){
    console.log("31 Day");
}
else if(Mno == 4|| Mno==6 ||Mno == 9 ||Mno == 11){
    console.log("30 Day");
}
else{
    console.log("28/29 Day");
}
// Q13_end 

// *******************************

// Q14
var sub = window.prompt("Enter the Subject : ")
var percent = +window.prompt("Enter Your Percentage :")
if(percent >= 90){
    console.log("Your Grade in "+sub+" is Grade A");
}
else if(percent>=80){
    console.log("Your Grade in "+sub+" is Grade B");
}
else if(percent>=70){
    console.log("Your Grade in "+sub+" is Grade C");
}
else if(percent>= 60){
    console.log("Your Grade in "+sub+" is Grade D");
}
else if (percent >= 40){
    console.log("Your Grade in "+sub+" is Grade E");
}
else {
    console.log("Your Grade in "+sub+" is Grade F");

}
// Q14_end

// *******************************

// Q15
var month = +window.prompt("Enter the Month Number :")
switch(month){
    case 1:
        console.log("31 Day");
        break;
    case 2:
        console.log("28/29 Day");
        break;
     
    case 3:
       console.log("31 Day");
       break;

    case 4:
        console.log("30 Day");
        break;
    case 5:
        console.log("31 Day");
        break;
    case 6:
        console.log("30 Day");
        break;
    case 7:
        console.log("31 Day");
        break;
    case 8:
        console.log("31 Day")  ;
        break;
    case 9:
        console.log("30 Day");
        break;
    case 10:
        console.log("31 Day");
        break;
    case 11:
        console.log("30 Day");
        break;
    default:
        console.log("31 Day") ;
        break;                            
}
// Q15_end"

// *******************************

// Q16
var alphabet = +window.prompt("Enter the character");
switch (alphabet) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                console.log(alphabet + ' is a vowel');
                break;
            default:
                console.log(alphabet + ' is a consonant');
                break;
        }
// Q16_end

// *******************************

// Q17
var num1 = +window.prompt("Enter num1");
var num2 = +window.prompt("Enter num2");
var result =0;
switch (true) {
    case num1 > num2:
        result = num1 + ' is the maximum number';
        break;
    case num2 > num1:
        result = num2 + ' is the maximum number';
        break;
    default:
        result = 'Both numbers are equal';
        break;
}
console.log(result);
// Q17_end

// *******************************

// Q18
var number = +window.prompt("Enter the Number: ");
var result = 0;
switch (number % 2) {
    case 0:
        result = number + ' is an even number';
        break;
    case 1:
    case -1:
        result = number + ' is an odd number';
        break;
    default:
        result = 'Invalid input';
        break;
}
console.log(result);
// Q18_end

// *************************************

// Q19
var number = +window.prompt("Enter The Number : ");
var result =0;
switch (true) {
    case number > 0:
        result = number + ' is a positive number';
        break;
    case number < 0:
        result = number + ' is a negative number';
        break;
    default:
        result = 'The number is zero';
        break;
}
console.log(result);
// Q19_end

// **********************************************

// Q20
var num1 =+window.prompt("Enter num1");
var num2 = +window.prompt("Enter num2");
var result = 0;
var operation = window.prompt("Enter the operation")
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Division by zero is not allowed';
            }
            break;
        default:
            result = 'Invalid operation';
            break;
    }
    console.log('Result:', result);
// Q20_end