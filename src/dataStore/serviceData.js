import { observable, action, makeObservable, get, computed, runInAction } from 'mobx';
import axios from 'axios';
class ServiceData{
    listService=[];
   constructor()
   {
   makeObservable(this,{
       listService: observable,
       addService: action})
   }
   async addService(data) {
    await  fetch('http://localhost:8787/service',{
        method: 'POST',
                body: JSON.stringify(data),
                headers:{
                  'Content-Type':'application/json'
                }
            }).then((res)=>{
                console.log(res.status);
                if(res.status===200)
                {
               this.listService.push(data);
                console.log(this.listServices)
                }
            }).catch((e) => {
        console.log("error");
    });
 }
  
 initialServices = async () => {
    axios.get("http://localhost:8787/services").then((result) => {
      runInAction(() => {
        this.listService = result.data;
      });
    });

  }
   }
   export default new ServiceData();
   