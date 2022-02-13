import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import Content from  './components/content';
import Header from  './components/header';
import Footer from './components/footer'
import AddItem from './components/addItem';
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
            <AddItem  newItem = {newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
            <Content
            items = {items}
            handleDelete={handleDelete}
            handleChange ={handleChange}
            />
            <Footer
            length={items.length}
            />
        </div>
    );
}
