import React , {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Content from  './components/content';
import Header from  './components/header';
import Footer from './components/footer'
import AddItem from './components/addItem';
import SearchItem from './components/searchItem';
import RequestAPI from './apiRequest';
export default function App(){

  const API_URL ='http://localhost:3500/items';

    const [newItem,setNewItem] = useState('');
    const [search,setSearch]=useState('');
    const [items, setItems] = useState([]);
    const [errors,setErrors] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

      useEffect(()=>{
        const fetchItems =  async ()=>{
        try{
         const response = await fetch(API_URL);
         if(!response.ok) throw Error("couldn't load data");
         const items= await response.json();
         
         setItems(items);
         setErrors(null);
        }catch(err){
          console.log(err);
          setErrors(err.message);
        }
        finally{
          setIsLoading(false);
        }
      }
      setTimeout(()=>{
        (async ()=> await fetchItems())()
      },2000)
    },[])
    
      const handleChange = async (id) => {
        const listItems = items.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);

      const item = items.filter((item)=>item.id===id);

      const updateOptions = {
        method:"PATCH",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify( {checked:item[0].checked})
        
      };

const apiURL = `${API_URL}/${id}`;

const updateResponse = await RequestAPI(apiURL,updateOptions);
if(updateResponse) setErrors(updateResponse);

      }
    
      const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems); 
      };



const addItem = async (itemName)=>{
  const id = items.length? items[items.length-1].id +1 : 1;
  const myNewItem = {id, checked:false, itemName};
  const listItems = [...items,myNewItem];
  setItems(listItems);
const postOptions = {
  method:"POST",
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(myNewItem)
}

const ErrResponse = await RequestAPI(API_URL,postOptions);

if(ErrResponse) setErrors(ErrResponse);

}

const handleSubmit = (e)=>{
  e.preventDefault();
  if(!newItem) return;
  addItem(newItem);
  setNewItem('')
}



    return(
        <div>
            <Header title={"shopping List"} />
            <SearchItem 
            search= {search}
            setSearch = {setSearch}
            />
            <AddItem  newItem = {newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
            {errors && <p style={{color:'red'}}>{errors}</p>}

          {isLoading && <p>Loading...</p>}

           {
             !errors && !isLoading && <Content
            items = {items.filter(item=>((item.itemName).toLowerCase()).includes(search.toLowerCase()))}
            handleDelete={handleDelete}
            handleChange ={handleChange}
            />
           }
            <Footer
            length={items.length}
            />
        </div>
    );
}
