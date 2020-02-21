function areaCircle() {
    let radius = +document.getElementById("rInput").value;
    let area = radius * radius* 3.14;
    document.getElementById("resultArea").innerText="Diện tích hình tròn là: " + area + " cm2";
}
function paraCircle() {
    let radius = +document.getElementById("rInput").value;
    let para = 2 * radius * 3.14;
    document.getElementById("resultPara").innerText="Chu vi hình tròn là: " + para + " cm";
}