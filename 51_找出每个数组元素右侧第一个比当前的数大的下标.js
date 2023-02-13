const num = [1, 3, 4, 2, 5, 6, 7];
const res = new Array(num.length).fill(-1);
const stk = [0];
for(let i = 1; i < num.length; i++){
    if(num[i] <= num[stk[stk.length-1]]) stk.push(i);
    else{
        while(stk.length && num[i] > num[stk[stk.length-1]]){
            let val = stk.pop();
            res[val] = i;
        }
        stk.push(i);
    }
}
console.log(res);