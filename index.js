// code your solution here
function saturdayFun(activity="roller-skate"){
    let message = `This Saturday, I want to ${activity}!`
    return(message)
}

function mondayWork(activity="go to the office"){
    let message = `This Monday, I will ${activity}.`
    return(message)
}


function wrapAdjective(flair="*") {
    const innerFunction = function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
    return innerFunction;
  }

  console.log(outer("*"))
