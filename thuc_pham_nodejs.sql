UPDATE taikhoan_kh SET MatKhau = SHA2('123', 256)

SELECT cthoadon.IDSanPham, sanpham.TenSanPham, SUM(cthoadon.SoLuong) as SoLuong FROM cthoadon 
 INNER JOIN hoadon ON hoadon.ID = cthoadon.ID_HoaDon
 INNER JOIN sanpham ON sanpham.ID = cthoadon.IDSanPham
  WHERE day(NgayMua) = day(now()) AND month(NgayMua) = month(now()) AND year(NgayMua) = year(now())  
 GROUP BY cthoadon.IDSanPham, sanpham.TenSanPham
 
 
 UPDATE hoadon SET NgayMua = NOW()
 
 SELECT cthoadon.SoLuong FROM cthoadon  
 INNER JOIN hoadon ON hoadon.ID = cthoadon.ID_HoaDon 
  WHERE day(NgayMua) = day(now()) AND month(NgayMua) = month(now()) AND year(NgayMua) = year(now())  
 
 
