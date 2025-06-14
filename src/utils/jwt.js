import  Jwt  from "jsonwebtoken";

export default {
    sign: (payload) => Jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '10m'}),
    signRef: (payload) => Jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '24h'}),
    verify: (token) => Jwt.verify(token, process.env.JWT_SECRET)
}