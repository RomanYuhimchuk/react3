var React = require('react');
var ReactDOM = require('react-dom');
require('./styles.scss');
var App = require('./components/app.js');

var Index = React.createClass({

  getInitialState: function () {
     return { 
        reciepts : [],
     }
  },

  componentWillMount: function() {
    
      if (localStorage.getItem('_list_reciept')){
        this.setState({
          reciepts : JSON.parse(localStorage.getItem('_list_reciept'))
        });
      } else {
        this.setState({
          reciepts : this.props.initialData
        })  
      }
  },

  componentDidUpdate: function(){
    localStorage.setItem('_list_reciept', JSON.stringify(this.state.reciepts));
  },

  modifyReciepts : function(arr){
      this.setState({
         reciepts: arr
      });
  },
  render: function () {
    return(
    <div>
        <App totalArr={this.state.reciepts} modifyOnClick={this.modifyReciepts}/>
    </div>
  	);
  }
});
var data = [
      {name : "first reciept",
      ingridients : "meat,vegetables,sugar"},
      {name : "second reciept",
      ingridients : "meat,vegetables"},
      {name : "third reciept",
      ingridients : "meat,vegetables"},
     ];
ReactDOM.render(
  <Index initialData={data} />,
  document.getElementById('app')
);