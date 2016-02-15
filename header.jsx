var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({

  render: function() {
    return (
      <li onClick={this.props.onClick}>{this.props.title}</li>
    );
  }

});

module.exports = Header;
