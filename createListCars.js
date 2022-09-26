const fs = require('fs');
const csv = require("csvtojson")
const Car = require('./models/Car');

const creteListCard = async()=> {
    let newData = await csv().fromFile('data.csv')
    let id = 1
    console.log(newData)
    newData = newData.map((e) => {
        return {
            id: id++,
            make: e.Make,
            model: e.Model,
            release_date: Number(e.Year),
            transmission_type:e["Transmission Type"],
            style: e["Vehicle Style"],
            size: e["Vehicle Size"],
            price: Number(e.MSRP)
        }
    })
    let data = JSON.parse(fs.readFileSync("coderCard.json"))
    data.data = newData
    data.totalCar = newData.length
    fs.writeFileSync("coderCard.json", JSON.stringify(data));
    newData.forEach((e) => {
        Car.create(e);
    })
}

creteListCard()