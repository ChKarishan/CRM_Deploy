// import express from "express";
const express = require('express');

const app = express();

app.use(express.json());

app.get('/',async (req, res) => {

    res.json("test api ");
})

app.listen(8888, () => console.log(`Server Port: 8888`));
