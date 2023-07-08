"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import pics from "./favicon.ico";
import pic from "./media/basket.png";
import { TiLocation } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFillBellFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { BsFilterLeft } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { TbHelpHexagon } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { GiStarFormation } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineWorkHistory } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { GiChoice } from "react-icons/gi";
import { BiMessageSquareAdd } from "react-icons/bi";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import { AiOutlineCloseCircle } from "react-icons/ai";
import FoodItem from "./_components/FoodItem";
import { cater } from "/src/app/object";
import object, { categories, foods, items } from "./object";
import FoodList from "./_components/FoodList";
import PopularItems from "./popular-items/page";
import FoodStuff from "./_components/FoodStuff";
import Slider from "./_components/Slider";
import Button from "./_components/Button";
import SearchBar from "./_components/Search";
import Footer from "./_components/Footer";
const newCat = [
  {
    id: 1,
    name: "Carrots",
    description: "Sweet and crunchy carrots.",
    price: "₦310",
    image:
      "https://media.istockphoto.com/id/1251268368/photo/freshly-harvested-homegrown-produce.jpg?s=612x612&w=0&k=20&c=dpPbVac9DrXm213MwAUPjzqmAg-sZQQknPQxprAdgS4=",
  },
  {
    id: 2,
    name: "Tomatoes",
    description: "Juicy and ripe tomatoes.",
    price: "₦290",
    image:
      "https://media.istockphoto.com/id/171589415/photo/tomatoes.jpg?s=612x612&w=0&k=20&c=meLJRFAyGEM6zt6dkpW7uM0x2Wvwr3THCzTA5mFQgFI=",
  },
  {
    id: 3,
    name: "Broccoli",
    description: "Nutritious and tender broccoli florets.",
    price: "₦350",
    image:
      "https://media.istockphoto.com/id/1249204654/photo/fresh-broccoli-on-chopping-board.jpg?s=612x612&w=0&k=20&c=DHQO7sVKhdyKcOCVHFzPk1snVuvjT_GPChqEMls1GOU=",
  },
  {
    id: 4,
    name: "Spinach",
    description: "Leafy and vibrant spinach leaves.",
    price: "₦330",
    image:
      "https://media.istockphoto.com/id/655979026/photo/fresh-harvested-organic-spinach.jpg?s=612x612&w=0&k=20&c=qoMmnp5ICdqWKPYQKo189yG4Ckayy6Rqx4gg0-yMmfI=",
  },
  {
    id: 5,
    name: "Bell Peppers",
    description: "Colorful and crisp bell peppers.",
    price: "₦370",
    image:
      "https://media.istockphoto.com/id/1405490644/photo/vegetables.jpg?s=612x612&w=0&k=20&c=NvT0sdYaQkqonoWQyhz74Zyu6z5dmxqAs0unL2FsvYc=",
  },
  {
    id: 6,
    name: "Cucumbers",
    description: "Cool and refreshing cucumbers.",
    price: "₦320",
    image:
      "https://media.istockphoto.com/id/1045761832/photo/fresh-green-cucumber-salad.jpg?s=612x612&w=0&k=20&c=fd_Nz1zp1oRKZchOSITivJmFkcJCPDNHlp8ifXRG0aM=",
  },
  {
    id: 7,
    name: "Onions",
    description: "Versatile and aromatic onions.",
    price: "₦300",
    image:
      "https://media.istockphoto.com/id/182771555/photo/many-multicolored-groups-of-onions-divided-up-by-color.jpg?s=612x612&w=0&k=20&c=8yVoOf-SWgwr8t3I_FnV_3-33gH9KgBTOgyhljSpJ0A=",
  },
  {
    id: 8,
    name: "Potatoes",
    description: "Starchy and versatile potatoes.",
    price: "₦340",
    image:
      "https://media.istockphoto.com/id/1390936024/photo/the-concept-of-growing-food-fresh-organic-new-potatoes-in-a-farmers-field-a-rich-harvest-of.jpg?s=612x612&w=0&k=20&c=oABJdrnWhMTwPp1Wlunor8Fgb7uNTc-DIwhmflcjlxo=",
  },
  {
    id: 9,
    name: "Lettuce",
    description: "Crisp and fresh lettuce leaves.",
    price: "₦330",
    image:
      "https://media.istockphoto.com/id/1431078994/photo/stack-of-lettuces-on-a-market-stall.jpg?s=612x612&w=0&k=20&c=w6T8NfCltIz2b6_OsSxYh1eCfC_IorIUdKxsU4p5qJ8=",
  },
  {
    id: 10,
    name: "Zucchini",
    description: "Mild and tender zucchini.",
    price: "₦350",
    image:
      "https://media.istockphoto.com/id/157643620/photo/organic-zucchini-vegetables-at-farmers-market-healthy-eating-food-background.jpg?s=612x612&w=0&k=20&c=ihDKDR0v4YoVfevx2Xk0vfAaI__LWwDmxQ5rISJABxw=",
  },
  {
    id: 1,
    name: "Apples",
    description: "Crisp and sweet apples.",
    price: "₦480",
    image:
      "https://media.istockphoto.com/id/1255426019/photo/harvested-red-apples-in-a-basket.jpg?s=612x612&w=0&k=20&c=HnT92hjaLjyiygEILI5y2o4YqvHKTpzu7oNDjaZnpbY=",
  },
  {
    id: 2,
    name: "Bananas",
    description: "Creamy and nutritious bananas.",
    price: "₦420",
    image:
      "https://media.istockphoto.com/id/1197091958/photo/a-bunch-of-whole-ripe-banana.jpg?s=612x612&w=0&k=20&c=qtgpMJIKHtJIuAV6o0qlsayP43THhFPPVSIWU4DSr0g=",
  },
  {
    id: 3,
    name: "Oranges",
    description: "Citrusy and refreshing oranges.",
    price: "₦450",
    image:
      "https://media.istockphoto.com/id/1285898335/photo/ripe-for-the-picking.jpg?s=612x612&w=0&k=20&c=4Eeq8glvQwlxg0OMbCWOIc8mhqaubGfJmgfuuymrbMc=",
  },
  {
    id: 4,
    name: "Strawberries",
    description: "Sweet and juicy strawberries.",
    price: "₦550",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22u6mZWijd4uK8qvNdmy74EwV2GJ5ux83yg&usqp=CAU",
  },
  {
    id: 5,
    name: "Grapes",
    description: "Plump and flavorful grapes.",
    price: "₦590",
    image:
      "https://media.istockphoto.com/id/157505845/photo/red-grapes.jpg?s=612x612&w=0&k=20&c=UjhtLkLJKppo8186Zwb03KdRIsYqeym39qxJBNEX27k=",
  },
  {
    id: 6,
    name: "Mangoes",
    description: "Tropical and succulent mangoes.",
    price: "₦670",
    image:
      "https://media.istockphoto.com/id/1334506513/photo/image-of-wooden-turquoise-chopping-board-pile-of-ripe-tropical-mango-fruit-red-skins-on-wood.jpg?s=612x612&w=0&k=20&c=kHq1RtusLM9GNuoRN-NxaI998WDYNaurTAcCu0VcDEw=",
  },
  {
    id: 7,
    name: "Pineapples",
    description: "Sweet and tangy pineapples.",
    price: "₦620",
    image:
      "https://media.istockphoto.com/id/519049064/photo/sliced-pineapple-on-chopping-board.jpg?s=612x612&w=0&k=20&c=TRrC6AJMy6hjacIWAqmBwlHoVwRPycK2CinqPhsoqjs=",
  },
  {
    id: 8,
    name: "Watermelons",
    description: "Juicy and hydrating watermelons.",
    price: "₦520",
    image:
      "https://media.istockphoto.com/id/530827430/photo/watermelon-sliced-on-wood-background.jpg?s=612x612&w=0&k=20&c=aM-v74JhXI9ESJ6_ko8XtSmtbggHppQmJNzqWOB9AVw=",
  },
  {
    id: 9,
    name: "Blueberries",
    description: "Small and antioxidant-rich blueberries.",
    price: "₦680",
    image:
      "https://media.istockphoto.com/id/108311169/photo/blueberries.jpg?s=612x612&w=0&k=20&c=Y3lLlGAVi76ygoIR0mFgkQvd37kC0qe11i3-_GDCJwI=",
  },
  {
    id: 10,
    name: "Peaches",
    description: "Soft and fragrant peaches.",
    price: "₦530",
    image:
      "https://media.istockphoto.com/id/483134314/photo/peaches-on-tree.jpg?s=612x612&w=0&k=20&c=-qvSrCYSRQDERuhwqfNixjjMOhgIhmeYug-anQO5IDo=",
  },
  {
    id: 1,
    name: "Fresh Milk",
    description: "Pure and creamy fresh milk.",
    price: "₦760",
    image:
      "https://media.istockphoto.com/id/1297005860/photo/raw-milk-being-poured-into-container.jpg?s=612x612&w=0&k=20&c=5Xumh49_zYs9GjLkGpZXM41tS17K8M-svN9jLMv0JpE=",
  },
  {
    id: 2,
    name: "Almond Milk",
    description: "Plant-based almond milk.",
    price: "₦820",
    image:
      "https://media.istockphoto.com/id/505080759/photo/organic-white-almond-milk.jpg?s=612x612&w=0&k=20&c=x6lQxY2kxZT7FyVRCgLH_-5feNwkbYI8ysiN5zBrHhM=",
  },
  {
    id: 3,
    name: "Eggs (Dozen)",
    description: "Farm-fresh eggs.",
    price: "₦560",
    image:
      "https://media.istockphoto.com/id/1353075217/photo/fresh-eggs-in-box-closeup-on-white-background.jpg?s=612x612&w=0&k=20&c=0xOUmg9u98amMPqge9g77JcaTai7B1ewNHl0baz9tUM=",
  },
  {
    id: 4,
    name: "Greek Yogurt",
    description: "Creamy and tangy Greek yogurt.",
    price: "₦640",
    image:
      "https://media.istockphoto.com/id/154955692/photo/greek-yogurt-with-spoon.jpg?s=612x612&w=0&k=20&c=1KO9j4Y70g7rbjtoYpWvw2-gaJLcuCZauZ1ohfhMRv0=",
  },
  {
    id: 5,
    name: "Cheese",
    description: "Variety of artisan cheeses.",
    price: "₦890",
    image:
      "https://media.istockphoto.com/id/178618979/photo/grated-parmesan-cheese-and-metal-grater.jpg?s=612x612&w=0&k=20&c=zXSxy3GnD_bCpfi-tVllj9sI59qIvpS5yJ75EaGO1ug=",
  },
  {
    id: 6,
    name: "Butter",
    description: "Rich and creamy butter.",
    price: "₦480",
    image:
      "https://media.istockphoto.com/id/1338222224/photo/butter-blocks-and-pieces-on-wooden-table-copy-space.jpg?s=612x612&w=0&k=20&c=65ZYwALchrY4iXYkfrchnnWKCpuP20TZvXnSSmWnBPM=",
  },
  {
    id: 7,
    name: "Yogurt",
    description: "Delicious and creamy yogurt.",
    price: "₦520",
    image: "/yo.png",
  },
  {
    id: 8,
    name: "Soy Milk",
    description: "Plant-based soy milk.",
    price: "₦750",
    image:
      "https://media.istockphoto.com/id/465956984/photo/soy-beans-on-a-wooden-table-with-a-glass-of-milk-on-the-side.jpg?s=612x612&w=0&k=20&c=Ii_smasO2iR_otweXTguWGyIjJjuZuK0PycaBLWXwQw=",
  },
  {
    id: 9,
    name: "Coconut Milk",
    description: "Creamy and tropical coconut milk.",
    price: "₦680",
    image:
      "https://media.istockphoto.com/id/502055051/photo/coconut-milk-with-fresh-coconut-for-alternative-therapy.jpg?s=612x612&w=0&k=20&c=XJyYDmrDhMtyc4cVt5JlUYxGpc7XnPjHKKcCRCTRWus=",
  },
  {
    id: 10,
    name: "Condensed Milk",
    description: "Thick and sweetened condensed milk.",
    price: "₦620",
    image:
      "https://media.istockphoto.com/id/1428954490/photo/a-cup-of-iced-coffee-with-cream.jpg?s=612x612&w=0&k=20&c=KhjVQxdC37u7Nc3Gy0UE497oVGFyB9-6G2S-DfC_x54=",
  },
  {
    id: 1,
    name: "Bottled Water",
    description: "Pure and refreshing bottled water.",
    price: "₦210",
    image:
      "https://media.istockphoto.com/id/494501198/photo/buying-bottle-of-water.jpg?s=612x612&w=0&k=20&c=Cxut2vABifKlzXCRXH5o37gXBXRE5fcA4yve2IwjRgs=",
  },
  {
    id: 2,
    name: "Carbonated Water",
    description: "Bubbly and effervescent carbonated water.",
    price: "₦290",
    image:
      "https://media.istockphoto.com/id/1336469327/photo/mineral-water.jpg?s=612x612&w=0&k=20&c=jB8BufQpnvybL7amIIqlfKGwlKB8fwIL-zsMhb3B-Lo=",
  },
  {
    id: 3,
    name: "Soft Drinks",
    description: "Assorted soft drinks.",
    price: "₦330",
    image:
      "https://media.istockphoto.com/id/802667754/photo/cold-bottles-of-various-drinks-in-the-ice-bucket.jpg?s=612x612&w=0&k=20&c=mAfKYn7CewiBSzqhCnusq0_T_BqXmpbdLUiedDpE6UE=",
  },
  {
    id: 4,
    name: "Fruit Juice",
    description: "Freshly squeezed fruit juice.",
    price: "₦380",
    image:
      "https://media.istockphoto.com/id/654357990/photo/healthy-fruit-and-vegetable-smoothies.jpg?s=612x612&w=0&k=20&c=79rZMdsGAZAqmOAiIt5Z4rcP5e4n9_LlK1K6qclxBlI=",
  },
  {
    id: 5,
    name: "Tea",
    description: "Variety of tea flavors.",
    price: "₦290",
    image:
      "https://media.istockphoto.com/id/1370454779/photo/milk-bubble-tea-with-tapioca-pearls-in-glass-gray-background.jpg?s=612x612&w=0&k=20&c=bwRqKLOgdieqK0Va5DPPkF1t_eKkwJ3-obSq1fhfbuM=",
  },
  {
    id: 6,
    name: "Coffee",
    description: "Rich and aromatic coffee.",
    price: "₦420",
    image:
      "https://media.istockphoto.com/id/1400194993/photo/cappuccino-art.jpg?s=612x612&w=0&k=20&c=_nYOcyQ15cYEeUYgUzkC5qG946nkCwU06NiWKt1s8SE=",
  },
  {
    id: 7,
    name: "Energy Drinks",
    description: "Boost of energy in a can.",
    price: "₦450",
    image:
      "https://media.istockphoto.com/id/1371981216/photo/browsing-for-deals.jpg?s=612x612&w=0&k=20&c=q9P8MgiJsz94OABkDUbeleMhbineNKniKo8Qt1Z8Ffk=",
  },
  {
    id: 8,
    name: "Smoothies",
    description: "Blended fruit smoothies.",
    price: "₦520",
    image:
      "https://media.istockphoto.com/id/1325918814/photo/set-of-different-milkshakes-in-disposable-plastic-glasses.jpg?s=612x612&w=0&k=20&c=5SDOf855Yi8dGDAghWPPOHiNLgR4FkZiqsR1lvh5YhM=",
  },
  {
    id: 9,
    name: "Iced Tea",
    description: "Refreshing iced tea.",
    price: "₦350",
    image:
      "https://media.istockphoto.com/id/1494834792/photo/ice-tea-with-lemon-and-mint-herb.jpg?s=612x612&w=0&k=20&c=Uxw7aBRnGPL_18IXJrggbCEOc3UHOIkc7lPc30IB9PQ=",
  },
  {
    id: 10,
    name: "Sports Drinks",
    description: "Rehydrating sports drinks.",
    price: "₦390",
    image:
      "https://media.istockphoto.com/id/1340683601/photo/sports-energy-drinks-sport-beverage-on-a-gray-concrete-background-it-usually-contains-salt.jpg?s=612x612&w=0&k=20&c=fu06ayJdqROhEAx52FHgSrl4XTC45mx5hrk3ffAGCkE=",
  },
  {
    id: 1,
    name: "Chocolate Cake",
    description: "Rich and decadent chocolate cake.",
    price: "₦850",
    image:
      "https://media.istockphoto.com/id/1191458812/photo/chocolate-layer-cake.jpg?s=612x612&w=0&k=20&c=2plIArpL-W7A26kOafqp5cVY7VznJwbO4YpqNfah8yY=",
  },
  {
    id: 2,
    name: "Vanilla Cake",
    description: "Classic and fluffy vanilla cake.",
    price: "₦780",
    image:
      "https://media.istockphoto.com/id/880443720/photo/vanilla-sponge-cake-with-cream-and-white-chocolate-decorate-sliced-piece-of-cake-on-white.jpg?s=612x612&w=0&k=20&c=FtDrYkYmUnXu54zPAZ-XCvhLwJ4nnEWC8zae8i-AFk4=",
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    description: "Velvety and indulgent red velvet cake.",
    price: "₦920",
    image:
      "https://media.istockphoto.com/id/484431240/photo/red-velvet-cake.jpg?s=612x612&w=0&k=20&c=1K0jbII9O2zeATppnhfOK2fj3bDgqfm70eX83NLU0zk=",
  },
  {
    id: 4,
    name: "Carrot Cake",
    description: "Moist and spiced carrot cake.",
    price: "₦890",
    image:
      "https://media.istockphoto.com/id/1170788512/photo/slice-of-homemade-carrot-cake-with-cream-cheese-frosting-side-view-table-scene-against-white.jpg?s=612x612&w=0&k=20&c=0MisjjRRS9OG1qN1FqwXNnoZfJYkab56u8mZblR06AY=",
  },
  {
    id: 5,
    name: "Cheesecake",
    description: "Creamy and smooth cheesecake.",
    price: "₦950",
    image:
      "https://media.istockphoto.com/id/1428437700/photo/mini-cookies-and-cream-cheesecakes.jpg?s=612x612&w=0&k=20&c=JhX88hid7ZZQDRS5I2eTv8mu-DJtqpcNXp9spaMi4m8=",
  },
  {
    id: 6,
    name: "Fruitcake",
    description: "Loaded with dried fruits and nuts.",
    price: "₦830",
    image:
      "https://media.istockphoto.com/id/1418777661/photo/christmas-fruit-cake.jpg?s=612x612&w=0&k=20&c=4a-nvywnauQlBKANvrQL-GgT1abppFRrfIgilbNA16Y=",
  },
  {
    id: 7,
    name: "Coconut Cake",
    description: "Flavorful and tropical coconut cake.",
    price: "₦870",
    image:
      "https://media.istockphoto.com/id/182175095/photo/sliced-coconut-cake.jpg?s=612x612&w=0&k=20&c=XbYO_x9-jIm-LQq8ZsC2XMkVPhksFTJ2zOA6qVYVGvo=",
  },
  {
    id: 1,
    name: "Vanilla Ice Cream",
    description: "Classic and creamy vanilla ice cream.",
    price: "₦560",
    image:
      "https://media.istockphoto.com/id/165206308/photo/ice-cream.jpg?s=612x612&w=0&k=20&c=T34LOeNXw11AX8r_bKf4hstIv9T85HXUtM9_VocZldg=",
  },
  {
    id: 2,
    name: "Chocolate Ice Cream",
    description: "Rich and velvety chocolate ice cream.",
    price: "₦610",
    image:
      "https://media.istockphoto.com/id/153560334/photo/delicious-gourmet-chocolate-ice-cream.jpg?s=612x612&w=0&k=20&c=0V7LrfZGBHBddNmcOCCOza-mhrTV_ONtgqgK_AxExWU=",
  },
  {
    id: 3,
    name: "Strawberry Ice Cream",
    description: "Sweet and fruity strawberry ice cream.",
    price: "₦590",
    image:
      "https://media.istockphoto.com/id/1329779448/photo/tasty-blackberry-ice-cream-on-a-base.jpg?s=612x612&w=0&k=20&c=9w6KnzUj9huT8yVhQ8lJJ4NMGlIxGzjwipGqu-uRDHI=",
  },
  {
    id: 4,
    name: "Mint Chocolate Chip Ice Cream",
    description: "Refreshing mint ice cream with chocolate chips.",
    price: "₦640",
    image:
      "https://media.istockphoto.com/id/1279996775/photo/extreme-close-up-of-green-ice-cream-being-scooped-up.jpg?s=612x612&w=0&k=20&c=iztwe-L55mj5Y353SCvmTIkx0o1Y2PYuRwpksDHyCZY=",
  },
  {
    id: 5,
    name: "Cookie Dough Ice Cream",
    description: "Creamy vanilla ice cream with chunks of cookie dough.",
    price: "₦690",
    image:
      "https://media.istockphoto.com/id/864680082/photo/editable-chocolate-chip-cookie-dough-cone.jpg?s=612x612&w=0&k=20&c=4dMUB2EA2W3GEiAop3unutfSkfsbfceapvgqamEvF1U=",
  },
  {
    id: 6,
    name: "Salted Caramel Ice Cream",
    description: "Smooth and sweet salted caramel ice cream.",
    price: "₦630",
    image:
      "https://media.istockphoto.com/id/1001706138/photo/salted-caramel-ice-cream-ice-cream-with-lucuma-peruvian-fruit-with-natural-caramel-like-taste.jpg?s=612x612&w=0&k=20&c=9zC8-vnsf5mNS2grOU2kDyatCyJ9myogskX-yBnewG0=",
  },
  {
    id: 7,
    name: "Coffee Ice Cream",
    description: "Bold and aromatic coffee-flavored ice cream.",
    price: "₦600",
    image:
      "https://media.istockphoto.com/id/1224712052/photo/glaces-ice-cream.jpg?s=612x612&w=0&k=20&c=ohDvsfWv_LDwcnmG5ciPD-dIPRzRG64eTbLY-9Kaxug=",
  },
  {
    id: 1,
    name: "Bread",
    description: "Assorted freshly baked bread.",
    price: "₦320",
    image:
      "https://media.istockphoto.com/id/1404832041/photo/bakery-shop-interior-view-and-shelves-full-with-freshly-baked-pastries-bread-bagels-muffin.jpg?s=612x612&w=0&k=20&c=ACA62YW1SyiAUOkyO1NKt97buk8fj6HhRFYrFi76HX4=",
  },
  {
    id: 2,
    name: "Croissant",
    description: "Flaky and buttery croissant.",
    price: "₦350",
    image:
      "https://media.istockphoto.com/id/1418644931/photo/heap-of-freshly-baked-croissants-in-a-bakery.jpg?s=612x612&w=0&k=20&c=0PVbj9upnAoxaR9DImH6do00td7T9H1aoU231Of8PSs=",
  },
  {
    id: 3,
    name: "Baguette",
    description: "Crusty and long French baguette.",
    price: "₦380",
    image:
      "https://media.istockphoto.com/id/1385875539/photo/rustic-bread-traditional.jpg?s=612x612&w=0&k=20&c=TJaw5F6BsRvXpAu3H8d3Giw9FzflaJeg_RCNHhDfAXc=",
  },
  {
    id: 4,
    name: "Muffin",
    description: "Moist and flavorful muffins.",
    price: "₦290",
    image:
      "https://media.istockphoto.com/id/627796786/photo/cranberry-muffins.jpg?s=612x612&w=0&k=20&c=turJl9prH3gKcBljniTMMiwDb51WF81auhycRmY1pBA=",
  },
  {
    id: 5,
    name: "Cinnamon Roll",
    description: "Sweet and gooey cinnamon rolls.",
    price: "₦420",
    image:
      "https://media.istockphoto.com/id/1203154458/photo/cinnamon-rolls-traditional-swedish-buns.jpg?s=612x612&w=0&k=20&c=5wPGxAflTH9Qnpdp8ONIWcKYEJFOz2Jv0T2glYSUnu4=",
  },
  {
    id: 6,
    name: "Scone",
    description: "Buttery and crumbly scones.",
    price: "₦390",
    image:
      "https://media.istockphoto.com/id/1063964056/photo/biscuits.jpg?s=612x612&w=0&k=20&c=qEjOh0UeTtx3zNy-WekwW4v4fJHwZRRWzsmjjOISKnY=",
  },
  {
    id: 7,
    name: "Pretzel",
    description: "Soft and salty pretzels.",
    price: "₦360",
    image:
      "https://media.istockphoto.com/id/1450914473/photo/freshly-baked-homemade-pretzels.jpg?s=612x612&w=0&k=20&c=LyTsuTcBRJg8ffcOs4ePTwvMci83eFPYr9b7RMu_Nbk=",
  },
  {
    id: 1,
    name: "Potato Chips",
    description: "Crispy and savory potato chips.",
    price: "₦180",
    image:
      "https://media.istockphoto.com/id/1140122033/photo/potato-chips-in-bowl-on-wooden-table.jpg?s=612x612&w=0&k=20&c=owSMHonIasGtpnHDH82x7KSuXZMI8uOFU4tOy7IDRHE=",
  },
  {
    id: 2,
    name: "Popcorn",
    description: "Light and fluffy popcorn.",
    price: "₦150",
    image:
      "https://media.istockphoto.com/id/121746401/photo/popcorn-series.jpg?s=612x612&w=0&k=20&c=w9BXkm34Z5RKTE9YYJtGXURBJjn4N1QdYh0-Ow1zVCw=",
  },
  {
    id: 3,
    name: "Pretzels",
    description: "Crunchy and salty pretzels.",
    price: "₦210",
    image:
      "https://media.istockphoto.com/id/1450914473/photo/freshly-baked-homemade-pretzels.jpg?s=612x612&w=0&k=20&c=LyTsuTcBRJg8ffcOs4ePTwvMci83eFPYr9b7RMu_Nbk=",
  },
  {
    id: 4,
    name: "Nachos",
    description: "Cheesy and crunchy nachos.",
    price: "₦250",
    image:
      "https://media.istockphoto.com/id/1464174156/photo/close-up-image-of-homemade-loaded-nachos-covered-in-melted-mozzarella-cheese-cherry-tomatoes.jpg?s=612x612&w=0&k=20&c=KW8bJYshOmE9IdJpCY_GXdpdTRHu0I2xdGNZR_-XUsk=",
  },
  {
    id: 5,
    name: "Trail Mix",
    description: "Nutty and fruity trail mix.",
    price: "₦280",
    image:
      "https://media.istockphoto.com/id/167220669/photo/trail-mix-in-white-bowl.jpg?s=612x612&w=0&k=20&c=RLuKzHO-RfGtVQKrziZwaRY0tBH689B4eka45nrlTYE=",
  },
  {
    id: 6,
    name: "Crackers",
    description: "Crisp and savory crackers.",
    price: "₦190",
    image: "/c.png",
  },
  {
    id: 1,
    name: "Rice",
    description: "Long-grain and fluffy rice.",
    price: "₦400",
    image:
      "https://media.istockphoto.com/id/153737841/photo/rice.jpg?s=612x612&w=0&k=20&c=lfO7iLT0UsDDzra0uBOsN1rvr2d5OEtrG2uwbts33_c=",
  },
  {
    id: 2,
    name: "Pasta",
    description: "Assorted pasta shapes.",
    price: "₦350",
    image:
      "https://media.istockphoto.com/id/478744964/photo/mix-of-pasta-on-wood.jpg?s=612x612&w=0&k=20&c=QP1wI6_Iw1cVzjpn-WQzG5Ivi9rdlvkxTtEWLBiONPY=",
  },
  {
    id: 3,
    name: "Quinoa",
    description: "Nutritious and versatile quinoa.",
    price: "₦520",
    image:
      "https://media.istockphoto.com/id/1298375955/photo/mix-of-red-black-and-white-quinoa-seeds-isolated-on-white-background-copy-space.jpg?s=612x612&w=0&k=20&c=WLZb6PLbyC_EDvn7lWxiVKpOcWYwka40jdWHYVg4Cv0=",
  },
  {
    id: 4,
    name: "Oats",
    description: "Heart-healthy and fiber-rich oats.",
    price: "₦450",
    image:
      "https://media.istockphoto.com/id/899796524/photo/oat-flakes-in-a-glass-bowl.jpg?s=612x612&w=0&k=20&c=oSr4IB9r2EIwn24HSgT6mRgGGSpfmgBJkBHAWKoN2W8=",
  },
  {
    id: 5,
    name: "Couscous",
    description: "Quick-cooking and flavorful couscous.",
    price: "₦480",
    image:
      "https://media.istockphoto.com/id/1369610164/photo/couscous-in-an-antique-bowl.jpg?s=612x612&w=0&k=20&c=bOw8O-XZCfiKRuShXY3Fdx9TPezQ81CzCmpFH03KO5s=",
  },
  {
    id: 6,
    name: "Barley",
    description: "Hearty and nutritious barley.",
    price: "₦510",
    image:
      "https://media.istockphoto.com/id/476014084/photo/barley.jpg?s=612x612&w=0&k=20&c=OblXaOxRnZeamF4yGFDsUJOf9rFtptK63vcytEfPiYo=",
  },
  {
    id: 7,
    name: "Bulgur",
    description: "Whole grain bulgur wheat.",
    price: "₦470",
    image:
      "https://media.istockphoto.com/id/627719048/photo/bulgur-raw-wheat-grains-in-wooden-bowl.jpg?s=612x612&w=0&k=20&c=7ihp4MegbIW_2dQzq6VP77RIuSHnlDBYdHSSF7zjack=",
  },
  {
    id: 8,
    name: "Millet",
    description: "Small and nutrient-dense millet.",
    price: "₦490",
    image:
      "https://media.istockphoto.com/id/514465412/photo/healthy-food-ragi-or-finger-millet.jpg?s=612x612&w=0&k=20&c=6JPbyc05dd2bt1-N7mid7omayRBXh1NkLExgTTl93XA=",
  },
  {
    id: 9,
    name: "Brown Rice",
    description: "Nutty and wholesome brown rice.",
    price: "₦430",
    image: "https://source.unsplash.com/400x300/?brownrice",
  },
  {
    id: 10,
    name: "Wild Rice",
    description: "Flavorful and unique wild rice.",
    price: "₦460",
    image:
      "https://media.istockphoto.com/id/486283864/photo/raw-black-wild-rice.jpg?s=612x612&w=0&k=20&c=Nx4OCEZn3tEH0yHDpi2w7TFPzHeIRcbKa3iS7L79zqw=",
  },
  {
    id: 2,
    name: "Mozzarella Cheese",
    description: "Smooth and melty mozzarella cheese.",
    price: "₦620",
    image:
      "https://media.istockphoto.com/id/857972576/photo/cheese.jpg?s=612x612&w=0&k=20&c=nkg4JTGDKPp0Taae-Oe57ogCjuPdc9it8Mx3Sad-o8w=",
  },
  {
    id: 3,
    name: "Parmesan Cheese",
    description: "Grated and savory parmesan cheese.",
    price: "₦590",
    image:
      "https://media.istockphoto.com/id/880792576/photo/an-aged-authentic-parmigiano-reggiano-parmesan-cheese-with-cheese-knife.jpg?s=612x612&w=0&k=20&c=1JNEgf1e7MWHPzfjpyz0Dd3A0cC0NUpR0JDT6jvngC8=",
  },
  {
    id: 4,
    name: "Swiss Cheese",
    description: "Hole-y and mild Swiss cheese.",
    price: "₦640",
    image:
      "https://media.istockphoto.com/id/182787095/photo/cheese.jpg?s=612x612&w=0&k=20&c=1AIu5JZ8D14BPcMghUkc1_wl1Iv9QkyrWEPoxZnQ8Ng=",
  },
  {
    id: 5,
    name: "Blue Cheese",
    description: "Creamy and pungent blue cheese.",
    price: "₦690",
    image:
      "https://media.istockphoto.com/id/155601400/photo/ripe-stilton-on-cheeseboard.jpg?s=612x612&w=0&k=20&c=17vx3Ka-Hq0XwhYC1bfQBMT0lvDT-8OLV93CX4EoPBc=",
  },
  {
    id: 6,
    name: "Feta Cheese",
    description: "Tangy and crumbly feta cheese.",
    price: "₦630",
    image:
      "https://media.istockphoto.com/id/1494237787/photo/greek-feta-cheese.jpg?s=612x612&w=0&k=20&c=D39GC40DlxKeqisfV-NL9ASFeh2s2gy-u1hHglfQ09c=",
  },
  {
    id: 1,
    name: "All-Purpose Cleaner",
    description: "Versatile cleaner for multiple surfaces.",
    price: "₦250",
    image:
      "https://media.istockphoto.com/id/1368359078/photo/unrecognizable-female-employee-cleaning-the-store-window.jpg?s=612x612&w=0&k=20&c=waXh13K92Ks56Equb9bftgH8mWBu7UdGGuOD_ANr1io=",
  },
  {
    id: 2,
    name: "Glass Cleaner",
    description: "Streak-free cleaner for glass surfaces.",
    price: "₦280",
    image:
      "https://media.istockphoto.com/id/1150282133/photo/cleaning-window-pane-with-detergent.jpg?s=612x612&w=0&k=20&c=BkzVas8qZ_VLxLDWpDAPbVSDRXgRFMxbI3_NHcamUfk=",
  },
  {
    id: 3,
    name: "Floor Cleaner",
    description: "Effective cleaner for all types of floors.",
    price: "₦320",
    image:
      "https://media.istockphoto.com/id/1246186959/photo/woman-with-cleaning-agent-and-brush-wet-cleaning-floor.jpg?s=612x612&w=0&k=20&c=THSEwmjNyfvvooavVXBKA3Xom9F_miw8Lv8bAtm-gOU=",
  },
  {
    id: 4,
    name: "Toilet Bowl Cleaner",
    description: "Powerful cleaner for toilet bowls.",
    price: "₦290",
    image:
      "https://media.istockphoto.com/id/172409058/photo/toilet-cleaning.jpg?s=612x612&w=0&k=20&c=Dv95vNceup4PCo0Ms0CdkbMgu1Qw8Qdog_oM2It_sKU=",
  },
  {
    id: 5,
    name: "Kitchen Cleaner",
    description: "Degreaser for kitchen surfaces.",
    price: "₦310",
    image:
      "https://media.istockphoto.com/id/1219787028/photo/person-cleaning-the-stove-in-kitchen.jpg?s=612x612&w=0&k=20&c=ZcCmEiHyoDPHi127Ahx-yp45OMM_LQIXXMg_eCiGe0c=",
  },
  {
    id: 5,
    name: "Oat Biscuits",
    description: "Crunchy and wholesome oat biscuits.",
    price: "₦210",
    image:
      "https://media.istockphoto.com/id/1300994088/photo/homemade-chocolate-chip-cookies-table.jpg?s=612x612&w=0&k=20&c=ep6ZrjwwyyCjDZcCbe9nWmCP_lspxEqqUB7EcGokRag=",
  },
  {
    id: 6,
    name: "Coconut Biscuits",
    description: "Biscuits with a tropical coconut flavor.",
    price: "₦230",
    image:
      "https://media.istockphoto.com/id/1186718126/photo/7-layer-coconut-dessert-squares.jpg?s=612x612&w=0&k=20&c=Dp4sJ1aE6wk8RBoQ9s-yMLQzOD2w0Q8S3JkmyH_N5UE=",
  },
  {
    id: 7,
    name: "Ginger Biscuits",
    description: "Spicy and aromatic ginger biscuits.",
    price: "₦250",
    image:
      "https://media.istockphoto.com/id/184872575/photo/gingerbread-ornaments.jpg?s=612x612&w=0&k=20&c=ITy6_K0ks4KsBJ0-SRLRfcUfI7f5v0vpKFGn-YDchEU=",
  },
  {
    id: 8,
    name: "Custard Cream Biscuits",
    description: "Biscuits filled with custard cream.",
    price: "₦270",
    image:
      "https://media.istockphoto.com/id/1472804413/photo/parisbrest-choux-pastry-with-praline-cr%C3%A8me-mousseline.jpg?s=612x612&w=0&k=20&c=yZAH-ku_gVkmkAH-nYNbcUzHNz8-p6TcDT_sNq1JTzE=",
  },
  {
    id: 9,
    name: "Marie Biscuits",
    description: "Light and crispy Marie biscuits.",
    price: "₦190",
    image:
      "https://media.istockphoto.com/id/1454797863/photo/heap-of-wheat-biscuits-as-background.jpg?s=612x612&w=0&k=20&c=w9dUwjVieg3BeFqUupIkbISWyV3CGdFo-HNXK0tPZO0=",
  },
  {
    id: 10,
    name: "Butter Biscuits",
    description: "Rich and buttery biscuits.",
    price: "₦260",
    image:
      "https://media.istockphoto.com/id/638199080/photo/homemade-sweet-shortbread-cookies.jpg?s=612x612&w=0&k=20&c=WzZje66wSoym4rERB-98YT-MYctp-byjfaRESM0jXgI=",
  },
];

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const NewCartItems = [...cartItems, item];
    setCartItems(NewCartItems);
    localStorage.setItem("cartItems", JSON.stringify(NewCartItems));
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    return Menu;
  };

  return (
    <div className="text-[20px] mt-3">
      <div className="flex flex-col-1 justify-between ml-6 mr-6">
        <div>
          <li onClick={handleMenu} className="sm:hidden cursor-pointer ">
            <BsFilterLeft size={40} />
          </li>{" "}
          <div
            className={
              menuOpen
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#626260] p-10 ease-in overflow-auto z-50"
                : "fixed left-[-100%] top-0 p-10 ease-in h-screen "
            }
          >
            <div className="flex w-full items-center justify-end">
              <span onClick={handleMenu} className="cursor-pointer pl-24">
                <AiOutlineCloseCircle size={30} />
              </span>
            </div>
            <div>
              <Image
                width={200}
                height={250}
                src={pics}
                alt="icon"
                className="border rounded-full mr-4 "
              />
              <div className="flex-col mt-8 bg-[#626260] text-white">
                <h1 className="gap-5 text-2xl font-bold mb-5">
                  Welcome Sharon!
                </h1>
                <ul className="gap-6 pb-5 md:text-2xl text-lg cursor-pointer ">
                  <li className="flex gap-5 mt-8 ">
                    <span>
                      {" "}
                      <GiChoice size={30} />{" "}
                    </span>
                    Your Last Choice
                  </li>
                  <Link href="/Offers">
                    <li className="flex gap-5 mt-8">
                      <span>
                        {" "}
                        <MdLocalOffer size={30} />{" "}
                      </span>
                      Offers & Promotions
                    </li>{" "}
                  </Link>
                  <li className="flex gap-5 mt-8">
                    <span>
                      {" "}
                      <MdOutlineWorkHistory size={30} />{" "}
                    </span>
                    Order History
                  </li>
                  <li className="flex gap-5 mt-8">
                    <span>
                      {" "}
                      <IoIosPeople size={30} />{" "}
                    </span>
                    Refer & Earn
                  </li>
                  <Link href="/Contact-us">
                    <li className="flex gap-5 mt-8">
                      <span>
                        {" "}
                        <FiPhoneCall size={30} />{" "}
                      </span>
                      Contact Us
                    </li>
                  </Link>
                  <li className="flex gap-5 mt-8">
                    <span>
                      {" "}
                      <TbHelpHexagon size={30} />{" "}
                    </span>
                    Help Center
                  </li>
                  <li className="flex gap-5 mt-8">
                    <span>
                      {" "}
                      <GiStarFormation size={30} />{" "}
                    </span>
                    Rate Us
                  </li>
                  <Link href="/About">
                    <li className="flex gap-5 mt-8">
                      {" "}
                      <span>
                        {" "}
                        <FcAbout size={30} />{" "}
                      </span>
                      About Us{" "}
                    </li>{" "}
                  </Link>
                  <li className="flex gap-5 mt-8">
                    <span className="">
                      {" "}
                      <FiLogOut size={30} />{" "}
                    </span>
                    Log Out
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="ml-[20%] bg-inherit text-black">
          <h1 className="ml-[15%] text-white font-bold">Location</h1>
          <span className="flex">
            <TiLocation size={20} />
            <select name="usa" id="" className="bg-transparent font-bold mr-6">
              <option value="Nigeria">Nigeria,Lagos</option>
              <option value="Australia">Australia, Sydney</option>
              <option value="Dubai">UAE, Dubai</option>
              <option value="Europe">Europe, Italy</option>
              <option value="paris">France,Paris</option>
              <option value="Asia">Asia, South-Korea</option>
            </select>
          </span>
        </section>
        <span className="mr-5 p-2">
          <BsFillBellFill size={30} style={{ color: "white" }} />
        </span>
      </div>
      <div>
        <div>
          <SearchBar data={newCat} />
        </div>
      </div>
      <div className="border border-[#626260] md:text-lg text-sm font-bold rounded-lg">
        <div className="ml-6 mr-6 mt-10">
          <section className="flex justify-between mb-2">
            <h1>Categories</h1>
            <Link href="/Categories">
              <p className="animate-pulse font-bold">see all</p>{" "}
            </Link>
          </section>
          <div className=" gap-3 md:max-w-[640px] max-w-[480px]">
            <div className="grid grid-cols-4 gap-4">
              {categories.slice(0, 4).map((cat) => {
                return (
                  <Link key={cat.id} href={`/Categories/${cat.slug}`}>
                    <div className="flex flex-col ">
                      <Image
                        alt="Product Image"
                        width={600}
                        height={-1}
                        style={{ objectFit: "cover" }}
                        src={cat.image}
                        className={`border rounded-md`}
                      />
                      <p> {cat.name} </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="ml-6 mr-6 mt-10">
            <section className="flex justify-between mb-2 ">
              <h1>Deals</h1>
              <Link href="/Deals">
                <p className="animate-pulse font-bold">see all</p>
              </Link>
            </section>
            <div className="grid grid-cols-2 mr-6 ml-6 border md:w-[500px] w-[300px] bg-white text-black rounded-xl ">
              <h2 className="md:text-xl text-md font-bold mx-10 mb-5 pt-5">
                50% off <br />
                On Grocery Combo packs
              </h2>
              <aside className="ml-[50%] grid-cols-1 my-6">
                <Image
                  className=""
                  src={pic}
                  alt="food"
                  width={120}
                  height={100}
                />{" "}
              </aside>
              <Link href="/Deals">
                <button className="bg-green-500 hover:bg-[#626260] border rounded-md  ml-6 md:mb-1 mb-6 w-[150px] font-bold">
                  Order now
                </button>
              </Link>
            </div>
          </div>

          <div className="ml-6 mr-6 mt-10">
            <section className="flex justify-between text-xl">
              <h1>Popular Items</h1>
              <Link href="/popular-items">
                <p className="animate-pulse font-bold">see all</p>
              </Link>
            </section>
            <div className="gap-4">
              <Slider slides={FoodStuff} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
