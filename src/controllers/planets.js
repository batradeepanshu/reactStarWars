import axios from 'axios';
export function get_planets_details(input,page){
  return axios.get('https://swapi.co/api/planets/',{params:{
    search:input,
    page
  }}).then((resp)=>{
    return resp.data.results;
  });
}


export function get_font_size(population){
  debugger;
  return Number(population.length*.5)+'rem';
}
