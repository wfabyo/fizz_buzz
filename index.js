
function itWorks () {
    return 1
}

function fizzBuzz(number) {
    
    if(isDivisibleByThree(number) && isDivisibleByFive(number)) {
        return 'fizzbuzz'
    }
    
    if(isDivisibleByThree(number)) {
        return 'fizz'
    }

    if(isDivisibleByFive(number)) {
        return 'buzz'
    } 
}

function isDivisibleByThree(number) {
    return number % 3 == 0
}

function isDivisibleByFive(number) {
    return number % 5 == 0
}

module.exports = {itWorks, fizzBuzz}