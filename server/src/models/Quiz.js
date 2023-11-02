import mongoose from "mongoose";
const { Schema } = mongoose;

const questionSchema = new Schema({
  id: Number,
  difficulty: String,
  question: String,
  category: String,
  correct_answer: String,
  incorrect_answers: [String],
});

const Question = mongoose.model('Question', questionSchema);