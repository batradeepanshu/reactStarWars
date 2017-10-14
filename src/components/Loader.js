import React,{Component} from 'react';
import '../stylesheet/Loader.css';

class Loader extends Component{
  constructor(){
    super();
    this.state={
      style:{
      wrapperHeight:{
        height:0
        }
      }
    }
  }
    render(){
      let {wrapperHeight}=this.state.style;
      return(
        <div className='loaderWrapper' style={wrapperHeight}>
        <div className="loader">
      <span>{'{'}</span><span>{'}'}</span>
    </div>
    </div>
      );
    }
    componentDidMount(){
      this.state.style.wrapperHeight={height:window.innerHeight};
      this.setState({...this.state});
    }


}
export default Loader;
