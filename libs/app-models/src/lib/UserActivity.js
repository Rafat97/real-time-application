import mongoose, { Schema } from 'mongoose';
import { updateUserInfo, UserModelRef } from './User';

const UserActivitySchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: UserModelRef, require: true },
  },
  { timestamps: true, strict: false }
);
UserActivitySchema.index({ '$**': 'text' });
UserActivitySchema.index({ createdAt: 1 });
UserActivitySchema.index({ updatedAt: 1 });
export const UserActivityModel = mongoose.model(
  'UserActivity',
  UserActivitySchema
);

export const createUserActivate = async (message) => {
  try {
    let doc = await UserActivityModel.create(message);
    console.log(doc);
    let updateUser = await updateUserInfo(message.user, {
      lastActive: message.requestTime,
    });
    console.log(updateUser);
  } catch (error) {
    console.log('-----------------createUser------------');
    console.log(error);
    console.log('-----------------createUser------------');
  }
};