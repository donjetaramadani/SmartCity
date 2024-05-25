import { categories } from '../screens/AddCategoryScreen'; 
import { Ionicons } from 'react-native-vector-icons';



const categoryIcons = {
  plants: 'leaf',
  seeds: 'seedling',
  flowers: 'flower',
  sprayers: 'spray',
  pots: 'flower-pot',
  fertilizers: 'flask',
};

// Update the categories array to include icons
const CategoriesWithIcons = categories.map(category => ({
  ...category,
  icon: categoryIcons[category.id], 
}));

export default CategoriesWithIcons;
