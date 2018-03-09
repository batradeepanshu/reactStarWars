import axios from 'axios';
export function authenticate_user(username,password){
  const PEOPLE_API_URL='https://swapi.co/api/people/';
  // var valid_user=false;
  return axios.get(PEOPLE_API_URL,{params:{
    search:username
  }}).then((resp)=>{
    if(resp.data.results[0]){
    return resp.data.results[0].birth_year==password && resp.data.results[0].name==username;
    }
    else{
      return false
    }

      // for(let i=0;i<resp.data.results.length;i++){
      //   if(resp.data.results[i].name==username && resp.data.results[i].birth_year==password){
      //     valid_user=true;
      //   }
      // }
      // return valid_user;
  });
}
