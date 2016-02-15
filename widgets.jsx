var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs.jsx');

var tabs = [
  {title: "Home",
  content: "Where the heart is."},

  {title: "Weather",
  content: "75 Degrees"},

  {title: "News",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},

  {title: "Other",
  content: "even more stuff"}
];

var Widgets = React.createClass({
  render: function() {
    return (
      <div>
        Hello World
        <Tabs tabs={tabs} />
      </div>

    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});

module.exports = Widgets;
