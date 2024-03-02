import imagesList from "../../assets/data/sliderimages";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselBanner() {
  return (
    <div>
      <Carousel fade className="bg-grey">
        {imagesList.map((image) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto af-height-90 af-max-width af-rounded af-box-shadow
                af-position-lg af-bg-dark-transparent"
                src={image.source}
                alt="First slide"
              />
              <Carousel.Caption className="position-absolute">
                <div className="af-position-lg af-bg-dark-transparent py-3">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

{
  /* <Carousel fade>
     <h1>fade</h1>
      {imagesList.map((image) => {
        <h1>{image.title}</h1>;
          <Carousel.Item>
             <img
               className="d-block w-50 mx-auto af-height-90 af-max-width af-rounded af-box-shadow
               af-position-lg af-bg-dark-transparent"
               src={image.source}
               alt="First slide"
             />
             <Carousel.Caption className="position-absolute">
               <div className="af-position-lg af-bg-dark-transparent py-3">
                 <h3>{image.title}</h3>
                 <p>{image.description}</p>
               </div>
             </Carousel.Caption>{" "}
           </Carousel.Item>;
         })}

         <Carousel.Item>
           <img
             className="d-block w-50 mx-auto af-height-90 af-max-width af-rounded af-box-shadow
               af-position-lg af-bg-dark-transparent"
             src={imagesList[1].source}
             alt="First slide"
           />
           <Carousel.Caption className="position-absolute">
             <div className="af-position-lg af-bg-dark-transparent py-3">
               <h3>{imagesList[1].title}</h3>
               <p>{imagesList[1].description}</p>
             </div>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-50 mx-auto af-height-90 af-max-width af-rounded af-box-shadow
               af-position-lg af-bg-dark-transparent"
             src={imagesList[2].source}
             alt="First slide"
           />
           <Carousel.Caption className="position-absolute">
             <div className="af-position-lg af-bg-dark-transparent py-3">
               <h3>{imagesList[2].title}</h3>
               <p>{imagesList[2].description}</p>
             </div>
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel> */
}
