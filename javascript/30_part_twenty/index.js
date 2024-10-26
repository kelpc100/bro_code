// cookie = a small text file stored on your computer
//                 used to remember information about the user
//                 saved in name=value pairs
//console.log(navigator.cookieEnabled);
//document.cookie = "firstName=Spongebob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
//document.cookie = "lastName=Squarepants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
//let allCookies = document.cookie;
//console.dir(allCookies);

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    console.log(firstText.value);
    console.log(lastText.value);
//    setCookie("firstName", firstText.value, 365);
//   setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
//    console.log(firstText.value);
//    console.log(lastText.value);

});

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
//    console.log(name)
    const cDecoded = decodeURIComponent(document.cookie);
//    console.log(cDecoded)
    const cArray = cDecoded.split("; ");
//    console.log(cArray)
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            console.log(element);
            console.log(element.indexOf(name))
            result = element.substring(name.length + 1)
            console.log(name.length)
            console.log(element.substring(name.length))
            console.log(result)
        }
    })
    return result;
}