var katzDeli = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)

  var number = katzDeliLine.length + 1

  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return `Now serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served."
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var line = [];

    for(let i = 0; i < katzDeliLine.length; i++){

      line.push(`${i+1}. ${katzDeliLine[i]}`)
    }

    return `The line is currently: ${line.join(', ')}`
  } else {
    return "The line is currently empty."
  }

}
