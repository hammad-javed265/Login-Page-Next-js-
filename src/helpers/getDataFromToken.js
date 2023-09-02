//jsonwebtoken library, which is used to decode JWTs
import jwt from 'jsonwebtoken';

export const getDataFromToken = (req) => {           //req object as a parameter
    try {
        console.log("came 1");
        const token = req.cookies.get("token")?.value || '';   // This line of code tries to access the "value" property of the "token" cookie if it exists, otherwise, it sets an empty string as the default value.
        console.log("came 2", token);
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET); //attempts to decode the JWT using jwt.verify(token, process.env.TOKEN_SECRET)
        
        // it also has username and email in decoded token because we set these at the login time
        return decodedToken.id;
    } catch (error) {
        throw new Error("ali1"+error.message);
    }
}
