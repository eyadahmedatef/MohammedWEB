const qrInput = document.getElementById("qrInput");
const canvasDiv = document.getElementById("canvasDiv");



function generateCode() {
    if (qrInput.value == "") {
        alert("Please enter your text")
    } else {
        var qr = new QRious({
        element: canvasDiv,
        value: qrInput.value,
        });
    }
}