import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import Navigator from './src/Navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts(fonts);

  if(!fontsLoaded){
    return null
  }

 
  return  <Navigator/>

}








/*<SafeAreaView style={{flex:1}}>
    <StatusBar style="auto"/>

    {productDetailId ? (<ItemDetails productDetailId={productDetailId} setProductDetailId={setProductDetailId} />) : categorySelected ? (
        <ItemListCategory setCategorySelected={setCategorySelected} category={categorySelected} setProductDetailId={setProductDetailId}/>
      ):(
      <Home setCategorySelected={setCategorySelected}/>
      )}
      
  </SafeAreaView>*/