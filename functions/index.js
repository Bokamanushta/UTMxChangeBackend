const functions = require("firebase-functions");
const express = require("express");
const app = express();
const hotelsRouter = require("./api/controllers/hotelController");
const noticeRouter = require("./api/controllers/noticeController");
const studentRouter = require("./api/controllers/studentController");
const checkListRouter = require("./api/controllers/checkListController");
const doDontRouter = require("./api/controllers/doDontController");
const placeRouter = require("./api/controllers/placeController");
const shoppingRouter = require("./api/controllers/shoppingController");

app.use(express.json());
app.use("/hotels", hotelsRouter);
app.use("/notices", noticeRouter);
app.use("/students", studentRouter);
app.use("/checklists", checkListRouter);
app.use("/dodonts", doDontRouter);
app.use("/places", placeRouter);
app.use("/shops", shoppingRouter);

exports.utmXchange = functions.https.onRequest(app);

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
  timeoutSeconds: 300,
});



exports.setDBCheckList = functions.https.onRequest(require('./setupDB/setUpCheckList'))
exports.setDBDoDont = functions.https.onRequest(require('./setupDB/setUpDoDont'))
exports.setDBPlace = functions.https.onRequest(require('./setupDB/setUpPlace'))
exports.setDBShop = functions.https.onRequest(require('./setupDB/setUpShopping'))
exports.setDBNotice = functions.https.onRequest(require('./setupDB/setUpNotice'))
exports.setDBHotel = functions.https.onRequest(require('./setupDB/setUpHotel'))
exports.setDBStudent = functions.https.onRequest(require('./setupDB/setUpStudents'))
