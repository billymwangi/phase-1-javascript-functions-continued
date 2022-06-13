// code your solution here
function SaturdayFun(defaultActivity="roller-skate"){
    return `This Saturday, I want to ${defaultActivity}!`
}

function mondayWork(defaultActivity = "go to the office"){
    return `This Monday, I will ${defaultActivity}.`
}

function wrapAdjective(result ="||"){
    return function (emphatic = "a dedicated programmer"){
    return  `You are ${result}$[emphatic]${result}!`
    }
}