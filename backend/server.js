const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
require("dotenv").config()
const shopperSchema = mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    description: {
      type: String
    }

})

mongoose.connect(process.env.API_URL).then(res => {
    console.log("Giris etdiniz")
})

const Shoppers = mongoose.model("Shopper", shopperSchema)

app.get("/api/shoppers", async (req, res) => {
    const response = await Shoppers.find()
    res.send(response)
})

app.get("/api/shoppers/:id", async (req, res) => {
    const { id } = req.params
    const target = await Shoppers.findById(id)
    res.send(target)
})

app.delete("/api/shoppers/:id", async (req, res) => {
    const { id } = req.params
    await Shoppers.findByIdAndDelete(id)
    const items = await Shoppers.find()
    res.send(items)
})

app.post("/api/shoppers", async (req, res) => {
    const newProd = new Shoppers({...req.body})
    await newProd.save()
    res.status(201).send(newProd)
})

app.put("/api/shoppers/:id", async (req, res) => {
    const { id } = req.params
    const { title, price, image } = req.body
    await Shoppers.findByIdAndUpdate(id, { ...req.body })
    res.send("Duzelis edildi")
})



app.listen(process.env.PORT, (req, res) => {
    console.log(`Bu server bu port-da isliyir:${process.env.PORT}`)
})