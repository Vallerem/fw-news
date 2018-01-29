import jwt from "jsonwebtoken";

export const decodeJWT = () => {
  const userJWT = localStorage.getItem("JWT");
  const userJWTDecoded = jwt.decode(userJWT, { complete: true });

  if (!userJWTDecoded) {
    return false;
  }
  const userPayload = userJWTDecoded.payload;
  return userPayload;
};

// very basic way to verify the JWT
export const verifyJWT = () => {
  if (!localStorage.getItem("JWT")) {
    return false;
  }
  let token = localStorage.getItem("JWT");
  let verified = null;
  // As said in the server.js file the JWT secret shouldn't be exposed like this by any mean and NEVER uploaded to github, bitbucket etc...
  jwt.verify(token, "secret777", (err, decoded) => {
    if (err) {
      return (verified = false);
    }
    verified = true;
  });
  return verified;
};
