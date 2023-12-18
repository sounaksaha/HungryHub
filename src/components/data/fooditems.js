import { FoodCategory } from '../constants';

import CheeseCakeImg from '../../static/images/fooditemsimages/cheesecake.jpg';
import ClassicBurgerImg from '../../static/images/fooditemsimages/classicburger.jpg';
import PepperoniPizzaImg from '../../static/images/fooditemsimages/pepperonipizza.jpg';
import ChocolateBrownieImg from '../../static/images/fooditemsimages/chocolatebrownie.jpg';
import ChickenAlfredoPastaImg from '../../static/images/fooditemsimages/chickenalfredopasta.jpg';
import SushiPlatterImg from '../../static/images/fooditemsimages/sushiplatter.jpg';
import VeggieWrapImg from '../../static/images/fooditemsimages/veggiewrap.jpg';
import MangoLassiImg from '../../static/images/fooditemsimages/mangolassi.jpg';
import FriedRiceImg from '../../static/images/fooditemsimages/friedrice.jpg';
import ChilliPaneerImg from '../../static/images/fooditemsimages/chillipaneer.jpg';
import TiramisuImg from '../../static/images/fooditemsimages/tiramisu.jpg';
import BBQRibsImg from '../../static/images/fooditemsimages/bbqribs.jpg';
import PadThaiNoodlesImg from '../../static/images/fooditemsimages/padthainoodles.jpg';
import MagaritaCocktailImg from '../../static/images/fooditemsimages/margaritacocktail.jpg';
import FalaFelWrapImg from '../../static/images/fooditemsimages/falafelwrap.jpg';
import ButterChickenImg from '../../static/images/fooditemsimages/butterchicken.jpg'
import SmoresImg from '../../static/images/fooditemsimages/smores.jpg';
import TeriyakiSalmonImg from '../../static/images/fooditemsimages/teriyakisalmon.jpg';
import CapreseSaladImg from '../../static/images/fooditemsimages/capresesalad.jpg';
import PhoImg from '../../static/images/fooditemsimages/pho.jpg';
import CannoliImg from '../../static/images/fooditemsimages/cannoli.jpg';
import MargheritaPizzaImg from '../../static/images/fooditemsimages/margheritapizza.jpg';
import CholeBhatureImg from '../../static/images/fooditemsimages/cholebhature.jpg';
import PavBhajiImg from '../../static/images/fooditemsimages/pavbhaji.jpg';
import FriedChickenImg from '../../static/images/fooditemsimages/friedrice.jpg';
import AlooParathaImg from '../../static/images/fooditemsimages/alooparatha.jpg';
import BananaLassiImg from '../../static/images/fooditemsimages/bananalassi.jpg';
import RasmalaiImg from '../../static/images/fooditemsimages/rasmalai.jpg';
import GulabJamunImg from '../../static/images/fooditemsimages/gulabjamun.jpg';
import CheeseBurgerImg from '../../static/images/fooditemsimages/cheeseburger.jpg';
import OnionRingsImg from '../../static/images/fooditemsimages/onionrings.jpg';
import SzechuanchickenImg from '../../static/images/fooditemsimages/szechuanchicken.jpg';
import IcedTeaImg from '../../static/images/fooditemsimages/icedtea.jpg';
import ManagoIceCreamImg from '../../static/images/fooditemsimages/mangoicecream.jpg';
import VegThaliImg from '../../static/images/fooditemsimages/vegthali.jpg';
import RedVelvetCakeImg from '../../static/images/fooditemsimages/redvelvetcake.jpg';
import MushroomPizzaImg from '../../static/images/fooditemsimages/mushroompizza.jpg';
import PaneerTikkaImg from '../../static/images/fooditemsimages/paneertikka.jpg';
import SpringRollsImg from '../../static/images/fooditemsimages/springrolls.jpg';
import ColdCoffeeImg from '../../static/images/fooditemsimages/coldcoffee.jpg';
import VanillaIceCreamImg from '../../static/images/fooditemsimages/vanillaicecream.jpg';
import ChocolateSundaeImg from '../../static/images/fooditemsimages/chocolatesundae.jpg';
import StrawberrysorbetImg from '../../static/images/fooditemsimages/strawberrysorbet.jpg';
import MintIceCreamImg from '../../static/images/fooditemsimages/minticecream.jpg';
import CookiesIceCreamImg from '../../static/images/fooditemsimages/cookiescream.jpg';
import SaagRotiImg from '../../static/images/fooditemsimages/saagroti.jpg';
import TandooriChickenImg from '../../static/images/fooditemsimages/tandoorichicken.jpg';

