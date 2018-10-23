
//var count =1;
//function sayHello(){
//    console.log('hello world!, for the ', count, 'time');
//    count++;
//}

//to multiline comment ou cmd + /
//pizza form functionality:
function handleSubmit(event) {
   var form = event.target;
   var elements = form.elements;
   var toppingchoices = elements.toppings;

   var selectedToppings= '';

   for(var i=0; i < selectedToppings.length; i++) {
       var toppingchoices = toppings[i];
       if(toppings.checked) {
           selectedTopping += '' + topping.value;
       }

   }
console.log(selectedToppings);
}
//Animal Guessing Game
// function handleSubmit(event) {
//         var form =event.target;
//         var elements = form.elements;
    
//         var guess =  elements.guess.value;
        
//         var result = document.getElementById('result');
        
//         result.textContent = 'You made a guess of ' + guess;

//         var correct = 7;
//     //if equal -> correct!
//          if (guess == correct) {
//             result.textContent = 'Holy Cow, you did it!'
//          }
//     //else if -> too low
//          else if (guess < correct) {
//             result.textContent = 'Nope, too low' 
//          }
//          //else if -> too high
//     //else if -> waaaaaay too high
//         else if (guess > (correct*2)) {
//             result.textContent = 'You are like waaay off'  
//         }     
//         else if (guess > correct) {
//             result.textContent = 'Nope, too high' 
//         }
//     }

        
    
    //   var comments = elements.comments.value;
    //    console.log('comments', comments);




