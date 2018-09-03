function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`; 
}

function nowServing(line){
  if (!line.length){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line){
  if (!line.length){
    return "The line is currently empty.";
  }
  const numbersAndNames = [];
  // ["1. Ada", "2. Grace", "3. Alan"]
  // "The line is currently: 1. Ada, 2. Grace, 3. Alan"
  for(var i = 0; ;)
}