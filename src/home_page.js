import myImage from './cafe_image.jpg';

function homeHeader(){
    const header = document.createElement('h2');
    header.textContent = 'Welcome to Break Time Lounge!';
    header.classList.add('header_home');

    return header;
};

function homeImg(){
    const img = new Image();
    img.src = myImage;
    img.classList.add('home_img');

    return img;
};

function homeText(){
    const text = document.createElement('p');
    text.textContent = 'Welcome to the Break Time Lounge! Need a some time out of the office? Come visit. Our opperating hours are between 7:00 A.M. to 4:00 P.M. We have drinks and food, outdoor seating, and free Wi-Fi.';
    text.classList.add('home_info');

    return text;
};

export { 
    homeHeader,
    homeImg,
    homeText
};
