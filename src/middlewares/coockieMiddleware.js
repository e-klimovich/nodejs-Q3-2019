export default (req, res, next) => {
  if (!Boolean(req.cookies.firstCoockie)) {
    res.cookie('firstCoockie', '1', { maxAge: 900000, httpOnly: true });
  }

  process.stdout.write(`coockie: ${JSON.stringify(req.cookies)} \n`)

  next()
}