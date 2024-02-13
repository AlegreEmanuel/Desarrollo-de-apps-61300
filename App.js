import Home from './src/screens/home';
import ItemListCategory from './src/screens/ItemListCategory';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';

export default function App() {

  const [currentScreen, setCurrentScreen] = useState('Home');
  const [categorySelected, setCategorySelected] = useState('');
  const [fontsLoaded] = useFonts(fonts);

  if(!fontsLoaded){
    return null
  }

  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
  };

  const handleBackToHome = () => {
    setCategorySelected('');
    setCurrentScreen('Home');
  };

  const handleCategorySelected = (category) => {
    setCategorySelected(category);
    setCurrentScreen('ItemListCategory');
  };


  return (
    <>
      {currentScreen === 'Home' ? (
        <Home setCategorySelected={handleCategorySelected} />
      ) : (
        <ItemListCategory
          category={categorySelected}
          onBack={handleBackToHome}
        />
      )}
    </>
  );



}