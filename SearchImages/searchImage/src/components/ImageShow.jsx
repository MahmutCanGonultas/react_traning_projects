import "../css/ImageList.css";

function ImageShow({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt="" className="image-list_img" />
    </div>
  );
}

export default ImageShow;
