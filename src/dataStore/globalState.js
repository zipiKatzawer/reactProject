import {observable,makeObservable,action} from 'mobx';
class GlobalState
{
    isLogin=false;
    constructor(){
        makeObservable(this,{
            isLogin:observable,
            setIsLogin:action,
        })
    }
    setIsLogin=(temp)=>{
        this.isLogin=temp;
    }
}
export default new GlobalState();