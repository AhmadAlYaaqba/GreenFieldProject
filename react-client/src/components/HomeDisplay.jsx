import React from 'react';
import { Button, FormControl, Row, Col, ButtonToolbar } from 'react-bootstrap';
class HomeDisplay extends React.Component {
  constructor(props) {
  	console.log(props.item.to)
    super(props);
  }


 
render() {
	let phonNum=0;
	if(this.props.item.userInfo.length>0){
		 phonNum=this.props.item.userInfo[0].phoneNumber;
	}
	console.log(this.props.item)
	
  return (
  	<div>
  	<div id ='postDiv' className="jobsDiv container"><br />
  		<Row>
			<Col md={4}>
			<span><b>Name : </b></span>
			<span>{this.props.item.user}</span>
			</Col>
			<Col md={4}>
			<span><b>Job Title : </b></span>
			<span>{this.props.item.jobTitle}</span>
			</Col>
			<Col md={4}>
			<span><b>Job Category : </b></span>
			<span>{this.props.item.category}</span>
			</Col>
		</Row><br />
		
        <Row>
            <Col md={4}>
            <span><b>From : </b></span>
			<span>{this.props.item.from}</span>
			</Col>
			<Col md={4}>
			<span><b>To : </b></span>
			<span>{this.props.item.to}</span>
			</Col>
			<Col md={4}>
			<span><b>Phone Number : </b></span>
			<span>{phonNum}</span>
			</Col>	
		</Row><br />

		<Row>
		<Col md={1}>
		</Col>
		<Col id="description" md={4}>
			<span><b>Description : </b></span>
			<span>{this.props.item.jobDescription}</span>
			</Col>
		<Col md={3}>
		</Col>
		<Col md={4}>
			<span><b>Location : </b></span>
			<span>{this.props.item.location}</span>
		</Col>
		</Row><br />

		 <Row>
		 <Col md={8}>
			</Col>
		 <Col id='postTime' md={4}>
			<span><b>Posted at : </b></span>
			<span>{this.props.item.created_at.slice(0, 10)}</span>
			</Col>
		 </Row>
    </div><br />
    </div>
    )
  }
}
export default HomeDisplay;
