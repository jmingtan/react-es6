const React = require('React');
const CommentList = require('./CommentList');
const CommentForm = require('./CommentForm');

const CommentBox = React.createClass({
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        )
    }
});

module.exports = CommentBox;
