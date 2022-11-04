
 
function writeCards(names, event){
  let cardMessages = []
  for (let i = 0; i < names.length; i++) {
   cardMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
     
   }
 
   return cardMessages;
}


function countDown(n){
while (n >= 0)
 console.log(n--)
}

countDown(5)