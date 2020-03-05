import React, { Component } from "react";
import './writer.scss';

export default class Writer extends Component {
	state = {
		showInfo: false
	};
	handleInfo = () => {
		this.setState({
			showInfo: !this.state.showInfo
		});
	};
	render() {
		const { id,name,img,country,works,info } = this.props.writer;
		return (
			<article className="writer">
				<div>
          			<h3>{name}</h3>
					<img src={img} alt="writer"/>
				</div>
				<div className="writer-info">
			        <h4>{country}</h4>
			        <h5>
			            info{" "}
				        <span onClick={this.handleInfo}>
				           <i className="fas fa-caret-square-down" />
				        </span>
			        </h5>
			        {this.state.showInfo && <p>{info}</p>}
			        
		        </div>
			</article>
		)
	}
}

