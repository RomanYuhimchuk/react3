var React = require('react');

var App = React.createClass({
	render: function(){
		let title = this.props.recieptsArr.name,
				ingredients = this.props.recieptsArr.ingridients.split(',');
		return(
			<div>
				<h3>{title}</h3>
				{ingredients.map((el)=>{
					return "<p>"+el+"</p>";
				})}
			</div>
		);
	}
});

module.exports = App;