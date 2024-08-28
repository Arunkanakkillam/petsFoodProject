import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const globlValue = createContext()

export const Cart = ({ children }) => {
    const [data, setData] = useState([]);
    const [stt, setStt] = useState([]);
    const nav = useNavigate();
    const id = localStorage.getItem("user")



 
    useEffect(() => {
    
        axios.get('http://localhost:8000/products')
            .then(response => setData(response.data))
        .catch(err => console.log("Error fetching products:", err))
        const fetchData = async () => {
            try {
        const response = await axios.get(`http://localhost:8000/users/${id}`)
             const carts = response.data.cart;
                setStt(carts);
            } catch {
                console.log('Error occured')
            }
        }

        fetchData()
    })

    const addtoCrt = (item) => {
        if(id==null){
            alert ("please Login") 
            nav('/signIn')
        }
            axios.get(`http://localhost:8000/users/${id}`)
            .then(response => {
                const cartData = response.data.cart;
            const updatedCart = [...cartData, item];
         return axios.patch(`http://localhost:8000/users/${id}`, { cart: updatedCart })
            })
            .then(() => nav('/cart'))
            .catch(err => console.log("Error:", err))   
    }


    const deleteItem = (indexToRemove) => {
        const updatedCart = stt.filter((_, index) => index !== indexToRemove);
        setStt(updatedCart)

        axios.patch(`http://localhost:8000/users/${id}`, { cart: updatedCart })
            .catch(err => console.log("Error removing item from cart:", err))
    }
  

    return (
        <globlValue.Provider value={{ addtoCrt, cartSectn: stt, deleteItem }}>
            {children}
        </globlValue.Provider>
    );
};
