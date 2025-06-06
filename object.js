// key - value pair in curly braces;
 const obj ={
     name : "anu"
 };
  const anoObj ={
     sub :true,
     no : 1000,
     contend :{
         ex : "abc",
         yy : 89
         
     },
     sub: [1,2,3],
     // function is also into the function
     action : function(){
        return `Hello Anu ${this.contend.ex}`;
     }

     
  };
 console.log( obj.name);
 console.log( anoObj.sub)
 console.log( anoObj.contend)
 console.log( anoObj.action())