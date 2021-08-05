export class Addition {
    addOneAndTwo(){
        return(1+2)
    }
    callOnce(){
        const a=1
    }

    callMultiple(){
        this.callOnce()
        this.callOnce()
        this.callOnce()
    }
}