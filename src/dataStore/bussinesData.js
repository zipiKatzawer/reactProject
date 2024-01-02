import { observable, action, makeObservable, get, computed,runInAction } from 'mobx';
import axios from 'axios';
class BusinessData {
    business = {
        id: "123",
        name: "Coding Academy",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        logo: "https://yt3.googleusercontent.com/ytc/AIf8zZQ842DVfOkot2BlLE2u8HQUCHMctxzcZIWbT05t=s900-c-k-c0x00ffffff-no-rj",
        description: "The best coding academy in the world",
    };
constructor()
{
makeObservable(this,{
    business: observable,
    addBusiness: action})
}

addBusiness = async (data) => {
    await fetch("http://localhost:8787/businessData", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
        this.business = data;
     })
     .catch((error) => {
         console.error("Error saving business data:", error);
     });
 }

initialBusiness=async ()=>{
    await axios.get("http://localhost:8787/businessData").then((result) => {
        runInAction(() => {
            if(!result.data.name)
            this.addBusiness(this.business)
            else
            this.business=result.data;
        });
      });
}
}

export default new BusinessData();