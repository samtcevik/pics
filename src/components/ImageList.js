import ImageShow from "./ImageShow";
import './ImageList.css';
function ImageList({ imageList }) {

    const renderedImages = imageList.map(image => {
        return (
            <div  key={image.id}>
                <ImageShow image={image}></ImageShow>
            </div>

        )
    });

    return (
        <div className="image-list">
            {renderedImages}
        </div>
    )
}

export default ImageList;