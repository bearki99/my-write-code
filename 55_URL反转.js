let url = 'www.baidu.toutiao.com';
url = Array.from(url);
function myReverse(url){
    let i = 0, j = url.length;
    while(i < j){
        [url[i], url[j]] = [url[j], url[i]];
        i++;
        j--;
    }
}
myReverse(url);
console.log(url.join(''));