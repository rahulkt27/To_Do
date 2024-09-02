const {Router} = require("express")

const ToDoModel = require("../models/ToDoModel");

const router = Router()


router.get("/", async (req,res)=>{
    const ToDo = await ToDoModel.find();
    res.send(ToDo)
})

router.post("/save", async (req,res)=>{
    
    const { text } = await req.body;

    try{ToDoModel.create({ text }).then((data)=>{
        console.log("New Data added successfully")
        res.send(data)
    })}
    catch(err){
        console.log(err)
    }
} )

router.put("/update", async (req,res)=>{

    const {_id, text } = await req.body;

    try{ToDoModel.findByIdAndUpdate(_id, { text }).then((data)=>{
        console.log("data updated successfully")
        res.send(data)
    })}
    catch(err){
        console.log(err)
    }
} )

router.delete("/delete/:id", async (req,res)=>{
    
    try{ToDoModel.findByIdAndDelete(req.params.id).then((data)=>{
        console.log("data deleted successfully")
        res.send(data)
    })}
    catch(err){
        console.log(err)
    }
} )



module.exports = router;