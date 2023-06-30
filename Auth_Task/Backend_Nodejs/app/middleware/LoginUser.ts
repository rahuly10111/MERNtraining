import { Request, Response, NextFunction } from "express";
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

passport.use(new GoogleStrategy({
    clientID: "465093536375-qj2ieu5kih5rk2hbrtiqcgf69f1o9mhq.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "/app/callback"

}, (accessToken, refreshToken, profile, done) => {

    if (!accessToken) {
        return done(null, false, { message: 'Invalid user' });
    }

    // Perform additional token validation here if needed

    // Call next function if the token is valid
    return done(null, { accessToken, refreshToken, profile });
}
));

// console.log(" access Token -->  ", accessToken);
// console.log(" refresh Token --> ", refreshToken);
// console.log(" profile --> ", profile);




function tokenVerify(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('google', (err: any, user: Express.User | undefined, info: { message: any; }) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ message: info.message });
        }

        // Token is valid, proceed to next function
        req.user = user;
        return next();
    })(req, res, next);
}


export { passport, tokenVerify };