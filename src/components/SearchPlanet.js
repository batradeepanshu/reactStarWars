import React, { Component } from "react";
import { get_planets_details, get_font_size } from "../controllers/planets";
import { withRouter } from "react-router-dom";
import {eraseCookie} from '../controllers/cookies';
import "../stylesheet/SearchPlanet.css";

class SearchPlanet extends Component {
  constructor() {
    super();
    this.state = {};
    this.render_planets_names = this.render_planets_names.bind(this);
    this.render_planets_details=this.render_planets_details.bind(this);
    this.fetch_planets_info = this.fetch_planets_info.bind(this);
    this.filter_planets = this.filter_planets.bind(this);
    this.logout=this.logout.bind(this);
    this.go_back=this.go_back.bind(this);
  }
  componentWillMount() {
    if(!this.props.username){
        this.props.history.push('/login');
    }
    this.fetch_planets_info();
  }

  logout(){
    this.props.setUser(null);
    eraseCookie('star_username');
    this.props.history.push('/login');
  }

  fetch_planets_info() {
    get_planets_details().then(resp => {
      this.setState({ planetsInfo: resp });
    });
  }
  filter_planets(input) {
    var filteredPlanets = [];
    for (let i = 0; i < this.state.planetsInfo.length; i++) {
      if (this.state.planetsInfo[i].name.toLowerCase().indexOf(input.toLowerCase()) != -1) {
        filteredPlanets.push(this.state.planetsInfo[i]);
      }
    }
    this.setState({ ...this.state, filteredPlanetsInfo: filteredPlanets });
  }

  render_planets_names() {
    var planetsInfo = this.state.filteredPlanetsInfo || this.state.planetsInfo;
    var self=this;
    return planetsInfo.map((planet, index) => {
      return (
        <div className="planets-name-wrap" key={planet + index}>
          <div className="planet-name" style={{ fontSize: get_font_size(planet.population) }}
            onClick={()=>{this.show_planet_detail(planet)}}>
            {planet.name}
          </div>
        </div>
      );
    });
  }
  render_planets_details(){
    var details_array=[];
    for (var property in this.state.currentPlanet){
      if(typeof(this.state.currentPlanet[property])=='string'){
        details_array.push(
          <div className='planet-detail'>
              <span className='prop'>{property +' : '}</span>
              <span className='value'>{this.state.currentPlanet[property]}</span>
          </div>
        )
      }
    }
    return(<div className='planet-details'>
      <div className='back-button' onClick={this.go_back}>Back</div>
      {details_array}
    </div>);
  }
  go_back(){
    this.setState({...this.state,showdetail:false});
  }

  show_planet_detail(planet){
    this.setState({...this.state,showdetail:true,currentPlanet:planet});
  }

  render() {
    if (this.state.planetsInfo) {
      return (

        <div className="planet-search-wrapper">
          <div className='log-out' onClick={this.logout}>LOGOUT</div>
          {!this.state.showdetail && <input
            type="text"
            placeholder={'Filter Planets'}
            onChange={myInput => {
              this.filter_planets(myInput.target.value);
            }}
          />}

          {(!this.state.showdetail && Boolean(this.state.planetsInfo || this.state.filteredPlanetsInfo))?
            this.render_planets_names():
            this.render_planets_details()}
        </div>
      );
    } else {
      return <div className='planets-loader'>FETCHING PLANETS .......</div>;
    }
  }
}

export default withRouter(SearchPlanet);
