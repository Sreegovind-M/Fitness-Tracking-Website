const express = require("express");

const router1 = express.Router();

router.get("/s23", (req, res) => {
    res.send("<h1>s23</h1>");
});

router.get("/s22", (req, res) => {
    res.send("<h1>s22</h1>");
});

router.get("/s21", (req, res) => {
    res.send("<h1>s21</h1>");
});

const router2 = express.Router();

module.exports = router1;
