
const connection = require('../../connectDB');

function selectLogin(result, tk, mk) {
    connection.query(
        'SELECT * FROM `taikhoan_kh` WHERE BINARY TenTK = ? AND BINARY MatKhau = SHA2(?, 256)', [tk, mk],
        function(err, results) {
            if(err) throw err;
            return result(results);
        }
      );
}

function postSignUp(result, tk, mk) {
    connection.query(
        'INSERT INTO `taikhoan_kh`(`TenTK`, `MatKhau`, `TrangThai`, `NgayDK`) VALUES (?, SHA2(?, 256), 1, now())', [tk, mk],
        function(err, results) {
            if(err) throw err;
            return result(results);
        }
      );
}

function isPass(callback, mktk, mkinput){
    console.log(mktk.TenTK);
    console.log(mkinput);
    connection.query(
        'SELECT * FROM `taikhoan_kh` WHERE TenTK = ? AND MatKhau = SHA2(?, 256) ' , [mktk.TenTK, mkinput],
        function(err, results) {
            if(err) throw err;
            return callback(results);
        }
    )
}

function postChangePass(callback, mk, id){
    connection.query(
        'UPDATE `taikhoan_kh` SET `MatKhau`= SHA2(?, 256) WHERE ID = ? ' , [mk, id.ID],
        function(err, results) {
            if(err) throw err;
            return callback(results);
        }
    )
}

module.exports = {selectLogin, postSignUp, postChangePass, isPass};