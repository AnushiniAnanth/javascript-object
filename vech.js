// inheritence in oops  

const vehicle={
    door : 2,
    engine: function(){
        return "rrr";
    }
};

console.log(vehicle.engine());

const car = Object.create(vehicle);
car.wheels= 4;

car.engine = function(){ return " eeee"; };
console.log( car.door)
console.log(car.engine());


 const tesla = Object .create(car);
  tesla .engine = function() { return "shhhh";};
 console.log( tesla.engine())

