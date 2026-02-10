function submitData() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        alert("Please fill all fields!");
        return;
    }

    document.getElementById("result").innerHTML =
        "✅ Welcome " + name + " (Roll: " + roll + ")";
    
    eval("console.log('Hacked')");

}
