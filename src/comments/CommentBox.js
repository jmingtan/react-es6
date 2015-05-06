const React = require('React');
const $ = require('jquery');
const CommentList = require('./CommentList');
const CommentForm = require('./CommentForm');

const CommentBox = React.createClass({
    loadCommentsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: (data) => {
                this.setState({data: data});
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    },
    getInitialState() {
        return {data: []};
    },
    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        )
    }
});

module.exports = CommentBox;
