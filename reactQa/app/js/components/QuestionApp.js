var React = require("react");
var ShowAddButton = require("./ShowAddButton");
var QuestionForm = require("./QuestionForm");
var QuestionList = require("./QuestionList");
var createReactClass = require('create-react-class');
var _ = require("lodash");

module.exports = createReactClass({
    getInitialState: function() {
        var questions = [
            {
                key: 1,
                title: "产品经理与程序员矛盾的本质是什么？",
                description: "理性探讨：请勿撕逼，产品经理的主要工作是产品设计，接受来自其他部门的需求，经过设计",
                voteCount: 10,
            },
            {
                key: 2,
                title: "热爱编程是一种怎样的体验？",
                description: "别人对玩游戏感兴趣，我对写代码，看技术文章感兴趣：把泡github、statckoverflow、v2ex",
                voteCount: 8,
            },
        ];
        return {
            questions: questions,
            formDisplayed: false,
        }
    },
    onToggleForm: function() {
        this.setState({
            formDisplayed: !this.state.formDisplayed,
        })
    },
    onNewQuestion:function( newQuestion ) {

        newQuestion.key = this.state.questions.length + 1;

        var newQuestions = this.state.questions.concat( newQuestion );
        newQuestions = this.sortQuestion( newQuestions );
        this.setState({
            questions: newQuestions,
        })
    },
    onVote:function(key, newCount) {
        var questions = _.uniq( this.state.questions );
        var index = _.findIndex( questions, function (qst) {
            return qst.key == key;
        });

        questions[index].voteCount = newCount;
        questions = this.sortQuestion(questions);
        console.log(questions);
        this.setState({
            questions: questions
        })
    },
    sortQuestion:function(questions) {
        questions.sort(function (a, b) {
            return b.voteCount - a.voteCount;
        });
        return questions;
    },
    render: function () {
        return (
            <div>
                <div className="jumbotron text-center">
                    <div className="container">
                        <h1>React 问答</h1>
                        <ShowAddButton onToggleForm={this.onToggleForm} />
                    </div>
                </div>
                <div className="main container">
                    <QuestionForm
                        onNewQuestion={this.onNewQuestion}
                        onToggleForm={this.onToggleForm}
                        formDisplayed={this.state.formDisplayed}/>
                    <QuestionList questions={this.state.questions} onVote={this.onVote}/>
                </div>
            </div>
        )
    }
});