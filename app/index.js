var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

var Index = React.createClass({
  getInitialState: function () {
    return { 
     reciepts : [
      {name : "first reciept",
      ingridients : "meat,vegetables,sugar"},
      {name : "second reciept",
      ingridients : "meat,vegetables"},
      {name : "third reciept",
      ingridients : "meat,vegetables"},
     ]
    }
  },

  // componentDidMount: function() {

  // },

  // componentWillUnmount: function() {

  // },

  render: function () {
    let arr = this.state.reciepts;

  	return(
    <div>

      {arr.map((el,i) => {
            return <App recieptsArr={arr[i]} key={i} />;
      })}

    </div>
  	);
  }
});

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);