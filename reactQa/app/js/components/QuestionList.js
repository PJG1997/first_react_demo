var React = require("react");
var createReactClass = require('create-react-class');
var QuestionItem = require("./QuestionItem");

module.exports = createReactClass({
    render: function () {
        var questions = this.props.questions;
        var onVote =  this.props.onVote;
        if (!Array.isArray(questions)) throw new Error("this.props.questions必须是数组")
        var questionComps = questions.map(function (qst) {
            return <QuestionItem key={qst.key}
                                 questionKey={qst.key}
                                 title={qst.title}
                                 description={qst.description}
                                 voteCount={qst.voteCount}
                                 onVote={onVote} />
        });
        return (
            <div id="question" className="">
                {questionComps}
            </div>
        )
    }
});