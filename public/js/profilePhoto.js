
//Getting the file path
document.getElementById("i_file").addEventListener('change', function (event) {
    var tmppath = URL.createObjectURL(event.target.files[0]);
    document.getElementById("chosenImg").style.display = "block";
    document.getElementById("chosenImg").setAttribute('src', URL.createObjectURL(event.target.files[0]));
    document.getElementById("disp_tmp_path").value = tmppath;
    console.log(tmppath, "       the temporary path");
});