import axios from "axios"
import { createContext, useEffect, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

export const globlValue = createContext()



export const Cart = ({ children }) => {
    const [data, setData] = useState([]);
    const [stt, setStt] = useState([]);
    const [userr,setUserr] = useState([])
    const nav = useNavigate();
    let id
    if(localStorage.getItem("user")){
      id = JSON.parse(localStorage.getItem("user")).id
    }
    
    const [state, setState] = useState(1)
    const [dog, setDog] = useState([])
    const [cat, setCat] = useState([])


    useEffect(() => {

        axios.get('http://localhost:8000/products')
            .then(response => setData(response.data))
            .catch(err => console.log("Error fetching products:", err))

        axios.get('http://localhost:8000/dogProduct')
            .then(response => setDog(response.data))
            .catch(error => console.log('error in fetching dog data'))

        axios.get('http://localhost:8000/catProduct')
            .then(response => setCat(response.data))
            .catch(error => console.log('error in fetching dog data'))

        axios.get('http://localhost:8000/users')
            .then(response=>setUserr(response.data))
            .catch(error=>console.log(error))

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
    },[])
    const add = (item) => {

       if(item.count>=1){
    const newQuantity=stt.map((value)=>{
        if (value.id === item.id) {
            return { ...item, count: item.count + 1,price:item.price+item.price/item.count };
        }
        return value
    })
    axios.patch(`http://localhost:8000/users/${id}`, { cart: newQuantity })
    .then(()=>console.log('object'))
    .catch(()=>console.log('error'))
       }
    }
    const sub = (item,i) => {
        if (item.count <= 1) {
            deleteItem(i)
            return
        }
        const newQuantity=stt.map((value)=>{
            if(value.id===item.id){
                return{...item,count:item.count-1,price:item.price-item.price/item.count}
            }
            return value
        })
        axios.patch(`http://localhost:8000/users/${id}`, { cart: newQuantity })
        .then(()=>console.log('object'))
        .catch(()=>console.log('error')) 
    }

    const search = (e) => {
        if (e.toLowerCase() == 'cat') {
            nav('/cats')
        }
        else if (e.toLowerCase() == 'dog') {
            nav('/dog')
        }
        else {
            alert('enter "dog" or "cat"')
        }
    }
    const addtoCrt = (item) => {

        if (id == null) {
            alert("please Login")
            nav('/signIn')
        }
        console.log('object')
        axios.get(`http://localhost:8000/users/${id}`)
            .then(response => {
                const cartData = response.data.cart;
                if (cartData.map(val => val.id).includes(item.id)) {
                    alert('Item already exists in your cart!')
                    return
                }


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


    const hndlAdmin=(val)=>{
        axios.get("http://localhost:8000/admin")
        .then(response=>{
            const admin=response.data[0]
            if(val[0]==admin.email&&val[1]==admin.password){
                toast.success("admin login successfull")
                nav('/admin')
            }
            else{
                toast.warning('please enter valid credentials')
            }
        
        })
        .catch((error)=>clg("error occured",(error)))
    }

    return (
        <globlValue.Provider value={{
            addtoCrt,
            cartSectn: stt,
            deleteItem,
            add,
            sub,
            state,
            dog,
            cat,
            search,
            hndlAdmin,
            userr
        }}>
            {children}
        </globlValue.Provider>
    );
};
