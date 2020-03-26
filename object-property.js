const students = [ 
    {id: 01, name: "Akash"},
    {id: 02, name: "Batash"},
    {id: 03, name: "Chand"},
    {id: 04, name: "Dola"},
    {id: 05, name: "Ela"}
];
var names = [];
for(let i = 0; i<students.length; i++){
    elements = students[i];
    names = elements.name;
    names.push();
    
}
console.log(names);
// const names = students.map(s => s.name);
// const ids = students.map(i => i.id);
// const bigger = students.filter(f => f.id > 3);
// const biggerOne = students.find(n => n.id > 3);
// console.log(biggerOne);

