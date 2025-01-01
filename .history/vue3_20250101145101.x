const state ={count:0}
const proxyState = new Proxy(state,{
    set(target,key,value){
        target[key]=value;
        return value;
    }
})
pr