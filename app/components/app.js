var React = require('react');

var Single = require('./Single.js');
var AddButton = require('./addButton.js');
var Modal = require('./modal.js');

var App = React.createClass({

	delete: function(i){
		let newArr = this.props.totalArr;
			newArr.splice(i,1);
		this.props.modifyOnClick(newArr);
	},
	addReciept: function(newName,newIngridients){
		let newArr = this.props.totalArr;
		newArr.push({
			name : newName,
      		ingridients : newIngridients
		});
		this.props.modifyOnClick(newArr);
	},
	editReciept: function(i,newName,newIngridients){
		let newArr = this.props.totalArr;
		newArr[i]['name'] = newName;
		newArr[i]['ingridients'] = newIngridients;
		this.props.modifyOnClick(newArr);
	},
	render: function(){
		let arr = this.props.totalArr,
				rows =[];
				arr.map((el,i)=>{
					rows.push( 
						<div key={"single_"+i}>
							<Single onClickDel={this.delete} key={"single1_"+i} name = {el.name} reciept = {el.ingridients.split(',')} recieptIndex = {i} />
							<Modal addOnClick = {this.editReciept} key={"modal_"+i} name = {el.name} reciept = {el.ingridients} recieptIndex = {i} /> 
						</div>
						)
					});
		
		return(
			<div>
				{rows}
				<AddButton />
				<Modal addOnClick={this.addReciept} />
			</div>
		);
	}

});

module.exports = App;