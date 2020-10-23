var tables = require("../data/tables");

module.exports = function(app) {
  app.get("/api/waitlist", (req, res) => {
    res.json(tables);
  });

  app.post("/api/tables", (req, res) => {
    var newTable = req.body;
    newTable.routeName = req.body.name.split(" ").join("").toLowerCase();
    tables.push(newTable);
    res.json(newTable);
  });
}