export default (mongoose) => {
  const gradesSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    lastmModified: {
      type: Date,
      required: true,
      default: Date.now,
    },
  });

  const Grades = mongoose.model('grades', gradesSchema, 'grades');
  return Grades;
};
