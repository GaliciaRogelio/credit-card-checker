// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
// the purpose of this function is to return true when an array contains digits
// of a valid credit card number and false when its invalid.
const validateCred = arr => {
    let total = 0;
    // iterate through the array backward 
    for (let i = arr.length-1; i >= 0; i--){
        console.log(arr[i]);   // returns the array backwards 
        let reversedArr = arr[i];

        // get every other digit to double 
        if((arr.length - 1 -i) % 2 === 1) {
            reversedArr *= 2;
            // if the new value array is greater than 9 subtract 9 from it.
            if (reversedArr > 9) {
                reversedArr -= 9
            }
        }
        // sum up all the digits in the credit card number 
        total += reversedArr;

    }
    // if the sum modulo 10 is 0 then the number is valid, otherwise is invalid
    return total % 10 === 0;
};

console.log(validateCred(valid1)); // returns true
console.log(validateCred(invalid1)); // returns false 

const findInvalidCards = cards => {
    // create a new array to keep track of all invalid credit card numbers
    let invalidCC = [];

    // loop through the nested array and use the validateCred() function to check if the number is valid
    for (let i = 0; i < cards.length; i++) {
        let currentCC  = cards[i];
        if (!validateCred(currentCC)) {
            invalidCC.push(currentCC);
        }
    }
    // return another nested array of invalid cards
    return invalidCC;
}

console.log(findInvalidCards([valid1])); // since is valid it returns nothing
console.log(findInvalidCards([invalid1, invalid2])); // returns array of invalid card numbers 

const idInvalidCardCompanies = invalidNumArr => {
    // New arr to store the companies to contact
    let companiesArr = [];

    // iterate through the array of invalid numbers
    for (let i = 0; i < invalidNumArr.length; i++) {
        // switch statement to match the first digit to the company
        switch (invalidNumArr[i][0]) {
            case 3:
                if (companiesArr.indexOf('Amex') === -1) {
                    companiesArr.push('Amex');
                }
                break;
            case 4:
                if (companiesArr.indexOf('Visa')) {
                    companiesArr.push('Visa');
                }
                break;
            case 5:
                if (companiesArr.indexOf('Mastercard')) {
                    companiesArr.push('Mastercard');
                }
                break;
            case 6:
                if (companiesArr.indexOf('Discover')) {
                    companiesArr.push('Discover')
                }
                break;
            default:
            console.log('Company not found');
        }
    }
    return companiesArr;
}

console.log(idInvalidCardCompanies([invalid1])); // Prints credit card company