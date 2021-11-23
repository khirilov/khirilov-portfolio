import { v4 as uuidv4 } from 'uuid';
import MoviesImg from '../images/movies.jpg';
import RecipesImg from '../images/recipes.jpg';
import AimImg from '../images/aim.jpg';
import PracticeImg from '../images/practice.jpg';
import ShopImg from '../images/shop.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Movies',
    desc:
      'Website to find movies',
    img: MoviesImg,
    link: 'https://khirilov.github.io/react_movies_project/'
  },
  {
    id: uuidv4(),
    name: 'Recepts',
    desc:
      'An app to find recepts by category',
    img: RecipesImg,
    link: 'https://khirilov.github.io/recipesApp/'
  },
  {
    id: uuidv4(),
    name: 'Aim Game',
    desc:
      'Just a fun game to train your Aim',
    img: AimImg,
    link: 'https://khirilov.github.io/AimGame/'
  },
  {
    id: uuidv4(),
    name: "Shop App",
    desc:
      'Just my practice of creating E-commerce',
    img: ShopImg,
    link: 'https://khirilov.github.io/shopApp/'
  },
  {
    id: uuidv4(),
    name: 'Practice',
    desc:
      'Practice some things in React',
    img: PracticeImg,
    link: '#'
  },
];

export default projects;
