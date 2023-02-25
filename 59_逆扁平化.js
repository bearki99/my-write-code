function unFlatten(flatObj){
    const result = {};
    Object.keys(flatObj).forEach((key)=>{
        let value = flatObj[key];
        const path = flatObj.split('.');
        let currentObj = result;
        for(let i = 0; i < path.length - 1; i++){
            const segment = path[i];
            currentObj[segment] = currentObj[segment] || {};
            currentObj = currentObj[segment];
        }
        currentObj[path[path.length-1]] = value;
    })
    return result;
}