const mongoose = require("../config/batabase");

const plantSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    uses: {
        type: String,
        required: true,
        default: "No known"
    },
    rating: {
        type: Number,
        default: 0
    },
    availableQuantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountPercent: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    }
}, {
    timestamps: true
});

const Plant = mongoose.model("Plant", plantSchema);

// const plant = new Plant({
//     category: "Grass",
//     name: "Bamboo",
//     uses: "Construction, ornamental",
//     rating: 4.4,
//     availableQuantity: 80,
//     price: 20.00,
//     discountPercent: 10
// });
// plant
// .save()
// .then((result) => {
//     console.log("User singned up!");
// })
// .catch((err) => {
//     console.log("Error is :" + err);
// });



// >>>>>>>>>>>>> Adding the plants to the plants collection
// Plant.insertMany([
//     {
//         category: "Herb",
//         name: "Basil",
//         uses: "Culinary, medicinal",
//         rating: 4.5,
//         availableQuantity: 150,
//         price: 5.99,
//         discountPercent: 10
//     },
//     {
//         category: "Flower",
//         name: "Rose",
//         uses: "Ornamental, fragrance",
//         rating: 4.8,
//         availableQuantity: 200,
//         price: 3.99,
//         discountPercent: 5
//     },
//     {
//         category: "Tree",
//         name: "Oak",
//         uses: "Timber, shade",
//         rating: 4.2,
//         availableQuantity: 30,
//         price: 150.00,
//         discountPercent: 15
//     },
//     {
//         category: "Shrub",
//         name: "Lavender",
//         uses: "Fragrance, ornamental",
//         rating: 4.7,
//         availableQuantity: 120,
//         price: 7.50,
//         discountPercent: 12
//     },
//     {
//         category: "Vegetable",
//         name: "Tomato",
//         uses: "Culinary",
//         rating: 4.9,
//         availableQuantity: 300,
//         price: 1.99,
//         discountPercent: 0
//     },
//     {
//         category: "Fruit",
//         name: "Apple",
//         uses: "Culinary, medicinal",
//         rating: 4.6,
//         availableQuantity: 250,
//         price: 2.50,
//         discountPercent: 8
//     },
//     {
//         category: "Fungus",
//         name: "Mushroom",
//         uses: "Culinary, medicinal",
//         rating: 4.3,
//         availableQuantity: 100,
//         price: 6.00,
//         discountPercent: 7
//     },
//     {
//         category: "Vine",
//         name: "Grapevine",
//         uses: "Culinary, ornamental",
//         rating: 4.5,
//         availableQuantity: 60,
//         price: 12.00,
//         discountPercent: 5
//     }
// ]).then((result) => {
//     console.log(result);
// });





module.exports = Plant;