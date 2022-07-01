let name;
let email;

function submitData(name, email){

    let reqBody = {
        name: name,
        email : email,
    }

    const Object = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" :  "application/json",
        },
        Body: JSON.stringify({
            // data goes here
            name : reqBody.name,
            email: reqBody.email
        }),
    }

    return fetch("http://localhost:3000/users", Object)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);
        })
        .catch(function (error) {
            alert("Unauthorized Access: code 401");
            console.log(error.message);
        });
}



