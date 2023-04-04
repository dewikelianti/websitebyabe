console.log("saodjiosdi");

// Declaring Variables

const navProfile = document.querySelector('#nav-profile');
console.log(navProfile);
const xIcon = document.querySelector('.x-icon');
console.log(xIcon);
const profileCard = document.querySelector('.profile-container');
console.log(profileCard);
const body = document.getElementsByTagName('body');
console.log(body);

// Click Events

navProfile.addEventListener('click', function(){

    profileCard.style.display = 'block';
    profileCard.style.backgroundColor = 'rgba(0, 0, 0, 0.01)';

})

xIcon.addEventListener('click', function(){

    profileCard.style.display = "none";

})