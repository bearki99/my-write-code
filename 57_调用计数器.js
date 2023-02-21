class Count {
    constructor(value = 0){
        this.value = value;
    }
    add(){
        this.value++;
        return this.value;
    }
    reset(){
        this.value = 1;
        return this.value;
    }
}
const instance = new Count()
console.log(instance.add())//1
console.log(instance.add())//2
console.log(instance.add())//3
console.log(instance.reset())//1
console.log(instance.add())//1