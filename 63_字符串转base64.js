function encode(str){
    const encodestr = encodeURI(str);
    const base64 = btoa(encodestr);
    return base64;
}

console.log(encode('111111'));