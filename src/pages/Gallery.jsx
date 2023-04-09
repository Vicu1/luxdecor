const GalleryPage = () => {
    return (
        <section className="gallery">
            <div id="myCarousel" className="carousel">
                <div className="carousel__slide">
                    <img src="img/about/about.jpeg" alt="" />
                </div>
                <div className="carousel__slide">
                    <img src="img/about/web-design.png" alt="" />
                </div>
                <div className="carousel__slide">
                    <img src="img/footer/instagram.png" alt="" />
                </div>
            </div>
        </section>
    )
}
export default GalleryPage