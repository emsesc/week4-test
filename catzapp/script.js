async function y1k3s() {
    let url = `https://priscool.azurewebsites.net/api/w4s6?code=oWyTTMC7Pug2iZdqQXEiEJdsT6kFuR9MDINIq0K3fdd6QdL9xV3HHg==&name1=${document.getElementById("name1").value}&name2=${document.getElementById("name2").value}&name3=${document.getElementById("name3").value}&name4=${document.getElementById("name4").value}`
    let resp = await fetch(url, {
            method: 'GET'
        });
        
        let result = await resp.json()
  
        document.getElementById("image1").src = "data:image/png;base64," + result.cat1
        document.getElementById("image2").src = "data:image/png;base64," + result.cat2
        document.getElementById("image3").src = "data:image/png;base64," + result.cat3
        document.getElementById("image4").src = "data:image/png;base64," + result.cat4
  }
