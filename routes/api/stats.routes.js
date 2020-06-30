const router = require("express").Router();
const statsController = require("../../controllers/statsController");

// Matches with "/api/stats"
router
  .route("/")
  .get(statsController.findAll)
  .post(statsController.create);

// Matches with "/api/stats/:id"
router
  .route("/:stats")
  .get(statsController.findOneUserId)
  // .get(statsController.findResultsById)
  // .delete(statsController.remove);

module.exports = router;