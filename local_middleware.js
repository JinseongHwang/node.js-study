export const mwmw = (req, res, next) => {
    console.log("=====This is Middleware=====");
    next();
}