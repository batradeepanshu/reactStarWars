import axios from 'axios';
export function authenticate_user(username,password){
  const PEOPLE_API_URL='https://swapi.co/api/people/';
  var valid_user=false;
  return axios.get(PEOPLE_API_URL).then((resp)=>{
      for(let i=0;i<resp.data.results.length;i++){
        if(resp.data.results[i].name==username && resp.data.results[i].birth_year==password){
          valid_user=true;
        }
      }
      return valid_user;
  });


}
