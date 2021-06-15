async function getImage(event) {
    event.preventDefault()
    var myform = document.getElementById("myform")
    var payload = new FormData(myform);
    console.log(payload)
    var username = document.getElementById("username").value;
    if (username != '') {
        $('#output').text("Thanks!")
  
        console.log("Posting your image...");
        const resp = await fetch("https://priscool.azurewebsites.net/api/w3s2?code=5Rjd6l23aoqSnlYG6/9IIaRMVbvVdks7rXxglstZhl9aoi1CjO/ymQ==", {
            method: 'POST',
            headers: {
                'codename' : username
            },
            body: payload
        });
  
        var data = await resp.json();
        console.log(data);
        $('#output').text("Your image has been stored!")
    } else {
        alert("No name error.")
    }
  }
  