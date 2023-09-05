
// In js you save function inside a variable
let mwfn1 = (req,res,next)=>{
    console.log(req.body);
    req.body.name = req.body.name.toUpperCase()
    next()
}
// There are two types of export in nodejs

// 1. Default Export
// 2. Named Export
        // object.property
        // module.exports = {}
module.exports={mwfn1}
