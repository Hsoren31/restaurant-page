import cafeCounter from './cafe_counter.jpg';

function createMenuItem (title, description){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu_item');

    const itemTitle = document.createElement('h3');
    itemTitle.classList.add('item_title');
    itemTitle.textContent = title;

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item_description');
    itemDescription.textContent = description;

    menuItem.append(itemTitle, itemDescription);
    return menuItem;
}

function mainMenu(){
    const foodMenu = document.createElement('div');
    foodMenu.classList.add('food_menu_div');
    
    const foodMenuHeader = document.createElement('h2');
        foodMenuHeader.classList.add('food_menu_header');
        foodMenuHeader.textContent = "Food Menu";
        foodMenu.append(foodMenuHeader);

    let muffin = createMenuItem('Muffins',
        'Fresh baked muffins every morning, from "Blueberry Lemon" to\
         "Chocolate Vanilla"');

    let donut = createMenuItem('Donuts',
        'Supporting our local donut shop we bring in a box of variety donuts\
         to try. Come in before they\'re gone.');
    
    let breakfastSandwich = createMenuItem('BreakFast Sandwich',
        'Your choice of protein, eggs, between your choice of bagel, croissant,\
         english muffins, or other bread options.');
    
    let lunch = createMenuItem('Lunch Sandwiches and Salads',
        'We make prepacked sandwiches and salads in the morning to grab on the\
         go. Come see what we got. Varies daily.');
    
    let grilledCheese = createMenuItem('Grilled Cheese Sandwich', 'Your choice of\
        Sharp Cheddar, Provolone, PepperJack on Sourdough grilled. Options to\
        add Ham or Turkey.');

    let reuben = createMenuItem('Reuben', 'Pastrami, Fermented Sauerkraut, Swiss,\
        1000 Island Dressing, Grilled Marble Rye.')
    
    let sides = createMenuItem('Sides', 'Chips, Cookies, Fruit, Pasta Salad, Soup');

    foodMenu.append(muffin, donut, breakfastSandwich, lunch, grilledCheese,
         reuben, sides);
    
    return foodMenu;
};

function menuImg(){
    const cafeCounterImg = new Image();
    cafeCounterImg.src = cafeCounter;
    cafeCounterImg.classList.add('cafe_counter_img');

    return cafeCounterImg;
};

function drinkMenu(){
    const drinkMenu = document.createElement('div');
    drinkMenu.classList.add('drink_menu_div');
    
    const drinkMenuHeader = document.createElement('h2');
        drinkMenuHeader.classList.add('drink_menu_header');
        drinkMenuHeader.textContent = "Drink Menu";
        drinkMenu.append(drinkMenuHeader);

    let coffee = createMenuItem('Hot Coffee',
        'Fresh Brewed Drip Coffee in our House Blend');


    let coldBrew = createMenuItem('Cold Brew Coffee',
        'Cold Brew in our House Blend beans');

    let lemonade = createMenuItem('Lemonade',
        'We offer a variety of lemonades including Regular, Pink, Strawberry,\
         and Raspberry made in house.');
    
    let soda = createMenuItem('Soda',
        'We have a soda machine that offers a variety of soda.')


    drinkMenu.append(coffee, coldBrew, lemonade, soda);
    return drinkMenu;
};


export { mainMenu, menuImg, drinkMenu };