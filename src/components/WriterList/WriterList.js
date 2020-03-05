import React, { Component } from "react";
import Writer from "../Writer/Writer";
import "./writerList.scss";
import { writersData } from "../../writersData";

export default class WriterList extends Component {
	state = {
		writers: writersData
	};
	render() {
		const {writers} = this.state;
		// console.log(this.state.writers);
		return (
			<section className="writerList">
				{
					writers.map(writer => 
								    (<Writer 
										key={writer.id} 
										writer={writer}>
									</Writer>)
								)
				}
			</section>
		);
	}
}
