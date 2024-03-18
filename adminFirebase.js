const admin = require("firebase-admin");
const serviceAccount = require("./setanta-5fc1f-firebase-adminsdk-yyh16-552bbd6656.json");
const categories = [
  {
    id: 1,
    name: "Mens",
    products: [
      {
        id: 1,
        name: "Blue Jumper",
        description: "Jumper with blue stripes",
        categoryId: 1,
        price: 100,
        imageUrl:
          "https://images.unsplash.com/photo-1610048476928-7e9a6a9a0c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    ],
  },
  {
    id: 2,
    name: "Womens",
    products: [
      {
        id: 2,
        name: "Black Jumper",
        description: "Jumper with black stripes",
        categoryId: 2,
        price: 200,
        imageUrl:
          "https://images.unsplash.com/photo-1610048476928-7e9a6a9a0c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    ],
  },
  {
    id: 3,
    name: "Accessories",
    products: [
      {
        id: 3,
        name: "Gold Ring",
        description: "Gold ring with diamond",
        categoryId: 3,
        price: 300,
        imageUrl:
          "https://images.unsplash.com/photo-1610048476928-7e9a6a9a0c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    ],
  },
  {
    id: 4,
    name: "Home",
    products: [
      {
        id: 4,
        name: "Wooden Desk",
        description: "Wooden desk with drawers",
        categoryId: 4,
        price: 400,
        imageUrl:
          "https://images.unsplash.com/photo-1610048476928-7e9a6a9a0c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    ],
  },
];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const collectionRef = db.collection("basket");

categories.forEach(async (category) => {
  try {
    await collectionRef.add(category);
    console.log("Document set successfully");
  } catch (error) {
    console.error("Error setting document: ", error);
  }
});
