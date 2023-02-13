function transform(num){
    let res = '';
    while(num){
        let val = num % 2;
        num = Math.floor(num / 2);
        res = val + res;
    }
    return res;
}
console.log(transform(10));