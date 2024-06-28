const express=require('express')
const myApp=express()
myApp.use(express.json)
const port=3001

let userList=[];
let itemList=[];
myApp.post('/',(req,res)=>{
    const name=req.body.name;
    const item=req.body.item;
    userList.push(name);
    itemList.push(item);
    res.send(`${user} was created successfully`)
})
myApp.get('/',(req,res)=>{
    res.send("Shopping List")
    res.send(userList,itemList)
})
myApp.put('/:name',(req,res)=>{
    const oldName=req.params.name;
    const index=userList.indexOf(oldName)
    if(index>-1){
        const newName=req.body.newName;
        userList[index]=newName;
        res.send(`${oldName} was updated to ${newName}`)
    }
    else{
        res.status(404).send(`${oldName} not found`)
    }
})
myApp.delete('/:name',(req,res)=>{
    const name=req.params.name
    const index=userList.indexOf(name)
    if(index > -1) {
        userList.splice(index, 1);
        itemList.splice(index,1);
        res.send(`User ${name} has been deleted!`);
    }
    else{
        res.status(404).send(`User ${name} not found`);
    }
})
myApp.listen(port,()=>{
    console.log("API RUNNING ON PORT 3000")
})