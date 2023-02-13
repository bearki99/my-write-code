function myfn(time, content){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(content);
            resolve();
        }, time);
    })
}
async function fun(){
    await myfn(3000, '1');
    await myfn(1000, '2');
    await myfn(4000, '3');
}
fun();