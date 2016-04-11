var LabelTest = React.createClass({

  render: function() {

    return (
        <h1>Another test</h1>
    );

  }

});

alert("Got to here");
ReactDOM.render(<LabelTest/>, document.getElementById('content'));
