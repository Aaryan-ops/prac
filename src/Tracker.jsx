import React from 'react'
import Append_aRowAfterTimeout from './Append_aRowAfterTimeout';
const issues=[{id:1,status:'Open',owner:'Ravan',created: new Date('2017-08-13'),effort:5,completionDate:undefined,title:'Error in console when clicking add'},{id:2,status:'Assigned',owner:'Eddie',created: new Date('2012-11-23'),effort:12,completionDate:new Date('4-09-2'),title:'Missing border on panel'},{id:3,status:'Open',owner:'Radha',created: new Date('2007-01-13'),effort:15,completionDate:undefined,title:'Error in console when dancing'},{id:4,status:'Assigned',owner:'gujjar',created: new Date('2017-08-1'),effort:2,completionDate:new Date('2020-02-2'),title:'Unable to understand ui'},{id:5,status:'Closed',owner:'Ram',created: new Date('2019-03-1'),effort:25,completionDate:new Date('2020-02-03'),title:'Error in console when dancing'}];


class Row extends React.Component{
  render(){
    const g=this.props.issue;
    return(<tr>
      <td>{g.id}</td>
      <td>{g.status}</td>
      <td>{g.owner}</td>
      <td>{g.created.toDateString()}</td>
      <td>{g.effort}</td>
      <td>{g.completionDate?g.completionDate.toDateString():"undefined..."}</td>
      <td>{g.title}</td>
    </tr>);
  }
}

class Table extends React.Component{

  render(){const x=this.props.issues.map(v=><Row key={v.id} issue={v} />);
  return(<table className="table">

    <thead>
      <tr>
        <th>Id</th>
        <th>Status</th>
        <th>Owner</th>
        <th>Created</th>
        <th>Effort</th>
        <th>Completion Date</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>{x}</tbody>
  </table>);
}
}
function Tracker() {

  return (
    <div>
      <hr />
      <Table issues={issues} />
      <hr />
      <h3>oyeeeye</h3>
      <Append_aRowAfterTimeout issues={issues} />
    </div>
  )
}

export default Tracker
