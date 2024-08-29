import { Navbar } from "./Navbar"
import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { globlValue } from "./context"
export const Home = () => {
    const [data, setData] = useState([])
    const [sttc, setSttc] = useState([])
    const { addtoCrt } = useContext(globlValue)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/products')
                const res = await axios.get('http://localhost:8000/sttcProducts')
                setData(response.data)
                setSttc(res.data)
            }
            catch (error) {
                console.error("error in fetching data")
            }
        }
        fetchData()
    }, []
    )




    return (<>
        <Navbar />
        <section >
            <div className="container-fluid bg-danger-subtle d-flex justify-content-center">
                <h1>Get upto 25% cashback for your first order </h1>
            </div>
        </section>
        <section className="d-flex justify-content-center mt-5">
            <h1 className="d-flex justify-content-center text-decoration-none">SHOP FOR</h1>

        </section>
        <section className="d-flex justify-content-center mt-3">

            <div className="d-inline-block m-5">
                <img className="col-12 mb-0 " src="/dog.png" />
                <h5 className="d-flex justify-content-center">Dogs</h5>
            </div>
            <div className="d-inline-block m-5">
                <img className="col-12 mb-0 " src="/cat.png" />
                <h5 className="d-flex justify-content-center">Cats</h5>
            </div>
        </section>
        <section  className="p-5">
            <h1 className="d-block">New and featured</h1>
        </section>
        <section className="d-flex overflow-auto flex-nowrap">

            {sttc.map((user) => (
                <div key={user.id} className="card col-md-4 col-6 m-3 mt-3">
                    
                        <img src={user.img} className="col-12" />
                    
                </div>
            )
            )}
        </section>
        <section className="mt-5 p-5">
            <h1 >TOP PRODUCTS</h1>
        </section>


        <section className="d-flex overflow-auto flex-nowrap" id="products">

            {data.map((user) => (
                <div key={user.id} className="card productcard col-md-3 col-6 m-3" id="products1" >
                    
                        <img src={user.imgSrc} className="col-12 card" />
                        <h4>{user.title}</h4>
                        <p>Rs-{user.price}</p>
                        <button className="btn btn-dark btnn" onClick={() => addtoCrt(user)}>Add to cart</button>
                    
                </div>
            )
            )}

        </section>
        <footer>
            
        </footer>
        
    </>

    )
}