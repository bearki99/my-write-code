let obj = {a: null, b: 'aaa'};
for(const [key, value] of Object.entries(obj)){
    if(value === null || value === "" || value === undefined){
        Reflect.deleteProperty(obj, key);
    }
}
console.log(obj);