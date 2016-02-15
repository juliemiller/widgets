var React = require('react');



var AutoComplete = React.createClass({
  getInitialState: function() {
    return { search: "" };
  },

  updateSearchString: function(e) {
    e.preventDefault();
    this.setState({search: e.target.value});
  },

  nameClick: function(name) {
    this.setState({ search: name});
  },

  render: function() {
    var regEx = new RegExp(this.state.search.toLowerCase());
    var self = this;
    return (
      <section>
        <input id="search" type="text" onInput={this.updateSearchString} value={this.state.search}></input>
        <ul>
          {
            this.props.names.map(function (name, idx) {
              if (regEx.test(name.toLowerCase())) {
                return <li onClick={self.nameClick.bind(self, name)} key={idx}>{name}</li>;
              }
            })
          }
        </ul>

      </section>
    );
  }

});

module.exports = AutoComplete;
