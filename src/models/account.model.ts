import { Schema, model, Document, Types } from 'mongoose';

export interface IAccount extends Document {
  user: Types.ObjectId;
  name: string;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
}

const accountSchema = new Schema<IAccount>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    balance: { type: Number, required: true, default: 0 }
  },
  { timestamps: true }
);

export const Account = model<IAccount>('Account', accountSchema);
