function count(str){
    let res = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] >= 'a' && str[i] <= 'z' || (str[i] >= 'A' && str[i] <= 'Z')) res++;
    }
    return res;
}
console.log(count("ABCabc123"));