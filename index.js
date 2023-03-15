function scuberGreetingForFeet(feet){
  if(feet <= 400){
    return 'This one is on me!'
  } else if (2000<feet && feet<2500){
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
  } 

console.log (scuberGreetingForFeet(2600))
function ternaryCheckCity(city){
  const destination = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return destination
}
console.log (ternaryCheckCity ('Pittsburgh'))
function switchOnCharmFromTip(tip){
  switch (tip) { 
   case 'generous' :
    return 'Thank you so much.';
    break;
   case'not as generous':
    return 'Thank you.';
    break;
   default :
    return 'Bye.'
  }
}
console.log (switchOnCharmFromTip('generous'))