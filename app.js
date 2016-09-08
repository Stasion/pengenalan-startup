var couchapp = require('couchapp'),
    path = require('path');

ddoc = {
  _id: '_design/fdmos01-ongischool-frontend-course-batch-1',
  rewrites: [{
    from: '',
    to: '/index.html'
  },{
    from: '*',
    to: '/*'
  }],
  views: {},
  lists: {},
  shows: {}
};

couchapp.loadAttachments(ddoc, path.join(__dirname, 'dist'));

module.exports = ddoc;