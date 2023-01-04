const url = "https://api.github.com/users/19vishesh"

const userData = fetch(url);

userData.then(data => {
    console.log("Fetch data", data);
    // Fetch return a readable stream that needs to be converted into the plain object
    
    //.json is also returns a promise
    return data.json();
}).then((finalData) => {
    console.log("Final data is", finalData);

    // can use it in webpage in this way
    const imageElement = document.createElement("img"); // creating element
    imageElement.setAttribute("src", finalData.avatar_url); //TAKING specific element from fetched data
    document.querySelector("body").appendChild(imageElement);
})