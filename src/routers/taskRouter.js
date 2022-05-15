import express from "express";
import {
  insertTask,
  readTask,
  deleteTask,
  deleteMultipleTask,
} from "../model/Task.model.js";

const router = express.Router();

router.get(`/`, async (req, res) => {
  const result = await readTask();
  res.json({
    message: "You have reached task endpoint - get",
    result,
  });
});

router.post(`/`, async (req, res) => {
  console.log(req.body);

  const result = await insertTask(req.body);
  console.log(result);
  res.json({
    message: "You have reached task endpoint - post",
  });
});

router.patch(`/`, (req, res) => {
  res.json({
    message: "You have reached task endpoint - patch",
  });
});

router.delete(`/`, async (req, res) => {
  const { ids } = req.body;
  // console.log(req.params);

  const result = await deleteMultipleTask(ids);
  console.log(result);
  res.json({
    message: "You have reached task endpoint - delete",
    result,
  });
});

export default router;
