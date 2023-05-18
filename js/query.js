function KTMaBN(){
    let a = document.getElementById("txtMaBN").value;
    let pattern = /^(BN-)[0-9]{5}$/; 
    if(pattern.test(a)){
        document.getElementById("tbMaBN").value= "";
        return true;
    }
    else{
        document.getElementById("tbMaBN").value= "Mã bệnh nhân theo mẫu BN-YYYYY";
        return false;
    }
}

function KTMatKhau(){
    let a = document.getElementById("txtpwd").value;
    let pattern = /^.{6,}$/; 
    if(pattern.test(a)){
        document.getElementById("tbpwd").value= "";
        return true;
    }
    else{
        document.getElementById("tbpwd").value= "Mật khẩu ít nhất 6 ký tự bất kỳ!";
        return false;
    }
}
function KTNgayKham(){
    let a =  new Date(document.getElementById("txtdate").value);
    let b = new Date();
    if(a>b){
        document.getElementById("tbdate").value= "";
        return true;
    }
    else{
        document.getElementById("tbdate").value= "Ngày khám phải sau ngày hiện tại!";
        return false;
    }
}

function tinhTienDichVu(){
    let a = 0;
    
    let dv_1 = document.getElementById("dv1");
    let dv_2 = document.getElementById("dv2");
    let dv_3 = document.getElementById("dv3");
    if(dv_1.checked){
        a +=50000
    }
    if(dv_2.checked){
        a +=50000
    }
    if(dv_3.checked){
        a +=50000
    }
    return a;
}
function KTKhoa(){
    let selectItem = document.querySelector("#sl-khoa")
    let b = "Ngoại tổng quát";
    b = selectItem.value;
    console.log(b)
    return b;
}

let stt = 1;
function KiemTraTT(){

    if (KTNgayKham() && KTMatKhau() && KTMaBN()) {
       

        let maBN = document.getElementById("txtMaBN").value;
        let matKhau= document.getElementById("txtpwd").value;
        let ngayKham= document.getElementById("txtdate").value; //string
        let tienPhuThu= tinhTienDichVu();
        let chuyenKhoa= KTKhoa();

        let row_moi = "<tr><td>" + stt + "</td><td>" + maBN + "</td><td>" + matKhau + "</td><td>" + ngayKham + "</td><td>" + tienPhuThu + "</td><td>" + chuyenKhoa + "</td></tr>";
        window.alert("Đăng ký thành công!");
        document.getElementById("tbl").innerHTML += row_moi;
        stt++;
    }
    else{
        document.getElementById("tbDat").value = "Vui lòng nhập đủ thông tin!";
    }
}