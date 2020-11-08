import routes from "./routes";

const localsMiddleware=(req,res,next)=>{
    res.locals.routes=routes;
    next();
};