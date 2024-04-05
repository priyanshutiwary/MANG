import express from "express";
import pg from "pg";
import env from "dotenv";
import bodyParser from "body-parser"
import cors from 'cors';
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import {sendEmail} from './controllers/sendEmail.js'








const app = express();
let router = express.Router();
let sentOtp={};
let sentEmail={};
app.use(cookieParser());



const port = process.env.PORT || 5001;

app.use(bodyParser.urlencoded({ extended: true}));
env.config();

const dbConfig = {

  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
};

const db = new pg.Client(dbConfig);
const saltRounds=10;

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    process.exit(1); // Exit the process on failure
  } else {
    console.log('Database connected successfully');
  }
});
app.use(cors({
    origin: true, // Replace with specific allowed origins or use whitelist approach
    credentials: true // Enable cookies for proper authentication handling
  }));
app.use(express.json()); // Parse JSON request bodies


// **Register endpoint**
app.post("/api/register", async (req, res) => {

    const { name, username, email, password } = req.body;
  
    try {
      // Check for existing email
      const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
  
      if (checkResult.rows.length > 0) {
        return res.status(400).json({ message: "Email already exists" });
      }
  
      // Hash the password securely before storing
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      console.log(hashedPassword)
      // Insert user into database
      await db.query(
        "INSERT INTO users (email, password,username,name) VALUES ($1, $2, $3, $4)",
              [email,hashedPassword,username,name]
      );
      console.log("data inserted")
       
      res.status(200).json({ success: true, message: "Registration successful" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
// login route


  app.post("/api/login", async (req, res) => {
    const {email, password}= req.body
  
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
      const user =result.rows[0]
      console.log("Reached flag1 ");
      
      if (result.rows.length > 0  && await bcrypt.compare(password, user.password  ) ){//)
        // const userData = result.rows[0];
        
        // const pass = result.rows[0].password
        // console.log(pass);
        console.log(('reachef flag2'))
        // const username =result.rows[0].username;
        // const name = result.rows[0].name;
        const token = generateJwtToken({ id: user.id, email: user.email, username: user.username });
        res.cookie("jwttoken", token, {
            expires: new Date(Date.now()+ 25892000000),
            httpOnly:true
        })
        res.status(200).json({ success: true,token});
        
        
        
      } else {
        res.status(404).json({message:'User not found'});
      }
    } catch (err) {
      console.log(err);
      
      res.status(500).json({ message: 'Internal server error' });


    }
  });

// login using google




  app.post("/api/logout", async (req, res) => {
    try {
      // No action needed on the server-side to invalidate sessions (explained below)
      res.clearCookie("jwttoken"); // Clear the JWT token cookie
      res.status(200).json({ message: "Successfully logged out" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

  app.post('/api/addb' , async(req,res) => {
    const {businessName, businessDetails, ownerUuid} = req.body;
    console.log("reched");

    try {
        
        console.log("enterd try");

        await db.query(
            "INSERT INTO business (business_name, business_details, owner_uuid) VALUES ($1,$2,$3)",
            [businessName,businessDetails,ownerUuid]
        )
        console.log("business added")
        res.status(200).json({success: true, message: "business added"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error"})
        
    }
})

app.post('/api/adde' , async(req,res) => {
  const {employeeName, employeeAge, employeeSalary, employeeSalaryType, businessUuid, employerUuid} = req.body;
  console.log(employeeName);
  

  try {
      
      
      console.log(employerUuid);
      console.log(businessUuid);
      await db.query(
          "INSERT INTO b_employees (employee_name, employee_age, salary_amount, salary_type, employer_uuid, business_uuid ) VALUES ($1,$2,$3,$4,$5,$6)",
          [employeeName,employeeAge,employeeSalary,employeeSalaryType,employerUuid,businessUuid]
      )
      console.log("business added")
      res.status(200).json({success: true, message: "business added"})
      
  } catch (error) {
      console.log(error);
      res.status(500).json({message:"internal server error"})
      
  }
})

app.post('/api/send_recovery_email', async (req, res) => {
  const {recipient_email} = req.body;
  const OTP = Math.floor(Math.random() * 1000000 + 1000);


  try {
    const result = await db.query(
      `SELECT COUNT(*) AS email_exists FROM users WHERE email = $1`,
      [recipient_email]
    );

    if (result.rows.length > 0 && result.rows[0].email_exists > 0) {
      await sendEmail({recipient_email, OTP});
      sentOtp = OTP;
      sentEmail = recipient_email
      console.log(sentOtp)
      console.log(sentEmail)      
      res.status(200).json({ success: true, message: 'Recovery email sent successfully.' });
    } else {
      res.status(404).json({ success: false, message: 'Email not found in the database.' });
    }
  } catch (error) {
    console.error('Error occurred while sending recovery email:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});
app.post('/api/verify_otp', async(req, res) =>{
  const {otp} = req.body; // Include recipient_email in the request body
  console.log(otp);
  try {
    console.log("entered");
    console.log(sentOtp);

    if (sentOtp == otp) {
      res.status(200).json({ success: true, message: 'OTP verified successfully.' });
      

      sentOtp=0; // Delete OTP after successful verification
    } else {
      res.status(400).json({ success: false, message: 'Invalid OTP.' });
    }
  } catch (error) {
    console.log(error);
  }
});
app.post ('/api/resetpass', async(req,res) => {
   const {newPassword} = req.body;
   console.log(newPassword);
   try{
   const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
   console.log(hashedPassword)
   console.log(sentEmail)
   var email=sentEmail
   const result = await db.query(
    "UPDATE users SET password = $1 WHERE email = $2",
    [hashedPassword, email]
  );

  if (result.rowCount > 0) {
    res.status(200).json({ success: true, message: 'Password reset successful.' });
  } else {
    res.status(404).json({ success: false, message: 'User not found.' });
  }

    
   } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: 'internal server error'})
    
   }
   
   
   
})








const userAuthenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwttoken;
        
        if (!token) {
            return res.status(401).send('Unauthorized: No token provided');
        }
        const decodedToken=jwt.verify(token, process.env.JWT_SECRET)
        const userId = decodedToken.id;

        // Query the database to find the user based on the token
        const result = await db.query("SELECT * FROM users WHERE id = $1", [userId]);

        if (result.rows.length === 0) {
            return res.status(401).send('Unauthorized: Invalid token');
        }
        
        const user = result.rows[0];
        // console.log(user.uuid);
        req.token = token;
        req.rootUser = result.rows[0];
        req.userID = user.id;

        next();
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
}




const aboutBusiness = async (req, res, next) => {
  try {
      const token = req.cookies.jwttoken;
      
      if (!token) {
          return res.status(401).send('Unauthorized: No token provided');
      }

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decodedToken.id;

      // Query the database to find the user based on the token
      const userResult = await db.query("SELECT * FROM users WHERE id = $1", [userId]);

      if (userResult.rows.length === 0) {
          return res.status(401).send('Unauthorized: Invalid token');
      }

      const user = userResult.rows[0];
      // console.log(user);
      const user_uuid = user.uuid;
      // console.log(user_uuid);
      

      const businessResult = await db.query("SELECT * FROM business WHERE owner_uuid = $1", [user_uuid]);
      // console.log(businessResult);
      // console.log(businessResult.rows.length);
      if (businessResult.rows.length === 0) {
          return res.status(404).send('Business information not found');
      }

      const business = businessResult.rows;
      // console.log(business);
      req.business = business; // Attach business information to the request object for subsequent middleware/routes
      next();
  } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
  }
}

const aboutEmployee = async (req, res, next) => {
  try {
      const token = req.cookies.jwttoken;
      
      if (!token) {
          return res.status(401).send('Unauthorized: No token provided');
      }

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decodedToken.id;

      // Query the database to find the user based on the token
      const userResult = await db.query("SELECT * FROM users WHERE id = $1", [userId]);

      if (userResult.rows.length === 0) {
          return res.status(401).send('Unauthorized: Invalid token');
      }

      const user = userResult.rows[0];
      const user_uuid = user.uuid;
    

      const businessResult = await db.query("SELECT * FROM business WHERE owner_uuid = $1", [user_uuid]);
      
      // if (businessResult.rows.length === 0) {
      //     return res.status(401).send('Business information not found');
      // }
      
      // const business_uuid = (businessResult.rows[0]).uuid
      
      const employeeResult = await db.query("SELECT * FROM b_employees WHERE employer_uuid = $1", [user_uuid])
      
      if (employeeResult.rows.length === 0) {
        return res.status(401).send('employees information not found');
      }
      
      const employee = employeeResult.rows;
      req.employee = employee; 
      next();
  } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
  }
}

//about us ka page

app.get('/api/aboutUser',userAuthenticate,(req,res) =>{
    res.send(req.rootUser)
})


//business get ks page 
app.get('/api/aboutBusiness',aboutBusiness,(req,res) =>{
    
  res.send(req.business)
})

//employee get ka page
app.get('/api/aboutEmployee', aboutEmployee,(req,res)=>{
  res.send(req.employee)
}
)




function generateJwtToken(userData) {
    // Implement token generation using jsonwebtoken library
    // Consider using environment variables for secret key and expiration time
    const secretKey = process.env.JWT_SECRET; // Store secret key securely
    const expiresIn = "1h"; // Adjust expiration time as needed
  
    return jsonwebtoken.sign(userData, secretKey)

}


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});



