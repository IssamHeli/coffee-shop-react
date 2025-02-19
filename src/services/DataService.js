import Product from '../models/Product';

const products = [
    new Product(
        1,
        'Cappuccino',
        4.5,
        'https://cafefabrique.com/cdn/shop/articles/Cappuccino.jpg',
        'A classic Italian coffee beverage'
      ),
    
      // Latte
      new Product(
        2,
        'Latte',
        4.2,
        'https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg',
        'A smooth and creamy coffee drink with steamed milk'
      ),
    
      // Espresso
      new Product(
        3,
        'Espresso',
        3.8,
        'https://www.nespresso.ph/media/catalog/category/recipes/morning_coffee/nespresso-recipes-Espresso-Macchiato-by-Nespresso_1.jpg',
        'A strong and concentrated shot of coffee'
      ),
    
      // Americano
      new Product(
        4,
        'Americano',
        3.5,
        'https://spartanspecialtycafe.com/wp-content/uploads/2023/07/Americano.jpg',
        'Espresso diluted with hot water for a lighter taste'
      ),
    
      // Mocha
      new Product(
        5,
        'Mocha',
        4.8,
        'https://gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg',
        'Espresso combined with chocolate milk or syrup'
      ),
    
      // Macchiato
      new Product(
        6,
        'Macchiato',
        4.0,
        'https://www.cuisineactuelle.fr/imgre/fit/~1~cac~2023~07~31~76af13ec-6d10-429e-8a7c-ba05cdc6258d.jpeg/1200x1200/quality/80/crop-from/center/quelle-est-la-difference-entre-un-latte-macchiato-et-un-cappuccino.jpeg',
        'Espresso with a small amount of steamed milk and milk foam'
      ),
    
      // Flat White
      new Product(
        7,
        'Flat White',
        4.3,
        'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fdec9c648258de35dd9722fdf6b73afe5c747aa94',
        'Similar to a latte but with a smoother, microfoam texture'
      ),
    
      // Cortado
      new Product(
        8,
        'Cortado',
        4.1,
        'https://cafefabrique.com/cdn/shop/articles/cortado.jpg',
        'A Spanish coffee drink similar to a latte but smaller'
      ),
    
      // Irish Coffee
      new Product(
        9,
        'Irish Coffee',
        5.5,
        'https://assets.afcdn.com/recipe/20221013/136051_w1024h768c1cx3072cy1728cxt0cyt0cxb6144cyb3456.webp',
        'Hot coffee mixed with Irish whiskey and topped with whipped cream'
      ),
    
      // Vienna Coffee
      new Product(
        10,
        'Vienna Coffee',
        4.7,
        'https://coffeebean.com.au/cdn/shop/articles/19486486_vienna-coffee_1600x.webp?v=1700705349',
        'Viennese coffee with whipped cream and sometimes chocolate sprinkles'
      ),
    
      // Ristretto
      new Product(
        11,
        'Ristretto',
        3.2,
        'https://torrefactory.coffee/cdn/shop/articles/ristretto.png?v=1677058199',
        'A very short and concentrated espresso shot'
      ),
    
      // Lungo
      new Product(
        12,
        'Lungo',
        3.7,
        'https://be.jura.com/-/media/global/images/coffee-recipes/images-redesign-2020/lungo_barista_2000x1400px.jpg',
        'A longer espresso shot with more water'
      ),
    
      // Red Eye
      new Product(
        13,
        'Red Eye',
        4.0,
        'https://res.cloudinary.com/dfao6zqc7/image/upload/v1714046295/coffee_types_v2/bohrzmmo5amprkmlw9zc.webp',
        'Coffee with a shot of espresso added'
      ),
    
      // Black Eye
      new Product(
        14,
        'Black Eye',
        4.5,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdwGHfBkyuo3aLkZkNoJ7zWhFhIXAQgnXqQ&s',
        'Coffee with two shots of espresso added'
      ),
    
      // Iced Coffee
      new Product(
        15,
        'Iced Coffee',
        3.9,
        'https://www.allrecipes.com/thmb/Hqro0FNdnDEwDjrEoxhMfKdWfOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg',
        'Cold brewed coffee served over ice'
      ),
    
      // Iced Latte
      new Product(
        16,
        'Iced Latte',
        4.2,
        'https://www.cafedumonde.co.uk/media/o3gkzmuy/iced-latte.png?width=540&height=540&v=1dac1797980aad0',
        'Iced coffee with steamed milk'
      ),
    
      // Iced Mocha
      new Product(
        17,
        'Iced Mocha',
        4.8,
        'https://images.ctfassets.net/v601h1fyjgba/5x572mICLA8SIK06LaRxV8/9cd38d07f301c1f62dae04246722c750/Iced_Cafe_Mocha.jpg',
        'Iced coffee with chocolate and milk'
      ),
    
      // Iced Caramel Macchiato
      new Product(
        18,
        'Iced Caramel Macchiato',
        5.0,
        'https://www.starbucksathome.com/be/sites/default/files/2024-06/Recipe%20Refresh_Iced%20Macchiato_1842x1542_LS.png',
        'Iced coffee with caramel sauce and milk'
      ),
    
      // Cold Brew
      new Product(
        19,
        'Cold Brew',
        4.5,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZMOlAnbLPU3hG8crByiBFKGAQMmSz7Nd0Q&s',
        'Coffee slowly brewed over ice for a smooth, less bitter taste'
      ),
    
      // Nitro Cold Brew
      new Product(
        20,
        'Nitro Cold Brew',
        5.2,
        'https://donutbank.com/cdn/shop/files/nitrocoffee.jpg?v=1699456443',
        'Cold brew coffee infused with nitrogen for a creamy, smooth texture'
      ),
    
  // ... other products
];

const dataService = {
  getProducts: () => products,
};

export default dataService;