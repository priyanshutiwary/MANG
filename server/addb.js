import express from "express";
import pg from "pg";
import env from "dotenv";
import bodyParser from "body-parser"
import cors from 'cors';
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';


const app= express();

app.use(cookieParser());
const addb =
app.post('/api/addb' , async(req,res) => {
    const {businessName, businessDetails} = req.body;
    console.log("reched");
 
    try {
        
        console.log("enterd try");

        await db.query(
            "INSERT INTO business (business_name, business_details) VALUES ($1,$2)",
            [businessName,businessDetails]
        )
        console.log("business added")
        res.status(200).json({success: true, message: "business added"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error"})
        
    }
})

module.exports addb