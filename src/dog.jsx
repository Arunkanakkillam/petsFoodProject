import { useContext } from "react"

import { globlValue } from "./context"
import { Navbar } from "./Navbar"

export const Dogs = () => {
    const { dog, addtoCrt } = useContext(globlValue)
    return (
        <>
            <Navbar />
            <section className="d-flex overflow-auto flex-nowrap" id="products">

                {dog.map((user) => (
                    <div key={user.id} className="card col-md-3 col-6 m-3" id="products1" >

                        <img src={user.imgSrc} className="col-12 card" />
                        <h4>{user.title}</h4>
                        <p>Rs-{user.price}</p>
                        <button className="btn btn-dark btnn" onClick={() => addtoCrt(user)}>Add to cart</button>

                    </div>
                )
                )}

            </section>

        </>

    )
}