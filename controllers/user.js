const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.post('/', async function(req, res){
    const user = await User.create(req.body)
    res.status(201).json({data:user})
})

module.exports = router;