import express from "express";

const router = express.Router();

router.get(`/`, (req, res) => {
  res.json({
    message: "You have reached task endpoint - get",
  });
});

router.post(`/`, (req, res) => {
  res.json({
    message: "You have reached task endpoint - post",
  });
});

router.patch(`/`, (req, res) => {
  res.json({
    message: "You have reached task endpoint - patch",
  });
});

router.delete(`/`, (req, res) => {
  res.json({
    message: "You have reached task endpoint - delete",
  });
});

export default router;
