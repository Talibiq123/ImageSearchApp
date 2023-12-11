const ImageList = ({images}) => {



    return(
        <div>
             {
                images &&
                images.map((value, index)=>{
                    return (
                    <img key={index} src={value.urls.small} alt={value.alt_description} />
                    )
                }    
                )
             }
        </div>
    )

}

export default ImageList;