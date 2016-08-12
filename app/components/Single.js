var React = require('react');

var Single = React.createClass({

	render: function(){

		return(
			<div>
				<h3 className="ing-title">{this.props.name}</h3>
				<div className="ingredients">
					{this.props.reciept.map((el,i)=>{
						return <p key={'ing_' + i}> {el} </p>
					})}

					<div >Delete</div>
				</div>
			</div>
		);
	}
});

module.exports = Single;