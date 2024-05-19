import express from "express";

const app = express();

const port = 3000;

app.use(express.json());
let userData = [];
let userId = 1;

// send user
app.post("/user", (req, res) => {
  const { name, price } = req.body;
  const newData = { id: userId++, name, price };
  userData.push(newData);
  res.status(201).send(newData);
});
 
// get users
app.get('/getUser',(req,res)=>{
    res.send(userData)
})

// get users with id
app.get('/getUser/:userId',(req,res)=>{
    const user= userData.find(findUser=>findUser.id===parseInt(req.params.userId))
    if(!user){
        res.status(404).send('user not found')
    }else{
        res.send(user)
    }
})

// update user
app.put('/updateUser/:id',(req,res)=>{
  const user = userData.find(findUser=>findUser.id===parseInt(req.params.id))
  if(!user){
      res.status(404).send('user not found')
  }else{
    const {name,price} = req.body
    user.name = name
    user.price = price
    res.status(200).send(user)
  }
})

// delete user
app.delete('/deleteUser/:id',(req,res)=>{
  const index = userData.findIndex(findUser=> findUser.id ===parseInt(req.params.id))
  if(index===-1){
    return res.status(404).send('user not found')
  }else{
    userData.splice(index,1)
    return res.status(204).send('deleted')

  }
})

app.listen(port, () => {
  console.log(`server is running on port :${port}...`);
});
