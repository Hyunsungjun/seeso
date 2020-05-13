var sayNode = function() {
    console.log('Node');
};
var es = 'ES';
var oldObject = {
    sayJS: function() {
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';

oldObject.sayNode(); //node
oldObject.sayJS(); //JS
console.log(oldObject.ES6); //Fantastic

const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic',
};

newObject.sayNode(); //NODE
newObject.sayJS(); //JS
console.log(newObject.ES6);