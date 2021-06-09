import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {resetCounter} from "../redux/actions/counterAction"

class ResetCounter extends Component{
  render(){
    return(
      <div>
        <button onClick={(e)=>{
          this.props.dispatch(resetCounter())
        }} style={{fontSize:'18px', width:'64px', marginTop:'8px'}}>Sıfırla</button>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(resetCounter,dispatch)}
}

export default connect(mapDispatchToProps)(ResetCounter)