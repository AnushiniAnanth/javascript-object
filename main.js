let a= 10;
function outer () {
     let b = 20;
      function inner () {
         let c= 30;
         console.log( a,b,c);
      }
       inner ();
}
outer();



 