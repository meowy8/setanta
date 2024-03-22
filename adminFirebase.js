const admin = require("firebase-admin");
const serviceAccount = require("./setanta-5fc1f-firebase-adminsdk-yyh16-552bbd6656.json");
const { getStorage, ref } = require("firebase/storage");
const products = require("./shopData/allProducts.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const collectionRef = db.collection("products");

products.products.forEach(async (product) => {
  try {
    await collectionRef.add(product);
    console.log("Document set successfully");
  } catch (error) {
    console.error("Error setting document: ", error);
  }
});
