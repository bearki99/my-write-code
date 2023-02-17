class math {
    constructor(value = 0){
        this.value = value;
    }
    add(...args){
        this.value = args.reduce((prev, next)=>prev + next, this.value);
        return this;
    }
    minus(...args){
        this.value -= args.reduce((prev, next)=>prev + next);
        return this;
    }
    times(timer){
        this.value = timer * this.value;
        return this;
    }
    getVal(){
        return this.value;
    }
}

math.add(2, 4).minus(3).times(2).getVal();
