export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        console.log('autorizeRole: ',req.user)
        if(!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({message: 'Access Denied!'});
        }

        next();
    }
};