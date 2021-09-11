


import React from 'react'
class Cxx extends React.Component{
  constructor(){super();this.state={mew:this.props.issues};
  setTimeout(this.fx.bind(this),3500);
}
fx(){
  const y=this.state.mew.slice();
  y.push({id:this.state.mew.length+1,status:'New',owner:'dikki',created: new Date('2012-02-23'),effort:52,completionDate:undefined,title:'Hello World'});
  this.setState({mew:y});
}
render(){
  return(

    <div>
      <h1>Hi new</h1>
      <Cxx issues={this.props.issues} />
    </div>
  );
}
}



function Append_aRowAfterTimeout() {
  return (
    <div>
      
    </div>
  )
}

export default Append_aRowAfterTimeout
