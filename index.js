var darkTheme = true;

function changeTheme() {
    var body = document.body;
    var inputCode = document.getElementById("inputCode");
    var outputCode = document.getElementById("outputCode");
    var lineNumber = document.getElementsByClassName("lineNumber");
    var containerCode = document.getElementsByClassName('containerCode');
    var iconTheme = document.getElementById("iconTheme");

    if (darkTheme) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        inputCode.style.backgroundColor = "white";
        inputCode.style.color = "black";
        outputCode.style.backgroundColor = "white";
        outputCode.style.color = "black";
        //
        for (let lnNumber of lineNumber) {
            lnNumber.style.borderRightWidth = "1px";
            lnNumber.style.borderRightColor = "#343a40";
        }
        //
        for (let ctnCode of containerCode) {
            ctnCode.style.borderWidth = "1px";
            ctnCode.style.borderColor = "#343a40";
            ctnCode.style.borderLeft = "none";
        }
        //
        iconTheme.style.color = "#343a40";
        //
        darkTheme = false;
    } else {
        body.style.backgroundColor = "#343a40";
        body.style.color = "white";
        inputCode.style.backgroundColor = "#343a40";
        inputCode.style.color = "white";
        outputCode.style.backgroundColor = "#343a40";
        outputCode.style.color = "white";
        //
        for (let lnNumber of lineNumber) {
            lnNumber.style.borderRightWidth = "1px";
            lnNumber.style.borderRightColor = "#6c757d";
        }
        //
        for (let ctnCode of containerCode) {
            ctnCode.style.borderWidth = "1px";
            ctnCode.style.borderColor = "#6c757d";
            ctnCode.style.borderLeft = "none";
        }
        //
        iconTheme.style.color = "#fff";
        //
        darkTheme = true;
    }
}