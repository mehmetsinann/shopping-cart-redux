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
        }}>sıfırla</button>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(resetCounter,dispatch)}
}

export default connect(mapDispatchToProps)(ResetCounter)