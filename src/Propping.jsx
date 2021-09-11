import React from 'react'


class Mx extends React.Component{
  render(){

    return <section style={{backgroundColor:'violet',opacity:'0.6'}}>{this.props.children}</section >;
  }
}
class Cx extends React.Component{
  render(){
    return (<Mx ><img src={this.props.src} alt="lightening round" /></Mx>);
  }
}


function Propping() {
  return (
    <div>
      <Cx src="https://i.pinimg.com/originals/83/f9/3a/83f93a4d45dd6494b48d4977f52fe9fe.gif" />
      <Cx src="https://66.media.tumblr.com/d659ac31e148c6ec4ce4726db70837ad/tumblr_nq1hr1AuM41tah9pwo1_1280.gif" />
      <Cx src="https://i.pinimg.com/originals/47/5f/e3/475fe3f8040a58288122f811d2657e99.gif" />
    </div>
  )
}




export default Propping
