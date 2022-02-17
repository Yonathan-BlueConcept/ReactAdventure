import React , {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Content from  './components/content';
import Header from  './components/header';
import Footer from './components/footer'
import AddItem from './components/addItem';
import SearchItem from './components/searchItem';
export default function App(){

    const [items, setItems] = useState([
        {
          id: 1,
          itemName: "shampoo",
          checked: false,
        },
        {
          id: 2,
          itemName: "conditinore",
          checked: true,
        },
        {
          id: 3,
          itemName: "soap",
          checked: false,
        },
      ]);

      useEffect(()=>{
        console.log("running after render")
      },[items])
    
      const handleChange = (id) => {
        const listItems = items.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
      };
    
      const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
      };

const [newItem,setNewItem] = useState('');
const [search,setSearch]=useState('');

const addItem = (itemName)=>{
  const id = items.length? items[items.length-1].id +1 : 1;
  const myNewItem = {id, checked:false, itemName};
  const listItems = [...items,myNewItem];
  setItems(listItems);

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
            <Content
            items = {items.filter(item=>((item.itemName).toLowerCase()).includes(search.toLowerCase()))}
            handleDelete={handleDelete}
            handleChange ={handleChange}
            />
            <Footer
            length={items.length}
            />
        </div>
    );
}
