var React = require("react");
var ReactDOM = require("react-dom");
var createReactClass = require('create-react-class');

module.exports = createReactClass({

    handleForm:function(e) {
        e.preventDefault();
        if(!ReactDOM.findDOMNode(this.refs.title).value) return;
        var newQuestion = {
            title: ReactDOM.findDOMNode(this.refs.title).value,
            description: ReactDOM.findDOMNode(this.refs.description).value,
            voteCount: 0,
        };

        ReactDOM.findDOMNode(this.refs.addQuestionForm).reset();
        this.props.onNewQuestion(newQuestion)

    },

    render: function () {

        var styleObj = {
            display: this.props.formDisplayed? "block":"none",
        };
        return (
            <form ref="addQuestionForm" style={ styleObj } name="addQuestion" className="clearfix" onSubmit={this.handleForm}>
                <div className="form-group">
                    <label htmlFor="qtitle">问题</label>
                    <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题是什么？" />
                </div>
                <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
                <button className="btn btn-success pull-right">确认</button>
                <a className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</a>
            </form>
        )
    }
});