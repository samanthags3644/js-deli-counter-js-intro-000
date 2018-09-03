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
  // line => ["Ada", "Grace", "Alan"]
  // We're getting to 
  // numbersAndNames => ["1. Ada", "2. Grace", "3. Alan"]
  // "The line is currently: 1. Ada, 2. Grace, 3. Alan"
  for(var i = 0; i < line.length ; i++){
    // Every element inside of line, we want to create a statement
    // that has their position in the line and their name
    numbersAndNames.push(`${i+1}. ${line[i]}`);
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`
}

// line[0] => "Ada"
// line[1] => "Grace"
// line[2] => "Alan"

