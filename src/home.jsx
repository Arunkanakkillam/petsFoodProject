import { Navbar } from "./Navbar"

export const Home=()=>{
    return(<>
<Navbar/>
<section >
    <div className="container-fluid bg-success d-flex justify-content-center">
        <h1>Get upto <h1 className="d-inline-block text-warning">25% cashback</h1> for your first order </h1>
    </div>
</section>
<section className="d-flex justify-content-center mt-5">
    <h1 className="d-flex justify-content-center text-decoration-underline">SHOP FOR</h1>
    
</section>
<section className="d-flex justify-content-center mt-3">
<div className="d-inline-block m-5">
        <img className="col-12 mb-0 " src="/dog.png"/>
        <h5 className="d-flex justify-content-center">Dogs</h5>
</div>
<div className="d-inline-block m-5">
        <img className="col-12 mb-0 " src="/cat.png"/>
        <h5 className="d-flex justify-content-center">Cats</h5>
</div>
</section>
<section  >
    <h1 className="d-block">New and featured</h1>
</section>
<section className="d-flex overflow-auto flex-nowrap">
<div className="card col-md-4 col-6 m-3 mt-3">
        <div className="card-body">
            <img src="/Card-1.jpg" className="col-11"/>
        </div>
</div>
<div className="card col-md-4 col-6 m-3">
         <div className="card-body">
            <img src="/card-2.jpg" className="col-11"/>
         </div>
</div>
<div className="card col-md-4 col-6 m-3">
         <div className="card-body">
            <img src="/card-3.jpg" className="col-11"/>
         </div>
</div>
<div className="card col-md-4 col-6 m-3">
         <div className="card-body">
            <img src="/card-4.jpg" className="col-11"/>
         </div>
</div>
<div className="card col-md-4 col-6 m-3">
         <div className="card-body">
            <img src="/card-5.jpg" className="col-11"/>
         </div>
</div>

</section>
<section className="mt-5">
    <h1>TOP PRODUCTS</h1>
</section>
    </>
        
    )
}