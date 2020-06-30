const router = require("express").Router();
const qController = require("../../controllers/qController");

router
  .route("/")
  .get(qController.findAll)
  // .post(qController.create);

// Matches with "/api/questions/:id"
// router
//   .route("/:id")
//   .get(qController.findById)
//   .delete(qController.remove);

module.exports = router;