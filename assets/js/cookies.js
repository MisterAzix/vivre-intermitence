//Elements
const cookiePopup = document.querySelector('.cookie-popup');
const buttons = document.querySelectorAll('.cookies-button');

//Test if cookie are stored
if(document.cookie) {
    console.log('Cookies Already Accepted');
    cookiePopup.classList.add('display-none');
}else {
    console.log('Cookies Not Accepted');
    cookiePopup.classList.remove('display-none');
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        acceptCookie(index);
    });
});

function acceptCookie(index) {
    if(index === 0) {
        setCookie()
        console.log('Cookies Accepted');
    }
    cookiePopup.classList.add('display-none');
}

function setCookie() {
    let d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = "Cookies=true;" + expires + ";path=/";
}