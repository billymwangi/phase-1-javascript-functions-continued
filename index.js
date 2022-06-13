// code your solution here


function mondayWork(defaultActivity = "go to the office"){
    return `This Monday, I will ${defaultActivity}.`
}

function wrapAdjective(result ="||"){
    return function (emphatic = "a dedicated programmer"){
    return  `You are ${result}$[emphatic]${result}!`
    }
}