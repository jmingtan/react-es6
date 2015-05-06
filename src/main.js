var React = require('React');
var CommentBox = require('./comments/CommentBox');

React.render(
    <CommentBox url="comments.json" />,
    document.getElementById('app')
);