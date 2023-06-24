document.getElementById("tombol_form").addEventListener("click", konversi);
document.getElementById("tombol_reverse").addEventListener("click", reverse);
document.getElementById("tombol_reset").addEventListener("click", reset);

const numberRegex = /^[0-9]+$/;
const inputfield = document.getElementById("inputfield");

inputfield.addEventListener("keypress", function (event) {
  if (!numberRegex.test(event.key)) {
    console.log("cetak hasil = ", event.key);
    event.preventDefault();
  } else {
    console.log("error!");
  }
});

function reset() {
  document.getElementById("inputfield").value = "";
}

function konversi() {
  var inputCelcius = document.getElementById("inputfield").value;

  if (inputCelcius !== "") {
    var hasilKonversi = (inputCelcius * 9) / 5 + 32;

    console.log("hasil konversi = ", hasilKonversi);
    document.getElementById("hasil").innerHTML = hasilKonversi;

    hasilKalkulasi = inputCelcius + " * (9/5) + 32 = " + hasilKonversi;
    console.log("hasil kalkulasi = ", hasilKalkulasi);
    document.getElementById("kalkulasi").innerHTML = hasilKalkulasi;
  } else {
    console.log("error");
    document.getElementById("hasil").innerHTML = "Masukkan suhu terlebih dahulu";
    document.getElementById("kalkulasi").innerHTML = "-";
  }
}

function reverse() {
  var inputCelcius = document.getElementById("inputfield").value;

  if (inputCelcius !== "") {
    var hasilReverse = ((inputCelcius - 32) * 5) / 9;

    console.log("hasil konversi = ", hasilReverse);
    document.getElementById("hasil").innerHTML = hasilReverse;

    hasilKalkulasireverse = inputCelcius + " - 32 * 5/9 = " + hasilReverse;
    console.log("hasil kalkulasi = ", hasilKalkulasireverse);
    document.getElementById("kalkulasi").innerHTML = hasilKalkulasireverse;
  } else {
    console.log("error");
    document.getElementById("hasil").innerHTML = "Masukkan suhu terlebih dahulu";
    document.getElementById("kalkulasi").innerHTML = "-";
  }
}
