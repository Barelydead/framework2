var express = require('express');
var router = express.Router();
var db = require("../src/db/db-functions");


/* GET home page. */
router.get('/show', async function(req, res) {

    try {
        let item;
        const beers = await db.getCollection("beer");

        if (req.query.edit_id !== "undefined") {
            const id = req.query.edit_id;
            item = await db.getItem("beer", id)
        }


        // const search = await db.searchItems("beer", req.query.search);
        // console.log(req.query.search)
        // console.log(search);


        res.render('beer', {
            title: 'Beers from a database',
            path: 'db',
            beer: beers,
            item: item
        });
    } catch(e) {
        console.log(e);
    }
});

/* POST insert new document */
router.post('/show', async function(req, res) {
    // get params
    const brand = req.body.brand;
    const type = req.body.type;
    const size = req.body.size;

    await db.insertItem("beer", brand, type, size);
    res.redirect("show");

});


/* GET delete route and redirect */
router.get('/delete', async function(req, res) {
    // get query param
    const id = req.query.id;

    //delete item
    await db.deleteItem("beer", id);

    // redirect to overview
    res.redirect("show");
});

router.post('/edit', async function(req, res) {

    const brand = req.body.brand
    const type = req.body.type
    const size = req.body.size
    const id = req.body.id

    await db.updateItem("beer", id, brand, type, size)

    // redirect to overview
    res.redirect("show");
});


module.exports = router;
