const express = require('express');
const md5 = require('md5-nodejs');
router = express.Router();

// get user lists

router.post('/login', function(req, res) {
    let sql = `SELECT * FROM account`;
    req.db.query(sql, function(err, data, fields) {
        if (err) throw err;
        var pass = md5(req.body.password);
        console.log(pass);

        if (data[0].email == req.body.email && data[0].password == pass) {


            res.json({
                status: 200,
                data: data[0],
                message: "User login details"
            });
        } else {
            res.json({
                status: 404,
                message: "User login details are wrong"
            })
        }

    });
});

module.exports = router;