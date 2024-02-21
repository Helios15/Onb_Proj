import mongoose from 'mongoose';

export const User = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  name: { type: String, required: true },
  age: { type: Number },
  isDeleted: { type: Boolean, default: false },
});

export interface User extends mongoose.Document {
  id: string;
  name: string;
  age: number;
  isDeleted: boolean;
}
