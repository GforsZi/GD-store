console.log("<!-- BY: Givaldi dan Dian -->");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Ambil nilai parameter
const produk = urlParams.get("product");
const nama = urlParams.get("nama");
const harga = urlParams.get("harga");
const des = urlParams.get("des");

// Tampilkan data
document.querySelector(
  "#imgPro"
).innerHTML = `<img src="./Img/Produk/${produk}" class="img-fluid rounded-start" alt="./Img/Produk/${produk}">`;
document.getElementById("headerPro").innerText = nama;
document.getElementById("harPro").innerText = harga;
document.getElementById("desPro").innerText = des;
