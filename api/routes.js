module.exports = router => {
  require('./routes/users')(router);
  require('./routes/sessions')(router);
  require('./routes/movies')(router);
  require('./routes/movieLists')(router);

  return router;
};
