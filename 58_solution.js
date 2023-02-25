function Solution(arr, k){
    const h = [0];
    let size = arr.length;
    let res = [];
    for(let i = 0; i < arr.length ; i++){
        h.push({
            value: arr[i],
            index: i
        })
    }
    function up(u){
        let t = u;
        if(u*2 <= size && h[u*2].value < h[t].value) t = u * 2;
        if(u * 2 + 1 <= size && h[u*2+1].value < h[t].value) t = u * 2 + 1;
        if(u !== t){
            [h[u], h[t]] = [h[t], h[u]];
            up(t);
        }
    }
    for(let i = Math.floor(size / 2); i; i--) up(i);
    while(k--){
        res.push(h[1]);
        h[1] = h[size];
        size--;
        up(1);
    }
    res.sort((a, b)=>a.index - b.index);
    res = res.map((item)=>item.value);
    return res;
}

const arr = [1,2,3,4,5,3,2];
console.log(Solution(arr, 4));