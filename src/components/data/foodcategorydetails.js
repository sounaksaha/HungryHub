import CakeImg from '../../static/images/foodcategorycartimages/cake.jpg';
import BurgerImg from '../../static/images/foodcategorycartimages/burger.jpg';
import PizzaImg from '../../static/images/foodcategorycartimages/pizza.jpg';
import CholeBhatureImg from '../../static/images/foodcategorycartimages/cholebhature.jpg';
import PavBhajiImg from '../../static/images/foodcategorycartimages/pavbhaji.jpg';
import ChickenImg from '../../static/images/foodcategorycartimages/chicken.jpg';
import ParathaImg from '../../static/images/foodcategorycartimages/paratha.jpg';
import LassiImg from '../../static/images/foodcategorycartimages/lassi.jpg';
import RasmalaiImg from '../../static/images/foodcategorycartimages/rasmalai.jpg';
import GulabJamunImg from '../../static/images/foodcategorycartimages/gulabjamun.jpg';

import { FoodCategory } from '../constants';

const foodCategoryDetails = [
    { id: 101, img: CakeImg, title: FoodCategory.Cake, categoryimp: true },
    { id: 102, img: BurgerImg, title: FoodCategory.Burger, categoryimp: true },
    { id: 103, img: PizzaImg, title: FoodCategory.Pizza, categoryimp: true },
    { id: 104, img: CholeBhatureImg, title: FoodCategory.CholeBhature, categoryimp: true },
    { id: 105, img: PavBhajiImg, title: FoodCategory.PavBhaji, categoryimp: true },
    { id: 106, img: ChickenImg, title: FoodCategory.Chicken, categoryimp: true },
    { id: 107, img: ParathaImg, title: FoodCategory.Paratha, categoryimp: true },
    { id: 108, img: LassiImg, title: FoodCategory.Lassi, categoryimp: true },
    { id: 109, img: RasmalaiImg, title: FoodCategory.Rasmalai, categoryimp: true },
    { id: 110, img: GulabJamunImg, title: FoodCategory.GulabJamun, categoryimp: true },
    { id: 111, img: GulabJamunImg, title: FoodCategory.Snacks, categoryimp: false },
    { id: 112, img: GulabJamunImg, title: FoodCategory.Chinese, categoryimp: false },
    { id: 113, img: GulabJamunImg, title: FoodCategory.Beverages, categoryimp: false },
    { id: 114, img: GulabJamunImg, title: FoodCategory.IceCream, categoryimp: false },
    { id: 115, img: GulabJamunImg, title: FoodCategory.Thalis, categoryimp: false }
]

export default foodCategoryDetails;