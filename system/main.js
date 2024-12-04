console.log("<!-- BY: Givaldi dan Dian -->");
let globalLogin = null;
const localLogin = localStorage.getItem("logValue");
if (localLogin === null) {
  let login = false;
  localStorage.setItem("logValue", login);
} else {
  globalThis = globalLogin;
  globalLogin = localStorage.getItem("logValue");
}

console.log(globalLogin);
if (globalLogin == "false") {
  const login = document.getElementById("loginPage");
  login.classList.remove("d-none");
  login.classList.add("position-fixed");
  login.classList.add("top-0");
  login.classList.add("bottom-0");
  login.classList.add("end-0");
  login.classList.add("start-0");
  login.classList.add("bg-body");
}

let globalVar = [];
const localAry = JSON.parse(localStorage.getItem("result"));
if (localAry === null) {
  let ary = [];
  localStorage.setItem("result", JSON.stringify(ary));
  const login = document.getElementById("loginPage");
  login.classList.remove("d-none");
  login.classList.add("position-fixed");
  login.classList.add("top-0");
  login.classList.add("bottom-0");
  login.classList.add("end-0");
  login.classList.add("start-0");
  login.classList.add("bg-body");
  console.log("yes");
} else {
  globalVar = JSON.parse(localStorage.getItem("result"));
}
console.table(globalVar);

function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getInputAccount() {
  globalThis = globalLogin;
  globalThis = globalVar;

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const role = document.getElementById("role").value;

  const escapeInputUsername = escapeHTML(username);
  const escapeInputPassword = escapeHTML(password);

  const user_name = escapeInputUsername;
  const pass_word = escapeInputPassword;
  const rl = role;

  function loginData(username, password, rl) {
    this.username = username;
    this.password = password;
    this.rl = rl;
  }
  console.log(globalVar);
  let hasilSoal = new loginData(username, password, rl);
  globalVar.push(hasilSoal);
  const resultVar = JSON.stringify(globalVar);
  localStorage.setItem("result", resultVar);
  localStorage.setItem("logValue", true);
}

function resetInputAccount() {
  let localAry = [];
  const resultVar = JSON.stringify(localAry);
  localStorage.setItem("result", resultVar);
  localStorage.setItem("logValue", false);
}

let globalVarProduct = [];
const localAryProduct = JSON.parse(localStorage.getItem("resultProduct"));
if (localAryProduct === null) {
  let ary = [];
  localStorage.setItem("resultProduct", JSON.stringify(ary));
} else {
  globalVarProduct = JSON.parse(localStorage.getItem("resultProduct"));
}
console.log(globalVarProduct);

function getInputProduct() {
  globalThis = globalVarProduct;

  const product = document.getElementById("product").value;
  const nama = document.getElementById("headerP").value;
  const harga = document.getElementById("hargaP").value;
  const deskripsi = document.getElementById("desP").value;

  const escapeInputName = escapeHTML(nama);
  const escapeInputHarga = escapeHTML(harga);
  const escapeInputDes = escapeHTML(deskripsi);

  const escProduct = product;
  const escNama = escapeInputName;
  const escHarga = escapeInputHarga;
  const escDes = escapeInputDes;

  function productData(product, nama, harga, des) {
    this.escProduct = product;
    this.escNama = nama;
    this.escHarga = harga;
    this.escDes = des;
  }
  let hasilProduct = new productData(escProduct, escNama, escHarga, escDes);
  globalVarProduct.push(hasilProduct);
  const resultVarP = JSON.stringify(globalVarProduct);
  localStorage.setItem("resultProduct", resultVarP);
}

function resetInputProduct() {
  let localAry = [];
  const resultVar = JSON.stringify(localAry);
  localStorage.setItem("resultProduct", resultVar);
}
let a = 0;

const containerProduk = document.getElementById("productList");
globalVarProduct.forEach(aryVar => {
  containerProduk.innerHTML += `        <div class="col">
            <div style="min-width: 350px" class="card w-100 mx-2">
              <a class="" href="#">
                <img src="./Img/Produk/${aryVar.escProduct}" class="card-img-top" alt="..." />
              </a>
              <div class="card-body">
                <h5 class="card-title">${aryVar.escNama}</h5>
                <form >
                <a href="product.html?product=${aryVar.escProduct}&nama=${aryVar.escNama}&harga=${aryVar.escHarga}&des=${aryVar.escDes}" id="formProduct" style="width: 300px;" class="btn btn-primary">Buy</a>
                </form>
                <p class="card-text">
                  <small class="text-body-secondary"
                    >GD-store</small
                  >
                </p>
              </div>
            </div>
          </div>
          `;
});


const logout = document.getElementById("logout");
logout.onclick = resetInputAccount;

const loginUser = document.getElementById("login-User");
loginUser.onclick = getInputAccount;

const insertP = document.getElementById("submitP");

const role = globalVar[0]["rl"];
switch (role) {
  case "Customer":
    function btnbtn() {
      const btnC1 = document.getElementById("modalCustomer");
      btnC1.classList.remove("d-none");
    }
    function closeCus() {
      const btnCf = document.getElementById("modalCustomer");
      btnCf.classList.add("d-none");
      console.log("oke2");
    }
    function sucCus() {
      const btnC = document.getElementById("modalCustomer");
      btnC.classList.add("d-none");
      console.log("oke1");
    }
    const close = document.getElementById("closeCus");
    const oke = document.getElementById("successCus");
    const btn_uni = document.getElementById("btnUni");
    btn_uni.onclick = btnbtn;
    close.onclick = closeCus;
    oke.onclick = sucCus;
    break;
  case "Saler":
    function tabSal() {
      const tab = document.getElementById("modalSaler");
      tab.classList.remove("d-none");
    }
    function closeSal() {
      const btnCf = document.getElementById("modalSaler");
      btnCf.classList.add("d-none");
      console.log("oke2");
    }
    const close_Sal = document.getElementById("closeP");
    const btn_uni_sal = document.getElementById("btnUni");
    close_Sal.onclick = closeSal;
    btn_uni_sal.onclick = tabSal;
    insertP.onclick = getInputProduct;
    break;
  case "Admin":
    function tabAdm() {
      const tab = document.getElementById("modalAdmin");
      tab.classList.remove("d-none");
    }
    function closeAdm() {
      const btnCf = document.getElementById("modalAdmin");
      btnCf.classList.add("d-none");
      console.log("oke2");
    }
    const sub = document.getElementById("delP");
    const btn_close_adm = document.getElementById("closeDelP");
    const btn_uni_adm = document.getElementById("btnUni");
    sub.onclick = resetInputProduct;
    btn_uni_adm.onclick = tabAdm;
    btn_close_adm.onclick = closeAdm;
    break;
  default:
    function notLog() {}
    console.log("not login");
}
