import { useContext } from "react"
import { globlValue } from "./context"


export const Caart=()=>{

const {cartSectn}=useContext(globlValue)
    return (
        <>
<section className="d-flex overflow-auto flex-nowrap">
    {cartSectn.map((carrt,i)=>(
        <div key={i} className="card col-md-4 col-6 m-3 mt-3">
      <div className="card-body">
        <h6>{carrt.title}</h6>
          <img src={carrt.imgSrc} className="col-11"/>
          <p>Rs-{carrt.price}</p>
      </div>
</div>

    ))}

</section>
<section>
<div className="m-3">
    <h4>total price:{cartSectn.reduce((accumulator,value)=>(value.price+accumulator),0)}</h4>
    <button>
        Buy now
    </button>
</div>
</section>
        </>
    )
}