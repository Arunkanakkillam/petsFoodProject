import axios from "axios"
import { createContext, useEffect, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

export const globlValue = createContext()



export const Cart = ({ children }) => {
    const [data, setData] = useState([]);
    const [stt, setStt] = useState([]);
    const [userr, setUserr] = useState([])
    const nav = useNavigate();
    let id

    if (localStorage.getItem("user")) {
        id = JSON.parse(localStorage.getItem("user")).id
    }

    const [state, setState] = useState(1)
    const [dog, setDog] = useState([])
    const [cat, setCat] = useState([])

let allProducts
    useEffect(() => {

        axios.get('http://localhost:8000/products')
            .then(response => {allProducts=response.data
                setData(response.data)})
            .catch(err => console.log("Error fetching products:", err))

        axios.get('http://localhost:8000/dogProduct')
            .then(response => setDog(allProducts.filter(product => product.category.toLowerCase() === 'dog'||product.category.toLowerCase() === 'both')))
            .catch(error => console.log('error in fetching dog data'))

        axios.get('http://localhost:8000/catProduct')
            .then(response =>{response.data 
                setCat(allProducts.filter(product => product.category.toLowerCase() === 'cat'||product.category.toLowerCase() === 'both'))})
            .catch(error => console.log('error in fetching dog data'))

        axios.get('http://localhost:8000/users')
            .then(response => setUserr(response.data))
            .catch(error => console.log(error))

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





    const addProduct = async (val1, val2, val3, val4) => {
        if (val1.length === 0 || val2.length === 0 || val3.length === 0 || val4.length === 0) {
            toast.warning('Enter all details');
            return;
        }
    
        try {
            const newProduct = {
                title: val1,
                price: val2,
                imgSrc: val3,
                category: val4, 
                count: 1,
            }
            const response = await axios.post('http://localhost:8000/products', newProduct);
            setData(prevData => [...prevData, response.data]);
    
            const category = val4.toLowerCase()
            if (category === 'dog') {
                const res = await axios.post('http://localhost:8000/dogProduct', newProduct);
                setDog(prev => [...prev, res.data]);
            } else if (category === 'cat') {
                const res = await axios.post('http://localhost:8000/catProduct', newProduct)
                setCat(prev => [...prev, res.data]);
            } else if (category === 'both') {
                const resDog = await axios.post('http://localhost:8000/dogProduct', newProduct)
                const resCat = await axios.post('http://localhost:8000/catProduct', newProduct)
                setDog(prev => [...prev, resDog.data]);
                setCat(prev => [...prev, resCat.data]);
            } else {
                toast.warning('Invalid category. Please enter "dog", "cat", or "both".');
                return;
            }
    
            toast.success('Product added successfully');
        } catch (error) {
            toast.error('Error adding product: ' + error.message);
        }
    };
    
    const deleteProduct = async (valuee) => {
        try {
            const response = await axios.get('http://localhost:8000/products')
            const allProducts = response.data
            const productToDelete = allProducts.find(product => product.title === valuee)
    
            if (productToDelete) {
                await axios.delete(`http://localhost:8000/products/${productToDelete.id}`)
                setData(prevData => prevData.filter(product => product.id !== productToDelete.id))
    
                toast.success('Product deleted successfully')
            } else {
                toast.warning('Product not found')
            }
        } catch (error) {
            console.error('Error deleting product:', error)
            toast.error('Error deleting product')
        }
    };
    

    const block = (val) => {
        axios.get(`http://localhost:8000/users`)
            .then(response => {
                const user = response.data.find(user => user.email === val)
                if (user) {
                    user.isBlocked = true
                    return axios.patch(`http://localhost:8000/users/${user.id}`, { isBlocked: user.isBlocked })
                } else {
                    throw new Error('User not found')
                }
            })
            .then(() => {
                toast.success('User successfully blocked')
            })
            .catch(error => {
                console.error('Error blocking user:', error)
                toast.error('Failed to block user')
            })
    }



    const unBlock = (val) => {
        axios.get(`http://localhost:8000/users`)
            .then(response => {
                const user = response.data.find(user => user.email === val)
                if (user) {
                    user.isBlocked = false
                    return axios.patch(`http://localhost:8000/users/${user.id}`, { isBlocked: user.isBlocked })
                } else {
                    throw new Error('User not found')
                }
            })
            .then(() => {
                toast.success('User successfully unblocked')
            })
            .catch(error => {
                console.error('Error unblocking user:', error)
                toast.error('Failed to unblock user')
            })
    }





    const add = (item) => {

        if (item.count >= 1) {
            const newQuantity = stt.map((value) => {
                if (value.id === item.id) {
                    return { ...item, count: item.count + 1, price: item.price + item.price / item.count };
                }
                return value
            })
            axios.patch(`http://localhost:8000/users/${id}`, { cart: newQuantity })
                .then(() => console.log('object'))
                .catch(() => console.log('error'))
        }
    }
    const sub = (item, i) => {
        if (item.count <= 1) {
            deleteItem(i)
            return
        }
        const newQuantity = stt.map((value) => {
            if (value.id === item.id) {
                return { ...item, count: item.count - 1, price: item.price - item.price / item.count }
            }
            return value
        })
        axios.patch(`http://localhost:8000/users/${id}`, { cart: newQuantity })
            .then(() => console.log('object'))
            .catch(() => console.log('error'))
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


    const hndlAdmin = (val) => {
        axios.get("http://localhost:8000/admin")
            .then(response => {
                const admin = response.data[0]
                if (val[0] == admin.email && val[1] == admin.password) {
                    toast.success("admin login successfull")
                    nav('/admin')
                }
                else {
                    toast.warning('please enter valid credentials')
                }

            })
            .catch((error) => clg("error occured", (error)))
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
            userr,
            nav,
            block,
            data,
            unBlock,
            addProduct,
            deleteProduct
        }}>
            {children}
        </globlValue.Provider>
    );
};
