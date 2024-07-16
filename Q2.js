//Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.

function arithmeticExpression(expression){
    expression = expression.replace(/\s+/g,'')

    let numbers = expression.split(/[-+]/).map(Number)

    let operators = expression.split(/[0-9]/).filter(op=>op)

    let result = numbers[0]

    for (let i=0; i<operators.length; i++){
        if(operators[i]==='+'){
            result += numbers[i+1]
        }

        else if(operators[i]==='-'){
            result -= numbers[i+1]
        }
    }

    return result
}

console.log(arithmeticExpression("13+2-5"))
console.log(arithmeticExpression("15+20-12"))