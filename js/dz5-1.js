//TASK1

// const Account = function(login, email){
//     this.login = login;
//     this.email = email;
// }

// Account.prototype.getInfo = function(){
//     return `login : ${this.login}, email: ${this.email}`;
// }

// console.log(typeof Account.prototype.getInfo);
// 'function'

// const mango = new Account( 'Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo()); 
// //'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account( 'Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// //'login : Poly, email: poly@mail.com'

//TASK2----------------------------------------------------------------------
// Write code under this line
  
// class User {
//     constructor(name, age, followers){
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }
//     getInfo(){
//         return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
//     }
// }
    


// console.log(typeof User);
// //'function'

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo()); 
// //'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo); 
// //'function'  

// const poly = new User( 'Poly', 3, 17);
// console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'

//TASK3-------------------------------------------------
// class Storage  {
// constructor(items){
//     this.items = items;
// }
// getItems(){
//     return this.items;
// }
// addItem(item){
//  return this.items.push(item);
// }
// removeItem(item){
//     return this.items.splice(this.items.indexOf(item), 1);
// }
// }

//  console.log(typeof Storage);
// // 'function'

// const goods = [
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор'
//   ];
  
//    const storage = new Storage(goods);
  
//    console.log(storage.getItems());
//   /* [
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор'
//   ] */
  
//    storage.addItem('Дроид');
//    console.log(storage.getItems());
//   /* [
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
//     'Дроид'
//   ] */
  
//    storage.removeItem('Пролонгер');
//    console.log(storage.getItems());
//   /* [
//     'Нанитоиды',
//     'Железные жупи',
//     'Антигравитатор',
//     'Дроид'
//   ] */
  // TASK 4------------------------------------------------------------

// Write code under this line
  
// class StringBuilder {
//     constructor(value){
//         this._value = value;
//     }
// get value(){
//     return this._value;
// }
// append(str){
//         return this._value = this._value + str;
//         }
// prepend(str){
//             return this._value = str + this._value ;
//         }
// pad(str) {
//             this.append(str);
//             this.prepend(str);
//         }
// }
//  console.log(typeof StringBuilder);
// // 'function'


//  const builder = new StringBuilder('.');

//  builder.append('^');
//  console.log(builder.value); // '.^'

//  builder.prepend('^');
//  console.log(builder.value); // '^.^'

//  builder.pad('=');
//  console.log(builder.value); // '=^.^='



  //TASK 5--------------------------------------------------------------------------------------
//   class Car {
//     // Write code under this line
//     static getSpecs(car) {
//         return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
//     }
//     constructor({maxSpeed, speed = 0, isOn = false, distance = 0, price} = {}){
//         this.maxSpeed = maxSpeed;
//         this.speed = speed;
//         this.isOn = isOn;
//         this.distance = distance;
//         this.price = price;

//     }
//     get price() {
//        return this._price;
//     }
//     set price(value) {
//         this._price = value;
//     }
//     turnOn() {
//         this.isOn = true;
//     }
//     turnOff() {
//        this.isOn = false;
//        this.speed = 0;
//     }
//     accelerate(value) {
//         this.speed = value + this.speed;
//         if (this.speed > this.maxSpeed){
//             this.speed = this.maxSpeed;
//         }
//     }
//     decelerate(value) {
//        this.speed = this.speed - value;
//        if (this.speed < 0){
//            this.speed = 0;
//     }
//    }
//     drive(hours) {
//         if (this.isOn){
//       this.distance = this.distance + hours * this.speed;
//         }
//     }
  
   
//  }

//    const mustang = new Car({ maxSpeed: 200, price: 2000 });
//    mustang.turnOn();
//    mustang.accelerate(50);
//    mustang.drive(2);
   
//     console.log(Car.getSpecs(mustang));
//    // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   
//    mustang.decelerate(20);
//    mustang.drive(1);
//    mustang.turnOff();
   
//     console.log(Car.getSpecs(mustang));
//    // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
   
//     console.log(mustang.price); // 2000
//    mustang.price = 4000;
//    // console.log(mustang.price); // 4000
   



