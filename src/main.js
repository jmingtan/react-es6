var React = require('React');
var CommentBox = require('./comments/CommentBox');

const data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

React.render(
    <CommentBox data={data} />,
    document.getElementById('app')
);