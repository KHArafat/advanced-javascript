// falsy value:
// 0, false, "", undenfined, null, NaN(not a number)
// truthy value:
// '0', true, "false", [], {}   
let name = false;
if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log('condition is false');
}
