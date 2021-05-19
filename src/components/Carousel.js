var banner1 = "sliders/b3.jpg"
var banner2 = "sliders/b4.jpg"

var carouselStyle = {
    "height":500
}
function Carousel(){
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={carouselStyle} src={banner1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={carouselStyle} src={banner2} className="d-block w-100" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    )
}

export default Carousel