import express from 'express'
import cors from 'cors'

const router = express.Router()

router.post('/auth/adminlogin', (req,res) => {
    console.log(req.body)
})