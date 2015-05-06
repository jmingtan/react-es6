var React = require('React');
var CommentBox = require('./comments/CommentBox');

React.render(
    <CommentBox url="comments.json" pollInterval={2000} />,
    document.getElementById('app')
);