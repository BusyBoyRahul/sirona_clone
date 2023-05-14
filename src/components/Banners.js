
export default function banners(){
    return(
        <div>
            <div className="container">
                <img className="w-100 my-5 " src="https://files.thesirona.com/site-images/original/hb.gif" alt="" />
            </div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://files.thesirona.com/site-images/original/simpl-desk-april_1.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://files.thesirona.com/site-images/original/Mobikwik-3360x279.png" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    );
}