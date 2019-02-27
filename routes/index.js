const express=require("express");
const router=express.Router();
const pool=require("../pool");

//http://localhost:3000/index
router.get("/",(req,res)=>{
    var sql=`SELECT * FROM mgimg`;
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    })
})
module.exports=router;