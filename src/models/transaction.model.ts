import { Schema, model, Document, Types } from 'mongoose';

export interface ITransaction extends Document {
  account: Types.ObjectId;
  user: Types.ObjectId;
  type: 'deposit' | 'withdraw';
  amount: number;
  createdAt: Date;
}

const transactionSchema = new Schema<ITransaction>(
  {
    account: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['deposit', 'withdraw'], required: true },
    amount: { type: Number, required: true }
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const Transaction = model<ITransaction>('Transaction', transactionSchema);