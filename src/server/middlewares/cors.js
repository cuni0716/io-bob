export default (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', ['*']);
  res.setHeader('Access-Control-Allow-Headers', ['accept', 'Content-Type']);
  return next();
};
