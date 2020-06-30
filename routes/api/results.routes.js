const router = require("express").Router();
const resultsController = require("../../controllers/resultsController");

// Matches with "/api/results"
router
  .route("/")
  .get(resultsController.findAll)
  .post(resultsController.create);

// Matches with "/api/results/:id"
router
  .route("/:userID")
  .get(resultsController.findOneUserId)
  // .get(resultsController.findResultsById)
  // .delete(resultsController.remove);

module.exports = router;