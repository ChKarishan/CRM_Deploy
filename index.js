import express from "express";


const app = express();

app.use(express.json());

app.get('https://crm-deploy-wheat.vercel.app/test',async (req, res) => {

    res.json("test api ");
})

app.listen(8888, () => console.log(`Server Port: 8888`));
