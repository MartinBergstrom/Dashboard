const express = require("express");
const router = express.Router();
const authenticateToken = require('../middleware');
const UrlCard = require("../../models/urlCard");

// @route GET api/urlCard/test
// @description tests urlCard route
// @access Public
router.get("/test", authenticateToken, (req, res) => res.send("url card route testing!"));

// @route GET api/urlCards
// @description Get all urlCards
// @access Public
router.get("/", authenticateToken, (req, res) => {
  UrlCard.find()
    .then((urlCards) => res.json(urlCards))
    .catch((err) =>
      res.status(404).json({ nourlcardsfound: "No urlCards found" })
    );
});

// @route GET api/urlCards/:id
// @description Get single urlCard by id
// @access Public
router.get("/:id", authenticateToken, (req, res) => {
  UrlCard.findById(req.params.id)
    .then((urlCard) => res.json(urlCard))
    .catch((err) =>
      res.status(404).json({ nourlcardfound: "No UrlCard found" })
    );
});

// @route GET api/urlCards
// @description add/save urlCard
// @access Public
router.post("/", authenticateToken, (req, res) => {
  UrlCard.create(req.body)
    .then((urlCard) => res.json({ msg: "UrlCard added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this UrlCard" })
    );
});

// @route GET api/urlCards/:id
// @description Update urlCard
// @access Public
router.put("/:id", authenticateToken, (req, res) => {
  UrlCard.findByIdAndUpdate(req.params.id, req.body)
    .then((urlCard) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/urlCards/:id
// @description Delete urlCard by id
// @access Public
router.delete("/:id", authenticateToken, (req, res) => {
  UrlCard.findByIdAndRemove(req.params.id, req.body)
    .then((urlCard) => res.json({ mgs: "UrlCard entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such UrlCard" }));
});

module.exports = router;
