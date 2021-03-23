var wrap=document.body.querySelector(".wrap");
var end=document.body.querySelector(".end");
var button= 0
var clicks= 1
var counter= 5

var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
for(var i=0; i<list.length; i++) 
  var ele=document.createElement("div");
  var eleName=document.createElement("h1");
  var eleAge=document.createElement("h4");
if(list[i].age>25){
  ele.style.color="green";
}
  eleName.innerHTML= list[i].name; 
  eleAge.innerHTML= "Age: " + list[i].age;
  ele.appendChild(eleName);
  ele.appendChild(eleAge);
  wrap.appendchild(ele);

function add(one){
  if(one){
    clicks= button + 1;
}
}
document.body.querySelector(".number").addEventListener("click", function() {
  var plus = counter = counter + clicks;
  end.innerHTML= "counter value:" + counter;})