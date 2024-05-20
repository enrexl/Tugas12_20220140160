function kirimData() {
  var nama = document.getElementById("nama").value;
  var nim = document.getElementById("nim").value;
  var jk = document.getElementById("jk").value;
  var peminatan = document.querySelector("input[name=peminatan]:checked").value;
  var alamat = document.getElementById("alamat").value;
  var tanggal = new Date();

  alert(
    "Nama Mahasiswa : " +
      nama +
      "\nNIM : " +
      nim +
      "\nJenis Kelamin : " +
      jk +
      "\nPeminatan : " +
      peminatan +
      "\nAlamat : " +
      alamat +
      "\n\nTerdaftar Pada : " +
      tanggal
  );
}
