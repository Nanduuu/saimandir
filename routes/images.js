const express = require('express'),
    router = express.Router();

// get user lists
router.get('/list', function(req, res) {
    let sql = `SELECT * FROM images`;
    console.log("in imagelist")
    req.db.query(sql, function(err, data, fields) {

        res.json({
            status: 200,
            data,
            message: "User lists retrieved successfully"
        })
    })
});

// create new user
router.post('/new', function(req, res) {
    let sql = `INSERT INTO images(name, src) VALUES (?)`;
    let data = [req.body.name, req.body.src];

    req.db.query(sql, [data], function(err, data, fields) {
        if (err) {

            res.json({
                status: 404,
                message: "issue with Database"
            });

        } else {
            res.json({
                status: 200,
                message: "New Image added successfully"
            });
        }

    });
});

router.delete('/delete:id', function(req, res) {
    let sql = `DELETE FROM images where id = ${req.params.id}`;

    console.log(req.params.id)
    req.db.query(sql, function(err, data, fields) {
        if (err) {

        } else {

            res.json({
                status: 200,
                message: "Image deleted successfully"
            });
        }

    })
});

module.exports = router;