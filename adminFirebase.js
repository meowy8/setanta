const admin = require("firebase-admin");
const serviceAccount = require("./setanta-5fc1f-firebase-adminsdk-yyh16-552bbd6656.json");
const { getStorage, ref } = require("firebase/storage");
const products = require("./shopData/allProducts.json");
const categories = require("./shopData/categories.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const collectionRef = db.collection("categories");

categories.categories.forEach(async (category) => {
  try {
    await collectionRef.add(category);
    console.log("Document set successfully");
  } catch (error) {
    console.error("Error setting document: ", error);
  }
});
