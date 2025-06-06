function outer (){
     let count =0;
      function inner (){
        count ++;
        console.log( count );

      }
    // inner()
       return inner
}
//outer()
//outer()
 const fn =outer()
  fn()
  fn()