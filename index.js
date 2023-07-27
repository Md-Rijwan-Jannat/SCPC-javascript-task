// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
const inpuString = 'hello world';
const oututString = reverseString(inpuString);
console.log('Task 1:', oututString);




// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumOfPositiveNumber(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (array[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

const array = [2, -5, 10, -3, 7];
const outputSum = sumOfPositiveNumber(array)
console.log('Task 2: Positive number sum:', outputSum);




// Task 3: Write a JavaScript program to find the mo

function findFrequentElement(arr) {
    const frequency = {};


    for (const element of arr) {
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    }
    let frequentElement;
    let highestFrequency = 0;

    for (const element in frequency) {
        if (frequency[element] > highestFrequency) {
            highestFrequency = frequency[element];
            frequentElement = element;
        }
    }
    return frequentElement;
}
const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const output = findFrequentElement(inputArray);
console.log('Task 3:', output);




// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Cannot divide by zero';
            }
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}

const number1 = 10;
const number2 = 5;
const operation = '-';  //   use = + - * /

const clculateResult = calculate(number1, number2, operation);
console.log(`Task 5: Result: ${clculateResult}`);





// Task:6 Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.


function generateRandomPassword(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numericChars = '0123456789';
    const specialChars = '@$&';

    const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;
    const passwordArray = [];

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        passwordArray.push(allChars.charAt(randomIndex));
    }

    return passwordArray.join('');
}

const passwordLength = 8;
const randomPassword = generateRandomPassword(passwordLength);
console.log('Task 6:', randomPassword);



// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(romanNumeral) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentNumeral = romanNumeral[i];
        const nextNumeral = romanNumeral[i + 1];

        // If the current numeral is smaller than the next numeral, we subtract its value
        if (romanMap[currentNumeral] < romanMap[nextNumeral]) {
            result -= romanMap[currentNumeral];
        } else {
            result += romanMap[currentNumeral];
        }
    }

    return result;
}

// Test cases
console.log('Task 7:', romanToInt("IX"), romanToInt("XXI"));





//   Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
function findSecondSmallestNimber(arr) {

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    return secondSmallest;
}

const numbers = [5, 2, 8, 1, 3, 1];
const outputSecondSmallest = findSecondSmallestNimber(numbers);
console.log("Task 8: Second smallest number:", outputSecondSmallest);

