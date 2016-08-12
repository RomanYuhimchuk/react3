var React = require('react');

var Single = require('./Single.js');

var App = React.createClass({

	// delete: function(i){
	// 	let newArr = this.props.totalArr.splice(i,1);
	// 	this.props.deleteOnClick(newArr);
	// },

	render: function(){
		let arr = this.props.totalArr,
				rows =[];
				arr.map((el,i)=>{
					rows.push( <Single key={i} name = {el.name} reciept = {el.ingridients.split(',')} recieptIndex = {i} />)
					});
		
		return(
			<div>
				{rows}
			</div>
		);
	}

});

module.exports = App;