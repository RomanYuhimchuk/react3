var React = require('react');



var AddButton = React.createClass({
	addModal: function(){
		$(".add-modal").slideToggle();
	},
	render: function(){
		return(
			<div className='add-reciept' >
				<div className="button" onClick={this.addModal} >add reciept</div>
			</div>
		)
	}
});

module.exports = AddButton;
