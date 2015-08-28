(function(React, module, undefined) {
  var Songs = require('./Songs.jsx'),
      SongForm = require('./SongForm.jsx'),
      SongAlert = require('./SongAlert.jsx');
  
  module.exports = React.createClass({
    render: function() {
      var alert;
      if (!this.props.songs || this.props.songs.length === 0) {
        alert = <SongAlert />;
      }
      return (
        <div className="container">
          <div className="page-header">
            <h1>Welcome! <small>Add your favorite artist!</small></h1>
          </div>
          
          {alert}
          <Songs data={this.props.songs} />
          <SongForm />
        </div>
      );
    }
  });
}(React, module));
