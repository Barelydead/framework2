var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('', {
        title: 'Ramverk 2',
        path: 'home'
    });
});

/* GET about page. */
router.get('/about', function(req, res) {
    res.render('about', {
        title: 'about',
        path: 'about'
    });
});


/* GET about page. */
router.get('/presentation', function(req, res) {
    res.render('presentations', {
        title: 'presentation',
        path: 'presentation'
    });
});

module.exports = router;
