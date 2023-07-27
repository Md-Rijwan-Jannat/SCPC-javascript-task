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
console.log(oututString);



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
console.log('Positive number sum:', outputSum);



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
console.log(output);


// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function towNumbers (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};
const result = towNumbers([1, 3, 6, 8, 11, 15], 9);
console.log('the tow numbers are:', result); 
