import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {decreaseCounter} from "../redux/actions/counterAction"

class DecreaseCounter extends Component{
  render(){
    return(
      <div>
        <button onClick={(e)=>{
          this.props.dispatch(decreaseCounter())
        }} style={{fontSize:'24px', width:'64px', marginTop:'8px'}}>-1</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(decreaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseCounter)