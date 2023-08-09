import SearchBar from "./components/SearchBar";
import searchImage from './api';
import ImageList from "./components/ImageList";
import { useState } from "react";

function App(){
    const[images, setImages] = useState([])
    const handleSubmit = async (term)=>{
        const result = await searchImage(term);
        setImages(result);
    }
    return(
    <div>
        <SearchBar onSubmit={handleSubmit}></SearchBar>
        <ImageList imageList={images}></ImageList>
    </div>)
}

export default App;