const foodItems = [
    {
        id: 2000,
        name: 'Cheese Cake',
        description: 'Creamy cheesecake topped with berries.',
        category: FoodCategory.Cake,
        image: CheeseCakeImg,
        isVeg: true,
        rating: 3.5,
        totalRating: 200
    },
    {
        id: 2001,
        name: 'Classic Burger',
        description: 'Juicy beef patty with fresh veggies.',
        category: FoodCategory.Burger,
        image: ClassicBurgerImg,
        isVeg: true,
        rating: 3.9,
        totalRating: 150
    },
    {
        id: 2002,
        name: 'Pepperoni Pizza',
        description: 'Pizza topped with spicy pepperoni slices.',
        category: FoodCategory.Pizza,
        image: PepperoniPizzaImg,
        isVeg: true,
        rating: 4.2,
        totalRating: 50
    },
    {
        id: 2003,
        name: 'Chocolate Brownie',
        description: 'Decadent chocolate brownie served warm.',
        category: FoodCategory.Cake,
        image: ChocolateBrownieImg,
        isVeg: true,
        rating: 4.5,
        totalRating: 80
    },
    {
        id: 2004,
        name: 'Chicken Alfredo Pasta',
        description: 'Creamy pasta with grilled chicken.',
        category: FoodCategory.Snacks,
        image: ChickenAlfredoPastaImg,
        isVeg: false,
        rating: 4.8,
        totalRating: 10
    },
    {
        id: 2005,
        name: 'Sushi Platter',
        description: 'Assorted sushi rolls with wasabi and soy sauce.',
        category: FoodCategory.Chinese,
        image: SushiPlatterImg,
        isVeg: true,
        rating: 3.6,
        totalRating: 20
    },
    {
        id: 2006,
        name: 'Veggie Wrap',
        description: 'Mixed vegetables wrapped in a tortilla.',
        category: FoodCategory.Snacks,
        image: VeggieWrapImg,
        isVeg: true,
        rating: 3.1,
        totalRating: 310
    },
    {
        id: 2007,
        name: 'Mango Lassi',
        description: 'Refreshing yogurt drink with mango flavor.',
        category: FoodCategory.Beverages,
        image: MangoLassiImg,
        isVeg: true,
        rating: 2.6,
        totalRating: 180
    },
    {
        id: 2008,
        name: 'Fried Rice',
        description: 'Stir-fried rice with vegetables and eggs.',
        category: FoodCategory.Chinese,
        image: FriedRiceImg,
        isVeg: false,
        rating: 3.2,
        totalRating: 190
    },
    {
        id: 2009,
        name: 'Chilli Paneer',
        description: 'Spicy paneer (cottage cheese) dish with peppers.',
        category: FoodCategory.Indian,
        image: ChilliPaneerImg,
        isVeg: true,
        rating: 3.5,
        totalRating: 230
    },
    {
        id: 2010,
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee and mascarpone.',
        category: FoodCategory.Cake,
        image: TiramisuImg,
        isVeg: true,
        rating: 4.2,
        totalRating: 130
    },
    {
        id: 2011,
        name: 'BBQ Ribs',
        description: 'Slow-cooked ribs basted with BBQ sauce.',
        category: FoodCategory.Snacks,
        image: BBQRibsImg,
        isVeg: false,
        rating: 3.4,
        totalRating: 37
    },
    {
        id: 2012,
        name: 'Pad Thai Noodles',
        description: 'Stir-fried rice noodles with shrimp, tofu, and peanuts.',
        category: FoodCategory.Chinese,
        image: PadThaiNoodlesImg,
        isVeg: true,
        rating: 3.9,
        totalRating: 80
    },
    {
        id: 2013,
        name: 'Margarita Cocktail',
        description: 'Classic cocktail made with tequila, lime, and salt.',
        category: FoodCategory.Beverages,
        image: MagaritaCocktailImg,
        isVeg: true,
        rating: 4.1,
        totalRating: 102
    },
    {
        id: 2014,
        name: 'Falafel Wrap',
        description: 'Chickpea patties wrapped in pita bread with tahini sauce.',
        category: FoodCategory.Snacks,
        image: FalaFelWrapImg,
        isVeg: true,
        rating: 3.6,
        totalRating: 120
    },
    {
        id: 2015,
        name: 'Butter Chicken',
        description: 'Creamy and mildly spiced chicken curry.',
        category: FoodCategory.Indian,
        image: ButterChickenImg,
        isVeg: false,
        rating: 3.9,
        totalRating: 45
    },
    {
        id: 2016,
        name: "S'mores",
        description: 'Sweet treat with marshmallows and chocolate sandwiched between graham crackers.',
        category: FoodCategory.Snacks,
        image: SmoresImg,
        isVeg: true,
        rating: 2.7,
        totalRating: 48
    },
    {
        id: 2017,
        name: 'Teriyaki Salmon',
        description: 'Grilled salmon glazed with teriyaki sauce.',
        category: FoodCategory.Japanese,
        image: TeriyakiSalmonImg,
        isVeg: true,
        rating: 3.4,
        totalRating: 90
    },
    {
        id: 2018,
        name: 'Caprese Salad',
        description: 'Salad made with tomatoes, mozzarella, basil, and balsamic glaze.',
        category: FoodCategory.Italian,
        image: CapreseSaladImg,
        isVeg: true,
        rating: 4.3,
        totalRating: 112
    },
    {
        id: 2019,
        name: 'Pho',
        description: 'Vietnamese noodle soup with beef or chicken.',
        category: FoodCategory.Vietnamese,
        image: PhoImg,
        isVeg: false,
        rating: 4,
        totalRating: 190
    },
    {
        id: 2020,
        name: 'Cannoli',
        description: 'Italian pastry with sweet cream filling.',
        category: FoodCategory.Cake,
        image: CannoliImg,
        isVeg: true,
        rating: 2.4,
        totalRating: 190
    },
    {
        id: 2021,
        name: 'Margherita Pizza',
        description: 'Traditional Italian pizza with tomato, mozzarella, and basil.',
        category: FoodCategory.Pizza,
        image: MargheritaPizzaImg,
        isVeg: true,
        rating: 4.4,
        totalRating: 90
    },
    {
        id: 2022,
        name: 'Chole Bhature',
        description: 'North Indian dish with spicy chickpeas and fried bread.',
        category: FoodCategory.CholeBhature,
        image: CholeBhatureImg,
        isVeg: true,
        rating: 3.7,
        totalRating: 10
    },
    {
        id: 2023,
        name: 'Pav Bhaji',
        description: 'Mashed vegetable curry served with buttered bread rolls.',
        category: FoodCategory.PavBhaji,
        image: PavBhajiImg,
        isVeg: true,
        rating: 3.2,
        totalRating: 110
    },
    {
        id: 2024,
        name: 'Fried Chicken',
        description: 'Crispy fried chicken pieces.',
        category: FoodCategory.Chicken,
        image: FriedChickenImg,
        isVeg: false,
        rating: 4.5,
        totalRating: 120

    },
    {
        id: 2025,
        name: 'Aloo Paratha',
        description: 'Indian bread stuffed with spiced potatoes.',
        category: FoodCategory.Paratha,
        image: AlooParathaImg,
        isVeg: true,
        rating: 3.7,
        totalRating: 50
    },
    {
        id: 2026,
        name: 'Banana Lassi',
        description: 'Yogurt-based drink with banana flavor.',
        category: FoodCategory.Lassi,
        image: BananaLassiImg,
        isVeg: true,
        rating: 3.1,
        totalRating: 150
    },
    {
        id: 2027,
        name: 'Rasmalai',
        description: 'Indian dessert with cottage cheese in saffron-flavored milk.',
        category: FoodCategory.Rasmalai,
        image: RasmalaiImg,
        isVeg: true,
        rating: 4.1,
        totalRating: 90
    },
    {
        id: 2028,
        name: 'Gulab Jamun',
        description: 'Deep-fried milk solids soaked in sugar syrup.',
        category: FoodCategory.GulabJamun,
        image: GulabJamunImg,
        isVeg: true,
        rating: 3.1,
        totalRating: 170
    },
    {
        id: 2029,
        name: 'Cheese Burger',
        description: 'Burger with a vegetable patty and assorted toppings.',
        category: FoodCategory.Burger,
        image: CheeseBurgerImg,
        isVeg: true,
        rating: 3.8,
        totalRating: 210
    },
    {
        id: 2030,
        name: 'Onion Rings',
        description: 'Crispy deep-fried onion rings.',
        category: FoodCategory.Snacks,
        image: OnionRingsImg,
        isVeg: true,
        rating: 3.3,
        totalRating: 5
    },
    {
        id: 2031,
        name: 'Szechuan Chicken',
        description: 'Spicy Chinese chicken dish with Szechuan peppercorns.',
        category: FoodCategory.Chinese,
        image: SzechuanchickenImg,
        isVeg: false,
        rating: 3.9,
        totalRating: 25
    },
    {
        id: 2032,
        name: 'Iced Tea',
        description: 'Chilled tea served with ice.',
        category: FoodCategory.Beverages,
        image: IcedTeaImg,
        isVeg: true,
        rating: 3.2,
        totalRating: 125
    },
    {
        id: 2033,
        name: 'Mango Ice Cream',
        description: 'Creamy mango-flavored ice cream.',
        category: FoodCategory.IceCream,
        image: ManagoIceCreamImg,
        isVeg: true,
        rating: 3.7,
        totalRating: 55
    },
    {
        id: 2034,
        name: 'Veg Thali',
        description: 'Assorted vegetarian dishes served on a platter.',
        category: FoodCategory.Thalis,
        image: VegThaliImg,
        isVeg: true,
        rating: 3.9,
        totalRating: 89
    },
    {
        id: 2035,
        name: 'Red Velvet Cake',
        description: 'Velvety red cake with cream cheese frosting.',
        category: FoodCategory.Cake,
        image: RedVelvetCakeImg,
        isVeg: true,
        rating: 4.2,
        totalRating: 46
    },
    {
        id: 2036,
        name: 'Mushroom Pizza',
        description: 'Pizza topped with mushrooms and cheese.',
        category: FoodCategory.Pizza,
        image: MushroomPizzaImg,
        isVeg: true,
        rating: 3.6,
        totalRating: 40
    },
    {
        id: 2037,
        name: 'Paneer Tikka',
        description: 'Grilled cottage cheese marinated in spices.',
        category: FoodCategory.Indian,
        image: PaneerTikkaImg,
        isVeg: true,
        rating: 4.2,
        totalRating: 40
    },
    {
        id: 2038,
        name: 'Spring Rolls',
        description: 'Crispy fried rolls filled with vegetables.',
        category: FoodCategory.Chinese,
        image: SpringRollsImg,
        isVeg: true,
        rating: 3.5,
        totalRating: 140
    },
    {
        id: 2039,
        name: 'Cold Coffee',
        description: 'Chilled coffee drink with milk and ice.',
        category: FoodCategory.Beverages,
        image: ColdCoffeeImg,
        isVeg: true,
        rating: 3.7,
        totalRating: 20
    },
    {
        id: 2040,
        name: 'Vanilla Ice Cream',
        description: 'Classic creamy vanilla-flavored ice cream.',
        category: FoodCategory.IceCream,
        image: VanillaIceCreamImg,
        isVeg: true,
        rating: 4,
        totalRating: 34
    },
    {
        id: 2041,
        name: 'Chocolate Sundae',
        description: 'Indulgent chocolate ice cream with toppings.',
        category: FoodCategory.IceCream,
        image: ChocolateSundaeImg,
        isVeg: true,
        rating: 3.9,
        totalRating: 60
    },
    {
        id: 2042,
        name: 'Strawberry Sorbet',
        description: 'Refreshing sorbet made with fresh strawberries.',
        category: FoodCategory.IceCream,
        image: StrawberrysorbetImg,
        isVeg: true,
        rating: 3.3,
        totalRating: 80
    },
    {
        id: 2043,
        name: 'Mint Chocolate Chip Ice Cream',
        description: 'Mint-flavored ice cream with chocolate chips.',
        category: FoodCategory.IceCream,
        image: MintIceCreamImg,
        isVeg: true,
        rating: 3.7,
        totalRating: 68
    },
    {
        id: 2044,
        name: 'Cookies and Cream',
        description: 'Creamy ice cream with crushed cookies.',
        category: FoodCategory.IceCream,
        image: CookiesIceCreamImg,
        isVeg: true,
        rating: 3.4,
        totalRating: 88
    },
    {
        id: 2045,
        name: 'Sarson Da Saag with Makki Di Roti',
        description: 'Traditional Punjabi dish made with mustard greens and cornbread.',
        category: FoodCategory.Thalis, // Assuming it's associated with Chole Bhature category
        image: SaagRotiImg,
        isVeg: true,
        rating: 3.4,
        totalRating: 28
    },
    {
        id: 2046,
        name: 'Tandoori Chicken',
        description: 'Spicy and flavorful grilled chicken marinated in yogurt and spices.',
        category: FoodCategory.Chicken,
        image: TandooriChickenImg,
        isVeg: false,
        rating: 4.2,
        totalRating: 180
    },
];

export default foodItems;