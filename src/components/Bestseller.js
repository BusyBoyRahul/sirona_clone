export default function bestseller(){
    return(
        <div>
        <div className="container mx-auto mt-5">
            <h3 className="text-center">BESTSELLERS</h3>

            <div id="carouselExampleAutoplaying" className="carousel slide container" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active d-lg-flex flex-wrap justify-content-center">
      
                        <div className="card m-2" style={{width: "18rem",}}>
                            <img src="https://files.thesirona.com/site-images/400x400/Exfoliating-Facewash_2.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">SIRONA NATURAL EXFOLIATING FACE WASH </h5>
                                    <p className="card-text">Anti Acne, Suitable For All Skin Type, Reduces Blemishes, Anti-Ageing, Facial Cleanser With Apricot, Flax-Seed Extracts</p>
                                    <a href="#" className="btn btn-primary">Add to Cart</a>
                                </div>
                        </div>

                        <div className="card m-2" style={{width: "18rem",}}>
                            <img src="https://files.thesirona.com/site-images/400x400/Period-Stain-Remover-1.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">SIRONA ANTIBACTERIAL PERIOD STAIN REMOVER</h5>
                                    <p className="card-text">Anti Acne, Suitable For All Skin Type, Reduces Blemishes, Anti-Ageing, Facial Cleanser With Apricot, Flax-Seed Extracts</p>
                                    <a href="#" className="btn btn-primary">Add to Cart</a>
                                </div>
                        </div>

                        <div className="card m-2" style={{width: "18rem",}}>
                            <img src="https://files.thesirona.com/site-images/400x400/FSp577_1.png" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">STRETCH MARKS BODY BUTTER (100GM)</h5>
                                    <p className="card-text">Stretch Marks, Rough Skin, Itchy Skin & Moisturization with Vitamin A, Vitamin C, Avocado Oil, & Coconut Oil</p>
                                    <a href="#" className="btn btn-primary">Add to Cart</a>
                                </div>
                        </div>

                        <div className="card m-2" style={{width: "18rem",}}>
                            <img src="https://files.thesirona.com/site-images/400x400/peebuddy-disposable-portable-female-urination-device-2_2.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">PEEBUDDY FEMALE URINATION DEVICE</h5>
                                    <p className="card-text">Female Urination Device for Women | Public Toilets, Travel, Camping, Hiking and Outdoor Activities</p>
                                    <a href="#" className="btn btn-primary">Add to Cart</a>
                                </div>
                        </div>

                        

                        
    </div>
    

  </div>

  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-secondary rounded-circle" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-secondary rounded-circle" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>
            
        </div>

        <img className="w-100 m-0 mt-5" src="https://files.thesirona.com/site-images/original/3360x279.png" alt="" />

        </div>
    );
}