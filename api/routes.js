module.exports = router => {
  require('./routes/users')(router);
  require('./routes/sessions')(router);
  require('./routes/movies')(router);

  return router;
};