

const userAuthenticate = async() => {
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
        req.token = token;
        req.rootUser = result.rows[0];
        req.userID = user.id;

        next();
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
}
export default userAuthenticate
  

