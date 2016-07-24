Goals = new Mongo.Collection('goals');

const Schemas = {};

Schemas.Goals = new SimpleSchema({
  goalName: { type: String },
  owner: { type: String },
  createdAt: { type: String },
});
Goals.attachSchema(Schemas.Goals);