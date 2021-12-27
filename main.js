// Pick Element
const user_place = document.getElementById('congcat');
const cart_items = document.getElementById('obj_literal');
const skills_holder = document.getElementById('foreach');

// ES5

// congcat
// var user_logged = 'Tony';
// user_place.innerHTML = 'Hi, ' + user_logged + 'Apa Kabar?';

// Obj Literal
// function addProduct(name, category) {
//   return {
//     name: name,
//     category: category,
//   };
// }
// var getProduct = addProduct('iPhone 11', 'Gadget');
// // console.log(getProduct);
// cart_items.innerHTML = getProduct.name;

// ES6

// congcat
const user_logged = 'Tony';
user_place.innerHTML = `Hi ${user_logged}, apa kabar?`;

// Obj Literal
function addProduct(name, category) {
  return {
    name,
    category,
  };
}
let getProduct = addProduct('iPhone 11', 'Gadget');
cart_items.innerHTML = ` Product: ${getProduct.name} Category: ${getProduct.category}`;

// Foreach
const yourSkills = ['UX Design', 'Web Development', 'Video Editor'];
let parent = '<ul>';
yourSkills.forEach((skill) => {
  parent += '<li>' + skill + '</li>';
  console.log(`${'skill'}`);
});

parent += '</ul>';
skills_holder.innerHTML = parent;
