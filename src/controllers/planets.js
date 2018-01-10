import axios from 'axios';
export function get_planets_details(input){
  return axios.get('https://swapi.co/api/planets/').then((resp)=>{
    return resp.data.results;
  });
}

export function get_font_size(population){
  debugger;
  return Number(population.length*.5)+'rem';
}
