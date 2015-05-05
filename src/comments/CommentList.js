const React = require('React');
const Comment = require('./Comment');

const CommentList = React.createClass({
    render() {
        const commentNodes = this.props.data.map((comment) => {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

module.exports = CommentList;