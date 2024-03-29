import { observable, action, makeObservable,runInAction } from 'mobx';
import axios from 'axios';
import Swal from 'sweetalert2'
class MeetingData{
    listMeeting=[];
constructor()
{
makeObservable(this,{
    listMeeting: observable,
    addMeeting: action})
}
initialMeetings =async() => {
    axios.get("http://localhost:8787/appointments").then((result) => {
      runInAction(() => {
        this.listMeeting = result.data;
      });
    });

  }
    async addMeeting(data){

    await fetch('http://localhost:8787/appointment',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 
        'Content-Type': 'application/json' }
            }).then((res)=>{
                console.log(res.status);
                if (res.status == 200) {
                  this.listMeeting.push(data);
                  console.log("good")
                  Swal.fire({
                      title: "The appointment was successfully saved",
                      icon: "success",
                      showConfirmButton: false,
                      timer: 2500
                  });
              }
              else {
                console.log("error")
                  Swal.fire({
                      title: "Appointment is not available! Please choose a different date and time",
                      icon: "error",
                      showConfirmButton: false,
                      timer: 2500
                  });
              }
            }).catch((e)=>{console.log("error")})
}

}
export default new MeetingData();
