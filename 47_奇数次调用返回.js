let A = (function(){
    let idx = 0;
    return function(){
        idx++;
        if(idx % 2 === 1) console.log(1);
        else console.log(2);
    }
})()
A();
A();
A();