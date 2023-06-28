const { sendEtagResponse } = require("next/dist/server/send-payload");

module.exports =    {
  "foods":[
  {
    "name": "Carrots",
    "id": 1,
    "price": "₦600/kg",
    "category": "vegetables",
    "image": "/carrot.png",
    "media": "/35.png"
  },
  {
    "name": "Broccoli",
    "id": 2,
    "price": "₦900/kg",
    "category": "vegetables",
    "image": "/broccoli.jpg",
    "media": "/20.png"
  },
  {
    "name": "Tomatoes",
    "id": 3,
    "price": "₦500/kg",
    "category": "vegetables",
    "image": "/tomatoes.jpg",
    "media": "/10.png"
  },
  {
    "name": "Apples",
    "id": 4,
    "price": "₦250/kg",
    "category": "fruits",
    "image": "/apple.jpg",
    "media": "/20.png"
  },
  {
    "name": "Bananas",
    "id": 5,
    "price": "₦700/kg",
    "category": "fruits",
    "image": "/banana.jpg",
    "media": "/35.png"
  },
  {
    "name": "Oranges",
    "id": 6,
    "price": "₦220/kg",
    "category": "fruits",
    "image": "/oranges.jpg",
    "media": "/30.png"
  },
  {
    "name": "Chicken",
    "id": 7,
    "price": "₦1750/kg",
    "category": "meat",
    "image": "/chicken.jpg",
    "media": "/10.png"
  },
  {
    "name": "Beef",
    "id": 8,
    "price": "₦1100/kg",
    "category": "meat",
    "image": "/beef.jpg",
    "media": "/20.png"
  },
  {
    "name": "Pork",
    "id": 9,
    "price": "₦950/kg",
    "category": "meat",
    "image": "/pork.jpg",
    "media": "/35.png"
  },
  {
    "name": "Cola",
    "id": 10,
    "price": "₦250/kg",
    "category": "drinks",
    "image": "/coke.png",
    "media": "/10.png"
  },
  {
    "name": "Orange Juice",
    "id": 11,
    "price": "₦800/kg",
    "category": "drinks",
    "image": "/orange juice.jpg",
    "media": "/20.png"
  }
  ],
    "categories": [
      {
        "id": 1,
        "name": "Vegetables",
        "description": "Fresh and organic vegetables.",
        "imageUrl": "https://o.remove.bg/downloads/52f71af4-21b7-48e4-9f32-ba65682acc0d/vegg__1_-removebg-preview.png",
        "slug": "vegetables",
        "products": [
          {
            "id": 1,
            "name": "Carrots",
            "description": "Sweet and crunchy carrots.",
            "price": "₦310",
            "image": "https://o.remove.bg/downloads/ba1c5ba0-acf1-4e13-95e2-010d85b661ca/carrot-removebg-preview.png"
          },
          {
            "id": 2,
            "name": "Tomatoes",
            "description": "Juicy and ripe tomatoes.",
            "price": "₦290",
            "image": "https://media.istockphoto.com/id/489669074/photo/cherry-tomatoes.webp?b=1&s=170667a&w=0&k=20&c=Hsp7mlwxn1uyORD3V7Ba93XY2VyQ-txI8VIizhOFRno="
          },
          {
            "id": 3,
            "name": "Broccoli",
            "description": "Nutritious and tender broccoli florets.",
            "price": "₦350",
            "image": "https://o.remove.bg/downloads/3f62a9a3-9930-4c23-a528-0d298c48d1df/broccoli-removebg-preview.png"
          },
          {
            "id": 4,
            "name": "Spinach",
            "description": "Leafy and vibrant spinach leaves.",
            "price": "₦330",
            "image": "https://o.remove.bg/downloads/ac2a512d-5aaa-4581-9436-6ecf9e152723/download-removebg-preview.png"
          },
          {
            "id": 5,
            "name": "Bell Peppers",
            "description": "Colorful and crisp bell peppers.",
            "price": "₦370",
            "image": "https://o.remove.bg/downloads/008a3e4e-6117-4cd4-a239-08661c058486/images-removebg-preview.png"
          },
          {
            "id": 6,
            "name": "Cucumbers",
            "description": "Cool and refreshing cucumbers.",
            "price": "₦320",
            "image": "https://o.remove.bg/downloads/9e18a461-e663-4a33-aa95-a3a0035ec4c0/download-removebg-preview.png"
          },
          {
            "id": 7,
            "name": "Onions",
            "description": "Versatile and aromatic onions.",
            "price": "₦300",
            "image": "https://o.remove.bg/downloads/9307f7ac-8da6-454d-933d-87893e19d539/download-removebg-preview.png"
          },
          {
            "id": 8,
            "name": "Potatoes",
            "description": "Starchy and versatile potatoes.",
            "price": "₦340",
            "image": "https://o.remove.bg/downloads/c1940abf-c387-4db7-aa7d-cfb2ca6f431c/download-removebg-preview.png"
          },
          {
            "id": 9,
            "name": "Lettuce",
            "description": "Crisp and fresh lettuce leaves.",
            "price": "₦330",
            "image": "https://o.remove.bg/downloads/acc6a81d-e493-4750-8ce0-19f2a3bc8ef5/download-removebg-preview.png"
          },
          {
            "id": 10,
            "name": "Zucchini",
            "description": "Mild and tender zucchini.",
            "price": "₦350",
            "image": "https://o.remove.bg/downloads/e70ba300-c230-4f06-a273-25916521c653/download-removebg-preview.png"
          }
        ]
      },
      {
        "id": 2,
        "name": "Fruits",
        "description": "Juicy and flavorful fruits.",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7naORqBnG0E9dIQCRnQDqYRrWPGoXodO4bw&usqp=CAU",
        "slug": "fruits",
        "products": [
          {
            "id": 1,
            "name": "Apples",
            "description": "Crisp and sweet apples.",
            "price": "₦480",
            "image": "https://o.remove.bg/downloads/dbce9c92-e4a3-4561-bd05-dd4c7688a2b9/images-removebg-preview.png"
          },
          {
            "id": 2,
            "name": "Bananas",
            "description": "Creamy and nutritious bananas.",
            "price": "₦420",
            "image": "https://o.remove.bg/downloads/0b8e4d26-cc86-4ac5-b049-c676fed440b9/download-removebg-preview.png"
          },
          {
            "id": 3,
            "name": "Oranges",
            "description": "Citrusy and refreshing oranges.",
            "price": "₦450",
            "image": "https://o.remove.bg/downloads/6205ee53-0d4f-44be-928f-af305e0f47dc/download-removebg-preview.png"
          },
          {
            "id": 4,
            "name": "Strawberries",
            "description": "Sweet and juicy strawberries.",
            "price": "₦550",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22u6mZWijd4uK8qvNdmy74EwV2GJ5ux83yg&usqp=CAU"
          },
          {
            "id": 5,
            "name": "Grapes",
            "description": "Plump and flavorful grapes.",
            "price": "₦590",
            "image": "https://o.remove.bg/downloads/cfdc6ae3-d128-4f49-8fea-491b752dd1c7/download-removebg-preview.png"

          },
          {
            "id": 6,
            "name": "Mangoes",
            "description": "Tropical and succulent mangoes.",
            "price": "₦670",
            "image":"https://o.remove.bg/downloads/7e9b83c1-2bbf-44b6-9da5-0f5c21808cd5/download-removebg-preview.png"
          },
          {
            "id": 7,
            "name": "Pineapples",
            "description": "Sweet and tangy pineapples.",
            "price": "₦620",
            "image": "https://o.remove.bg/downloads/0774950d-ae3d-4ca3-b8ec-8da505121f78/download-removebg-preview.png"
          },
          {
            "id": 8,
            "name": "Watermelons",
            "description": "Juicy and hydrating watermelons.",
            "price": "₦520",
            "image": "https://o.remove.bg/downloads/d5ec373d-f057-4c17-adc6-1bb0f1caf45c/download-removebg-preview.png"
          },
          {
            "id": 9,
            "name": "Blueberries",
            "description": "Small and antioxidant-rich blueberries.",
            "price": "₦680",
            "image": "https://o.remove.bg/downloads/eb89c6ec-d7e7-4fca-ae8c-19f4b23fd995/download-removebg-preview.png"
          },
          {
            "id": 10,
            "name": "Peaches",
            "description": "Soft and fragrant peaches.",
            "price": "₦530",
            "image": "https://o.remove.bg/downloads/8603b4ca-11a9-4bbc-a2d5-c7ed4366c348/images-removebg-preview.png"
          }
        ]
      },
      {
        "id": 3,
        "name": "Milks & Eggs",
        "description": "Fresh milk and eggs.",
        "imageUrl": "https://source.unsplash.com/400x300/?milks,eggs",
        "slug": "milks-eggs",
        "products": [
          {
            "id": 1,
            "name": "Fresh Milk",
            "description": "Pure and creamy fresh milk.",
            "price": "₦760",
            "image": "https://source.unsplash.com/400x300/?freshmilk"
          },
          {
            "id": 2,
            "name": "Almond Milk",
            "description": "Plant-based almond milk.",
            "price": "₦820",
            "image": "https://source.unsplash.com/400x300/?almondmilk"
          },
          {
            "id": 3,
            "name": "Eggs (Dozen)",
            "description": "Farm-fresh eggs.",
            "price": "₦560",
            "image": "https://source.unsplash.com/400x300/?eggs"
          },
          {
            "id": 4,
            "name": "Greek Yogurt",
            "description": "Creamy and tangy Greek yogurt.",
            "price": "₦640",
            "image": "https://source.unsplash.com/400x300/?greekyogurt"
          },
          {
            "id": 5,
            "name": "Cheese",
            "description": "Variety of artisan cheeses.",
            "price": "₦890",
            "image": "https://source.unsplash.com/400x300/?cheese"
          },
          {
            "id": 6,
            "name": "Butter",
            "description": "Rich and creamy butter.",
            "price": "₦480",
            "image": "https://source.unsplash.com/400x300/?butter"
          },
          {
            "id": 7,
            "name": "Yogurt",
            "description": "Delicious and creamy yogurt.",
            "price": "₦520",
            "image": "https://source.unsplash.com/400x300/?yogurt"
          },
          {
            "id": 8,
            "name": "Soy Milk",
            "description": "Plant-based soy milk.",
            "price": "₦750",
            "image": "https://source.unsplash.com/400x300/?soymilk"
          },
          {
            "id": 9,
            "name": "Coconut Milk",
            "description": "Creamy and tropical coconut milk.",
            "price": "₦680",
            "image": "https://source.unsplash.com/400x300/?coconutmilk"
          },
          {
            "id": 10,
            "name": "Condensed Milk",
            "description": "Thick and sweetened condensed milk.",
            "price": "₦620",
            "image": "https://source.unsplash.com/400x300/?condensedmilk"
          }
        ]
      },
      {
        "id": 4,
        "name": "Drinks",
        "description": "Refreshing beverages.",
        "imageUrl": "https://source.unsplash.com/400x300/?drinks",
        "slug": "drinks",
        "products": [
          {
            "id": 1,
            "name": "Bottled Water",
            "description": "Pure and refreshing bottled water.",
            "price": "₦210",
            "image": "https://source.unsplash.com/400x300/?bottledwater"
          },
          {
            "id": 2,
            "name": "Carbonated Water",
            "description": "Bubbly and effervescent carbonated water.",
            "price": "₦290",
            "image": "https://source.unsplash.com/400x300/?carbonatedwater"
          },
          {
            "id": 3,
            "name": "Soft Drinks",
            "description": "Assorted soft drinks.",
            "price": "₦330",
            "image": "https://source.unsplash.com/400x300/?softdrinks"
          },
          {
            "id": 4,
            "name": "Fruit Juice",
            "description": "Freshly squeezed fruit juice.",
            "price": "₦380",
            "image": "https://source.unsplash.com/400x300/?fruitjuice"
          },
          {
            "id": 5,
            "name": "Tea",
            "description": "Variety of tea flavors.",
            "price": "₦290",
            "image": "https://source.unsplash.com/400x300/?tea"
          },
          {
            "id": 6,
            "name": "Coffee",
            "description": "Rich and aromatic coffee.",
            "price": "₦420",
            "image": "https://source.unsplash.com/400x300/?coffee"
          },
          {
            "id": 7,
            "name": "Energy Drinks",
            "description": "Boost of energy in a can.",
            "price": "₦450",
            "image": "https://source.unsplash.com/400x300/?energydrinks"
          },
          {
            "id": 8,
            "name": "Smoothies",
            "description": "Blended fruit smoothies.",
            "price": "₦520",
            "image": "https://source.unsplash.com/400x300/?smoothies"
          },
          {
            "id": 9,
            "name": "Iced Tea",
            "description": "Refreshing iced tea.",
            "price": "₦350",
            "image": "https://source.unsplash.com/400x300/?icedtea"
          },
          {
            "id": 10,
            "name": "Sports Drinks",
            "description": "Rehydrating sports drinks.",
            "price": "₦390",
            "image": "https://source.unsplash.com/400x300/?sportsdrinks"
          }
        ]
      },
      {
        "id": 5,
        "name": "Cake",
        "description": "Delicious cakes for every occasion.",
        "imageUrl": "https://source.unsplash.com/400x300/?cake",
        "slug": "cake",
        "products": [
          {
            "id": 1,
            "name": "Chocolate Cake",
            "description": "Rich and decadent chocolate cake.",
            "price": "₦850",
            "image": "https://source.unsplash.com/400x300/?chocolatecake"
          },
          {
            "id": 2,
            "name": "Vanilla Cake",
            "description": "Classic and fluffy vanilla cake.",
            "price": "₦780",
            "image": "https://source.unsplash.com/400x300/?vanillacake"
          },
          {
            "id": 3,
            "name": "Red Velvet Cake",
            "description": "Velvety and indulgent red velvet cake.",
            "price": "₦920",
            "image": "https://source.unsplash.com/400x300/?redvelvetcake"
          },
          {
            "id": 4,
            "name": "Carrot Cake",
            "description": "Moist and spiced carrot cake.",
            "price": "₦890",
            "image": "https://source.unsplash.com/400x300/?carrotcake"
          },
          {
            "id": 5,
            "name": "Cheesecake",
            "description": "Creamy and smooth cheesecake.",
            "price": "₦950",
            "image": "https://source.unsplash.com/400x300/?cheesecake"
          },
          {
            "id": 6,
            "name": "Fruitcake",
            "description": "Loaded with dried fruits and nuts.",
            "price": "₦830",
            "image": "https://source.unsplash.com/400x300/?fruitcake"
          },
          {
            "id": 7,
            "name": "Coconut Cake",
            "description": "Flavorful and tropical coconut cake.",
            "price": "₦870",
            "image": "https://source.unsplash.com/400x300/?coconutcake"
          },
          {
            "id": 8,
            "name": "Strawberry Shortcake",
            "description": "Light and fruity strawberry shortcake.",
            "price": "₦920",
            "image": "https://source.unsplash.com/400x300/?strawberryshortcake"
          },
          {
            "id": 9,
            "name": "Lemon Cake",
            "description": "Tangy and refreshing lemon cake.",
            "price": "₦880",
            "image": "https://source.unsplash.com/400x300/?lemoncake"
          },
          {
            "id": 10,
            "name": "Marble Cake",
            "description": "Swirled chocolate and vanilla cake.",
            "price": "₦820",
            "image": "https://source.unsplash.com/400x300/?marblecake"
          }
        ]
      },
      {
        "id": 6,
        "name": "Ice Cream",
        "description": "Creamy and indulgent ice cream flavors.",
        "imageUrl": "https://source.unsplash.com/400x300/?icecream",
        "slug": "icecream",
        "products": [
          {
            "id": 1,
            "name": "Vanilla Ice Cream",
            "description": "Classic and creamy vanilla ice cream.",
            "price": "₦560",
            "image": "https://source.unsplash.com/400x300/?vanillaicecream"
          },
          {
            "id": 2,
            "name": "Chocolate Ice Cream",
            "description": "Rich and velvety chocolate ice cream.",
            "price": "₦610",
            "image": "https://source.unsplash.com/400x300/?chocolateicecream"
          },
          {
            "id": 3,
            "name": "Strawberry Ice Cream",
            "description": "Sweet and fruity strawberry ice cream.",
            "price": "₦590",
            "image": "https://source.unsplash.com/400x300/?strawberryicecream"
          },
          {
            "id": 4,
            "name": "Mint Chocolate Chip Ice Cream",
            "description": "Refreshing mint ice cream with chocolate chips.",
            "price": "₦640",
            "image": "https://source.unsplash.com/400x300/?mintchocolatechipicecream"
          },
          {
            "id": 5,
            "name": "Cookie Dough Ice Cream",
            "description": "Creamy vanilla ice cream with chunks of cookie dough.",
            "price": "₦690",
            "image": "https://source.unsplash.com/400x300/?cookiedoughicecream"
          },
          {
            "id": 6,
            "name": "Salted Caramel Ice Cream",
            "description": "Smooth and sweet salted caramel ice cream.",
            "price": "₦630",
            "image": "https://source.unsplash.com/400x300/?saltedcaramelicecream"
          },
          {
            "id": 7,
            "name": "Coffee Ice Cream",
            "description": "Bold and aromatic coffee-flavored ice cream.",
            "price": "₦600",
            "image": "https://source.unsplash.com/400x300/?coffeeicecream"
          },
          {
            "id": 8,
            "name": "Pistachio Ice Cream",
            "description": "Creamy and nutty pistachio-flavored ice cream.",
            "price": "₦670",
            "image": "https://source.unsplash.com/400x300/?pistachioicecream"
          },
          {
            "id": 9,
            "name": "Rocky Road Ice Cream",
            "description": "Chocolate ice cream with marshmallows and nuts.",
            "price": "₦650",
            "image": "https://source.unsplash.com/400x300/?rockyroadicecream"
          },
          {
            "id": 10,
            "name": "Caramel Swirl Ice Cream",
            "description": "Creamy ice cream with ribbons of caramel.",
            "price": "₦620",
            "image": "https://source.unsplash.com/400x300/?caramelswirlicecream"
          }
        ]
      },
      {
        "id": 7,
        "name": "Bakery",
        "description": "Freshly baked bread and pastries.",
        "imageUrl": "https://source.unsplash.com/400x300/?bakery",
        "slug": "bakery",
        "products": [
          {
            "id": 1,
            "name": "Bread",
            "description": "Assorted freshly baked bread.",
            "price": "₦320",
            "image": "https://source.unsplash.com/400x300/?bread"
          },
          {
            "id": 2,
            "name": "Croissant",
            "description": "Flaky and buttery croissant.",
            "price": "₦350",
            "image": "https://source.unsplash.com/400x300/?croissant"
          },
          {
            "id": 3,
            "name": "Baguette",
            "description": "Crusty and long French baguette.",
            "price": "₦380",
            "image": "https://source.unsplash.com/400x300/?baguette"
          },
          {
            "id": 4,
            "name": "Muffin",
            "description": "Moist and flavorful muffins.",
            "price": "₦290",
            "image": "https://source.unsplash.com/400x300/?muffin"
          },
          {
            "id": 5,
            "name": "Cinnamon Roll",
            "description": "Sweet and gooey cinnamon rolls.",
            "price": "₦420",
            "image": "https://source.unsplash.com/400x300/?cinnamonroll"
          },
          {
            "id": 6,
            "name": "Scone",
            "description": "Buttery and crumbly scones.",
            "price": "₦390",
            "image": "https://source.unsplash.com/400x300/?scone"
          },
          {
            "id": 7,
            "name": "Pretzel",
            "description": "Soft and salty pretzels.",
            "price": "₦360",
            "image": "https://source.unsplash.com/400x300/?pretzel"
          },
          {
            "id": 8,
            "name": "Danish Pastry",
            "description": "Flaky and sweet Danish pastries.",
            "price": "₦450",
            "image": "https://source.unsplash.com/400x300/?danishpastry"
          },
          {
            "id": 9,
            "name": "Cupcake",
            "description": "Miniature and delectable cupcakes.",
            "price": "₦320",
            "image": "https://source.unsplash.com/400x300/?cupcake"
          },
          {
            "id": 10,
            "name": "Bagel",
            "description": "Chewy and flavorful bagels.",
            "price": "₦340",
            "image": "https://source.unsplash.com/400x300/?bagel"
          }
        ]
      },
      {
        "id": 8,
        "name": "Snacks",
        "description": "Tasty and convenient snacks.",
        "imageUrl": "https://source.unsplash.com/400x300/?snacks",
        "slug": "snacks",
        "products": [
          {
            "id": 1,
            "name": "Potato Chips",
            "description": "Crispy and savory potato chips.",
            "price": "₦180",
            "image": "https://source.unsplash.com/400x300/?potatochips"
          },
          {
            "id": 2,
            "name": "Popcorn",
            "description": "Light and fluffy popcorn.",
            "price": "₦150",
            "image": "https://source.unsplash.com/400x300/?popcorn"
          },
          {
            "id": 3,
            "name": "Pretzels",
            "description": "Crunchy and salty pretzels.",
            "price": "₦210",
            "image": "https://source.unsplash.com/400x300/?pretzels"
          },
          {
            "id": 4,
            "name": "Nachos",
            "description": "Cheesy and crunchy nachos.",
            "price": "₦250",
            "image": "https://source.unsplash.com/400x300/?nachos"
          },
          {
            "id": 5,
            "name": "Trail Mix",
            "description": "Nutty and fruity trail mix.",
            "price": "₦280",
            "image": "https://source.unsplash.com/400x300/?trailmix"
          },
          {
            "id": 6,
            "name": "Crackers",
            "description": "Crisp and savory crackers.",
            "price": "₦190",
            "image": "https://source.unsplash.com/400x300/?crackers"
          },
          {
            "id": 7,
            "name": "Cheese Balls",
            "description": "Cheesy and bite-sized cheese balls.",
            "price": "₦230",
            "image": "https://source.unsplash.com/400x300/?cheeseballs"
          },
          {
            "id": 8,
            "name": "Granola Bars",
            "description": "Healthy and chewy granola bars.",
            "price": "₦260",
            "image": "https://source.unsplash.com/400x300/?granolabars"
          },
          {
            "id": 9,
            "name": "Chocolate Bars",
            "description": "Indulgent and chocolatey bars.",
            "price": "₦220",
            "image": "https://source.unsplash.com/400x300/?chocolatebars"
          },
          {
            "id": 10,
            "name": "Dried Fruit",
            "description": "Sweet and chewy dried fruit.",
            "price": "₦200",
            "image": "https://source.unsplash.com/400x300/?driedfruit"
          }
        ]
      },
      {
        "id": 9,
        "name": "Grains",
        "description": "Healthy and nutritious grain products.",
        "imageUrl": "https://source.unsplash.com/400x300/?grains",
        "slug": "grains",
        "products": [
          {
            "id": 1,
            "name": "Rice",
            "description": "Long-grain and fluffy rice.",
            "price": "₦400",
            "image": "https://source.unsplash.com/400x300/?rice"
          },
          {
            "id": 2,
            "name": "Pasta",
            "description": "Assorted pasta shapes.",
            "price": "₦350",
            "image": "https://source.unsplash.com/400x300/?pasta"
          },
          {
            "id": 3,
            "name": "Quinoa",
            "description": "Nutritious and versatile quinoa.",
            "price": "₦520",
            "image": "https://source.unsplash.com/400x300/?quinoa"
          },
          {
            "id": 4,
            "name": "Oats",
            "description": "Heart-healthy and fiber-rich oats.",
            "price": "₦450",
            "image": "https://source.unsplash.com/400x300/?oats"
          },
          {
            "id": 5,
            "name": "Couscous",
            "description": "Quick-cooking and flavorful couscous.",
            "price": "₦480",
            "image": "https://source.unsplash.com/400x300/?couscous"
          },
          {
            "id": 6,
            "name": "Barley",
            "description": "Hearty and nutritious barley.",
            "price": "₦510",
            "image": "https://source.unsplash.com/400x300/?barley"
          },
          {
            "id": 7,
            "name": "Bulgur",
            "description": "Whole grain bulgur wheat.",
            "price": "₦470",
            "image": "https://source.unsplash.com/400x300/?bulgur"
          },
          {
            "id": 8,
            "name": "Millet",
            "description": "Small and nutrient-dense millet.",
            "price": "₦490",
            "image": "https://source.unsplash.com/400x300/?millet"
          },
          {
            "id": 9,
            "name": "Brown Rice",
            "description": "Nutty and wholesome brown rice.",
            "price": "₦430",
            "image": "https://source.unsplash.com/400x300/?brownrice"
          },
          {
            "id": 10,
            "name": "Wild Rice",
            "description": "Flavorful and unique wild rice.",
            "price": "₦460",
            "image": "https://source.unsplash.com/400x300/?wildrice"
          }
        ]
      },
      {
        "id": 10,
        "name": "Cheese",
        "description": "Variety of delicious cheeses.",
        "imageUrl": "https://source.unsplash.com/400x300/?cheese",
        "slug": "cheese",
        "products": [
          {
            "id": 1,
            "name": "Cheddar Cheese",
            "description": "Sharp and tangy cheddar cheese.",
            "price": "₦570",
            "image": "https://source.unsplash.com/400x300/?cheddarcheese"
          },
          {
            "id": 2,
            "name": "Mozzarella Cheese",
            "description": "Smooth and melty mozzarella cheese.",
            "price": "₦620",
            "image": "https://source.unsplash.com/400x300/?mozzarellacheese"
          },
          {
            "id": 3,
            "name": "Parmesan Cheese",
            "description": "Grated and savory parmesan cheese.",
            "price": "₦590",
            "image": "https://source.unsplash.com/400x300/?parmesancheese"
          },
          {
            "id": 4,
            "name": "Swiss Cheese",
            "description": "Hole-y and mild Swiss cheese.",
            "price": "₦640",
            "image": "https://source.unsplash.com/400x300/?swisscheese"
          },
          {
            "id": 5,
            "name": "Blue Cheese",
            "description": "Creamy and pungent blue cheese.",
            "price": "₦690",
            "image": "https://source.unsplash.com/400x300/?bluecheese"
          },
          {
            "id": 6,
            "name": "Feta Cheese",
            "description": "Tangy and crumbly feta cheese.",
            "price": "₦630",
            "image": "https://source.unsplash.com/400x300/?fetacheese"
          },
          {
            "id": 7,
            "name": "Gouda Cheese",
            "description": "Smooth and smoky gouda cheese.",
            "price": "₦600",
            "image": "https://source.unsplash.com/400x300/?goudacheese"
          },
          {
            "id": 8,
            "name": "Brie Cheese",
            "description": "Soft and creamy brie cheese.",
            "price": "₦650",
            "image": "https://source.unsplash.com/400x300/?briecheese"
          },
          {
            "id": 9,
            "name": "Camembert Cheese",
            "description": "Rich and aromatic camembert cheese.",
            "price": "₦620",
            "image": "https://source.unsplash.com/400x300/?camembertcheese"
          },
          {
            "id": 10,
            "name": "Gruyère Cheese",
            "description": "Sweet and nutty gruyère cheese.",
            "price": "₦610",
            "image": "https://source.unsplash.com/400x300/?gruyerecheese"
          }
        ]
      },
      {
        "id": 11,
        "name": "Cleaning Stuffs",
        "description": "Cleaning products for a tidy home.",
        "imageUrl": "https://source.unsplash.com/400x300/?cleaningstuffs",
        "slug": "cleaningstuffs",
        "products": [
          {
            "id": 1,
            "name": "All-Purpose Cleaner",
            "description": "Versatile cleaner for multiple surfaces.",
            "price": "₦250",
            "image": "https://source.unsplash.com/400x300/?allpurposecleaner"
          },
          {
            "id": 2,
            "name": "Glass Cleaner",
            "description": "Streak-free cleaner for glass surfaces.",
            "price": "₦280",
            "image": "https://source.unsplash.com/400x300/?glasscleaner"
          },
          {
            "id": 3,
            "name": "Floor Cleaner",
            "description": "Effective cleaner for all types of floors.",
            "price": "₦320",
            "image": "https://source.unsplash.com/400x300/?floorcleaner"
          },
          {
            "id": 4,
            "name": "Toilet Bowl Cleaner",
            "description": "Powerful cleaner for toilet bowls.",
            "price": "₦290",
            "image": "https://source.unsplash.com/400x300/?toiletbowlcleaner"
          },
          {
            "id": 5,
            "name": "Kitchen Cleaner",
            "description": "Degreaser for kitchen surfaces.",
            "price": "₦310",
            "image": "https://source.unsplash.com/400x300/?kitchencleaner"
          },
          {
            "id": 6,
            "name": "Bathroom Cleaner",
            "description": "Effective cleaner for bathroom surfaces.",
            "price": "₦300",
            "image": "https://source.unsplash.com/400x300/?bathroomcleaner"
          },
          {
            "id": 7,
            "name": "Disinfecting Wipes",
            "description": "Convenient wipes for disinfecting.",
            "price": "₦270",
            "image": "https://source.unsplash.com/400x300/?disinfectingwipes"
          },
          {
            "id": 8,
            "name": "Dish Soap",
            "description": "Powerful soap for dishwashing.",
            "price": "₦260",
            "image": "https://source.unsplash.com/400x300/?dishsoap"
          },
          {
            "id": 9,
            "name": "Laundry Detergent",
            "description": "Effective detergent for laundry.",
            "price": "₦350",
            "image": "https://source.unsplash.com/400x300/?laundrydetergent"
          },
          {
            "id": 10,
            "name": "Air Freshener",
            "description": "Fragrant spray for freshening the air.",
            "price": "₦240",
            "image": "https://source.unsplash.com/400x300/?airfreshener"
          }
        ]
      },
      {
        "id": 12,
        "name": "Biscuits",
        "description": "Delicious and crispy biscuits.",
        "imageUrl": "https://source.unsplash.com/400x300/?biscuits",
        "slug": "biscuits",
        "products": [
          {
            "id": 1,
            "name": "Digestive Biscuits",
            "description": "Wheat-based and fiber-rich biscuits.",
            "price": "₦180",
            "image": "https://source.unsplash.com/400x300/?digestivebiscuits"
          },
          {
            "id": 2,
            "name": "Chocolate Chip Biscuits",
            "description": "Buttery biscuits with chocolate chips.",
            "price": "₦200",
            "image": "https://source.unsplash.com/400x300/?chocolatechipbiscuits"
          },
          {
            "id": 3,
            "name": "Shortbread Biscuits",
            "description": "Crumbly and buttery shortbread biscuits.",
            "price": "₦220",
            "image": "https://source.unsplash.com/400x300/?shortbreads"
          },
          {
            "id": 4,
            "name": "Cream Biscuits",
            "description": "Sandwich biscuits with creamy filling.",
            "price": "₦240",
            "image": "https://source.unsplash.com/400x300/?creambiscuits"
          },
          {
            "id": 5,
            "name": "Oat Biscuits",
            "description": "Crunchy and wholesome oat biscuits.",
            "price": "₦210",
            "image": "https://source.unsplash.com/400x300/?oatbiscuits"
          },
          {
            "id": 6,
            "name": "Coconut Biscuits",
            "description": "Biscuits with a tropical coconut flavor.",
            "price": "₦230",
            "image": "https://source.unsplash.com/400x300/?coconutbiscuits"
          },
          {
            "id": 7,
            "name": "Ginger Biscuits",
            "description": "Spicy and aromatic ginger biscuits.",
            "price": "₦250",
            "image": "https://source.unsplash.com/400x300/?gingerbiscuits"
          },
          {
            "id": 8,
            "name": "Custard Cream Biscuits",
            "description": "Biscuits filled with custard cream.",
            "price": "₦270",
            "image": "https://source.unsplash.com/400x300/?custardcreambiscuits"
          },
          {
            "id": 9,
            "name": "Marie Biscuits",
            "description": "Light and crispy Marie biscuits.",
            "price": "₦190",
            "image": "https://source.unsplash.com/400x300/?mariebiscuits"
          },
          {
            "id": 10,
            "name": "Butter Biscuits",
            "description": "Rich and buttery biscuits.",
            "price": "₦260",
            "image": "https://source.unsplash.com/400x300/?butterbiscuits"
          }
        ]
      }
    ],
  
"items":[
  {
    "name": "Carrots",
    "id": 1,
    "price": "₦600/kg",
    "category": "vegetables",
    "image": "/carrot.png",
    "image2": "/35.png"
  },
  {
    "name": "Broccoli",
    "id": 2,
    "price": "₦900/kg",
    "category": "vegetables",
    "image": "/broccoli.jpg",
    "image2": "/20.png"
  },
  {
    "name": "Tomatoes",
    "id": 3,
    "price": "₦500/kg",
    "category": "vegetables",
    "image": "/tomatoes.jpg",
    "image2": "/10.png"
  },
  {
    "name": "Apples",
    "id": 4,
    "price": "₦250/kg",
    "category": "fruits",
    "image": "/apple.jpg",
    "media": "/20.png"
  },
  {
    "name": "Bananas",
    "id": 5,
    "price": "₦700/kg",
    "category": "fruits",
    "image": "/banana.jpg",
    "media": "/35.png"
  },
],
  "deals": [
    {
      "name": "Combo Deal 1",
      "items": [
        { "name": "Apples:", "quantity": 5 },
        { "name": "Oranges:", "quantity": 3 },
        { "name": "Bananas:", "quantity": 5 }
      ],
      "price": "₦1,000",
      "image_url": "https://o.remove.bg/downloads/32071629-bbd0-4501-8440-b10fefc5cb47/download-removebg-preview-removebg-preview.png"
    },
    {
      "name": "Combo Deal 2",
      "items": [
        { "name": "Milk:", "quantity": 1 },
        { "name": "Cereal:", "quantity": 1 },
        { "name": "Bread:", "quantity": 2 }
      ],
      "price": "₦1,500",
      "image_url": "https://o.remove.bg/downloads/3a48f2ea-4d90-4422-a39e-80e712d791c2/download-removebg-preview.png"
    },
    {
      "name": "Combo Deal 3",
      "items": [
        { "name": "Chicken:", "quantity": 2 },
        { "name": "Carrot:", "quantity": 3 },
        { "name": "Potatoes:", "quantity": 3 },
        { "name": "Broccoli:", "quantity": 1 }
      ],
      "price": "₦2,000",
      "image_url": "https://o.remove.bg/downloads/4df92200-51da-4a0e-9760-f25c38069290/images-removebg-preview.png"
    },
    {
      "name": "Combo Deal 4",
      "items": [
        { "name": "Juice:", "quantity": 4 },
        { "name": "Soda:", "quantity": 5 },
        { "name": "water:", "quantity": 3 },
        { "name": "coffee:", "quantity": 2 },
      ],
      "price": "₦2,000",
      "image_url": "https://o.remove.bg/downloads/111be4b5-9559-4948-ad42-7fd3c426dd3e/images-removebg-preview.png"
    },
    {
      "name": "Combo Deal 4",
      "items": [
        { "name": "strawberry flavor:", "quantity": 1 },
        { "name": "chocolate flavor:", "quantity": 1 },
        { "name": "vanilla flavor:", "quantity": 1 },
        { "name": "coconut-flavor:", "quantity": 1 },
      ],
      "price": "₦2,000",
      "image_url": "https://o.remove.bg/downloads/6edcac7b-5caf-4b04-bc45-c1c9fb6562de/download-removebg-preview.png"
    },
    {
      "name": "Combo Deal 5",
      "items": [
        { "name": "cookies:", "quantity": 2 },
        { "name": "biscuits:", "quantity": 2 },
        { "name": "short-bread:", "quantity": 2 },
      ],
      "price": "₦2,000",
      "image_url": "https://o.remove.bg/downloads/eaea5374-f2b1-49fe-b2b7-a2410f2f9ba7/images-removebg-preview.png"
    },
    {
      "name": "Combo Deal 5",
      "items": [
        { "name": "cup-cakes:", "quantity": 6 },
        { "name": "4-inch cake:", "quantity": 1 },
        { "name": "coconut-bread:", "quantity": 1 },
        { "name": "milk-bread:", "quantity": 1 },
      ],
      "price": "₦10,000",
      "image_url": "https://o.remove.bg/downloads/2800f0de-cc9e-4b5c-9d63-aba901e068c5/images-removebg-preview.png"
    }
  ]

}
