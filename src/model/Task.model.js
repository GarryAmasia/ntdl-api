import TaskSchema from "./Task.schema.js";

//queries

//insert task
export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

//read task
export const readTask = () => {
  return TaskSchema.find();
};

//delete task
//single
export const deleteTask = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};

//multiple delete
export const deleteMultipleTask = (_ids) => {
  return TaskSchema.deleteMany({ _id: { $in: _ids } });
};
