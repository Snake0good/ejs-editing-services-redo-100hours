module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getAbout: (req, res) => {
    res.render("about.ejs")
  },
  getServices: (req, res) => {
    res.render("services.ejs")
  },
  getPricing: (req, res) => {
    res.render("pricing.ejs")
  }
};
