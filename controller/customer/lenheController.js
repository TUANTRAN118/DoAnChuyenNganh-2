// controller/customer/lienheController.js
const layout = './customer/layoutCustomer';
const headerDB = require('../../model/customer/headerDB');

let header
headerDB.getHeader((data) => {
    header = data
})
let viewLienHe = (req, res) => {
    headerDB.getHeader((data) => {
        let header = data;
        res.render('customer/lienHe', {layout: layout, sessionID: req.cookies.dataLogin, dataHeaderSp: header[0], dataHeaderXx: header[1], dataHomeLsp: data[0], dataHomeSp: data[1]});
        res.end();
    })
}
let viewHDGD = (req, res) => {
    headerDB.getHeader((data) => {
        let header = data;
        res.render('customer/huongDanGiaoDich', {layout: layout, sessionID: req.cookies.dataLogin, dataHeaderSp: header[0], dataHeaderXx: header[1], dataHomeLsp: data[0], dataHomeSp: data[1]});
        res.end();
    })
}


module.exports = {
    viewLienHe, viewHDGD
};
