function enlargeText() {

    document.getElementById("input-text").style.fontSize = "24pt";

}

function fancy() {
    document.getElementById("input-text").style.fontWeight= "900";
    document.getElementById("input-text").style.color= "blue";
    document.getElementById("input-text").style.textDecoration= "underline";
}

function boring() {
    document.getElementById("input-text").style.fontWeight= "400";
    document.getElementById("input-text").style.color= "black";
    document.getElementById("input-text").style.textDecoration= "none";
}

function goMoo() {
	var inputText = document.getElementById("input-text");
    inputText.value = inputText.value.toUpperCase();
    var parts = inputText.value.split(".");
    inputText.value = parts.join("-MOO.");

}