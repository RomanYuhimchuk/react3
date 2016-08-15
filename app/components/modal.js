var React = require('react');

	

var Modal = React.createClass({

	handleChange: function(event){
		event.target.setAttribute("text", event.target.value)
	},

	addRecieptValues: function(){
		let	input = ".name."+ this.props.recieptIndex,
			textarea = ".ingridients." + this.props.recieptIndex,
			name = $(input).attr('text') ? $(input).attr('text') : this.props.name,
			ing = $(textarea).attr('text') ? $(textarea).attr('text') : this.props.reciept;

			console.log(name , ing);
		if(this.props.recieptIndex >= 0){
			this.props.addOnClick(this.props.recieptIndex, name,ing);
		} else {
			this.props.addOnClick(name,ing);
		}
	},

	render: function(){

		let namePlaceholder = this.props.name ? "" : "please enter reciept name",
				recieptPlaceholder = this.props.reciept ? "" : "please enter comma separated ingridients",
				defaultName = this.props.name ? this.props.name : "",
				defaultReciept = this.props.reciept ? this.props.reciept : "",
				modalClass = this.props.recieptIndex >= 0 ? 'modal'+this.props.recieptIndex : 'add-modal';
				
		return(
			<div className={"modal " + modalClass}>
				<p>Name
					<input 
						onChange={this.handleChange}  
						className={'name ' + this.props.recieptIndex}  
						placeholder = {namePlaceholder}
						defaultValue = {defaultName}
					/>
				</p>
				<p>Ingridients
					<textarea 
						onChange={this.handleChange} 
						className={'ingridients ' + this.props.recieptIndex} 
						placeholder = {recieptPlaceholder}
						defaultValue = {defaultReciept}
					/>
				</p>
				<div className="add-submit button" onClick={this.addRecieptValues}>submit reciept</div>
			</div>
		)
	}
});

module.exports = Modal;
