const express = require('express'),
    router = express.Router();

// get user lists
router.get('/list', function(req, res) {
    let sql = `SELECT * FROM user`;

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
    let sql = `INSERT INTO user(name, email, ph_number) VALUES (?)`;
    let data = [req.body.name, req.body.email, req.body.ph];
    req.db.query(sql, [data], function(err, data, fields) {
        if (err) {
            console.log(err.sqlMessage);
            res.json({
                status: 404,
                message: "Duplicate Phone Number"
            })
        } else {
            res.json({
                status: 200,
                message: "New user added successfully"
            });
        };

    });
});

module.exports = router;