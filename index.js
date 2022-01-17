
/*
function find_max(nums) {
 let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
 for (let num of nums) {
 if (num > max_num) {
 // (Fill in the missing line here)
 }
 }
 return max_num;
}

*/

document.addEventListener('DOMContentLoaded', function(){
  /*  
    function person(firstname, lastname){
        var newPerson = {}
        newPerson.fname = firstname;
        newPerson.lname = lastname;
        return newPerson;
    }

    var person1 = person('yenn', 'man');
    console.log(person1);

    function Person(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    var person = new Person('Zakir', 'Saboor', 55);
    console.log(person);

    

    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    var nname = 'Thsi is a boom';

    Person.prototype.getMyname = function() {
        return this.firstname +' '+ this.lastname;
    }

    var person1 = new Person('Mary', 'Anane');
    var person2 = new Person('Thomas', 'Mohammed');
    var person3 = new Person('Fred', 'Brasil');
    var person4 = new Person('Sankara', 'Limumba');
    console.log(person1.getMyname());
    console.log(person2.getMyname());
    console.log(person3.getMyname());
    console.log(person4.getMyname());

   

    var obj1 = Object.create(Object.prototype, {
        name: {value: 'Nana'}, age: {value: 55}, lastname: {value: 'Yennubei'}
    });
    console.log(obj1);
 */
var dec = document.getElementById('decrement');
var num = document.getElementById('number');
var inc = document.getElementById('increment');
let init_number = 0;

inc.addEventListener('click', function(){
    init_number = init_number + 1
    num.innerHTML = init_number;
})

dec.addEventListener('click', function(){
    init_number -= 1;
    num.innerHTML = init_number;
})
})