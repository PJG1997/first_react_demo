var React = require("react");
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render: function () {
        return(
            <button id="add-question-btn" onClick={this.props.onToggleForm} className="btn btn-success">添加问题</button>
        )
    }
});