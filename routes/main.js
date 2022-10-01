const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/about", homeController.getAbout);
router.get("/pricing", homeController.getPricing);
router.get("/services", homeController.getServices);
router.get("/contact", homeController.getContact);

// Stripe Payment Success, Cancel, or Failure
router.get("/success", homeController.getSuccess);
router.get("/cancel", homeController.getCancel);

// more complicated routes
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/adminDashboard", ensureAuth, postsController.getAdminDashboard);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
