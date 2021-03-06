const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100
    },
    text: {
      type: String,
      required: true,
      minlength: 20,
      maxlength: 2000
    },
    author_id: {
      type: String,
      require: true
    },
    author_name: {
      type: String,
      require: true
    }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
  { collection: 'articles' }
);

mongoose.model('Article', ArticleSchema);

module.exports = mongoose.model('Article');
