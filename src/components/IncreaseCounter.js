import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {increaseCounter} from "../redux/actions/counterAction"

class IncreaseCounter extends Component{
  render(){
    return(
      <div>
        <button onClick={(e)=>{
          this.props.dispatch(increaseCounter())
        }} style={{fontSize:'24px', width:'64px'}}>+1</button>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(increaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounter)