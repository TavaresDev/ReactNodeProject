const { index, featured, show, create, update, destroy, search } = require('../controllers/movies');

module.exports = router => {
    //GET loocalhost:4000/movies
    router.get('/movies', index);
    
    router.get('/movies/featured', featured);

    //POST loocalhost:4000/movies
    router.post('/movies', create);
    
    //POST loocalhost:4000/movies/update
    router.post('/movies/update', update);

    //POST loocalhost:4000/movies/destroy
    router.post('/movies/destroy', destroy);

    router.get('/movies/search', search);

    router.get('/movies/:id', show);


};
