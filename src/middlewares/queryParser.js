export default (req, res, next) => {
  process.stdout.write(`Query object: ${JSON.stringify(req.query)} \n`)
  next()
}