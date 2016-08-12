var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App.js');

var Index = React.createClass({
  getInitialState: function () {
    return { 
     reciepts : []
    }
  },

  // componentDidMount: function() {

  // },

   componentWillMount: function() {
      this.setState({
        reciepts : this.props.initialData
      })
   },
  // deleteReciept : function(newArr){
  //      this.setState({
  //         reciepts: newArr
  //     });
  // },
  render: function () {
    return(
    <div>
        return <App totalArr={this.state.reciepts} deleteOnClick={this.deleteReciept}/>;
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