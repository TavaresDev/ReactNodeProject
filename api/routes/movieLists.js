const { index, show, create, update, destroy, search } = require('../controllers/movieLists');

module.exports = router => {
    //GET loocalhost:4000/movieLists
    router.get('/movieLists', index);

    //POST loocalhost:4000/movieLists
    router.post('/movieLists', create);
    
    //POST loocalhost:4000/movieLists/update
    router.post('/movieLists/update', update);

    //POST loocalhost:4000/movieLists/destroy
    router.post('/movieLists/destroy', destroy);

    router.get('/movieLists/search', search);

    router.get('/movieLists/:id', show);


};
