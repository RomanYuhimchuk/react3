var React = require('react');

var Single = React.createClass({
	ingSlide: function(i){
		let ind = '.ing'+ i;

			$(ind).slideToggle();
	},

	editModal: function(i){
			let modalClass = ".modal" + i;
					console.log(modalClass);
			$(modalClass).slideToggle();
	},

	render: function(){
 		
		return(
			<div className="single">
				<h3 
					onClick={()=>{this.ingSlide(this.props.recieptIndex)}} 
					className="single__title">
					{this.props.name}
				</h3>
				<div className={'single__ingridients ing' + this.props.recieptIndex }>
					{this.props.reciept.map((el,i)=>{
						return <p key={'ing_' + i}> {el} </p>
					})}
					<div className="single__buttons">
						<div onClick={()=>{this.props.onClickDel(this.props.recieptIndex)}} className="button">Delete</div>
						<div onClick={()=>{this.editModal(this.props.recieptIndex)}} className="edit button"  >edit reciept</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Single;