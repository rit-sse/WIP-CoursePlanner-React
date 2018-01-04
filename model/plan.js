var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Plan', {
  title : {
    type: String,
    required: true
  },
  details : {
    type: String
  },
  years  : {
    type: Object,
  },
  colorScheme  : {
    type: Object,
  },
  public: {
    type: Boolean,
  },
});
