import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const isCustomAuth = token.lenght < 500;

		let decodedData;

		if (token && isCustomAuth) {
			decodedData = jwt.verify(token, process.env.JWT_SECRET);

			req.userId = decodedData?.id;
		} else {
            decodedData = jwt.decode(token);
            
            req.userId = decodedData?.sub;
        }
        
        next();
	} catch (err) {
		res.status(401).send({ message: "Auth failed" });
	}
};

export default auth;