function changeObject(req, res, next) {
  req.body = {
    name: "Jacob Nevitt"
  }
  next()
}

module.exports = changeObject