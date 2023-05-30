import { useState } from 'react'
import { useEffect } from 'react';
import './css/App.css'
import BottomHeader from './components/BottomHeader/BottomHeader';
import Card from './components/Card/Card';
import mockData from './data/mockData.json';

function App() {

//Initialize state variables
const [isCheckedAll, setIsCheckedAll] = useState(false);
const [checkboxStates, setCheckboxStates] = useState([]);
const [data, setData] = useState([]);

//Set state variables' values
useEffect(() => {
  const ids = mockData.map((item) => item.id);
  const initialCheckboxStates = Array(ids.length + 1).fill(false);
  setCheckboxStates(initialCheckboxStates);

  const jsonData = mockData.map(data => data);
  setData(jsonData);
}, []);

//When called, every checkbox will be modified
const handleCheckAll = () => {
  setIsCheckedAll((prevCheckedAll) => !prevCheckedAll);
  setCheckboxStates((prevCheckboxStates) =>
    prevCheckboxStates.map(() => !isCheckedAll)
  );
};

//Sets individual changes of checkboxes
const handleCheckboxChange = (id) => {
  setCheckboxStates((prevCheckboxStates) => {
    const newCheckboxStates = [...prevCheckboxStates];
    newCheckboxStates[id] = !newCheckboxStates[id];
    return newCheckboxStates;
  });

  setIsCheckedAll(() =>
  checkboxStates.every((state, index) => (id !== index ? state : !state))
  );
};

//Deletes every checked item
const deleteCheckedItems = () => {
  setData((prevData) => {
    const toBeRemovedIds = checkboxStates.map((item, index) => {
      return item === true ? index : null;
    }).filter(value => value !== null);
    
    return prevData.filter((item) => !toBeRemovedIds.includes(item.id));
  });
};

//Deletes the item if the delete button 
//inside the modal is pressed
const deleteItem = (id) => {
  setData((prevData) => {
    return prevData.map((item) => {
      return item.id === id ? null : item;
    }).filter(value => value !== null);
  })
}

  return (
    <>
      <div className="news-header">News Articles</div>
      <BottomHeader deleteCheckedItems = {deleteCheckedItems} checkboxStates = {checkboxStates} isCheckedAll = {isCheckedAll} handleCheckAll={handleCheckAll}/>
      <div className="content">
      {data.map((item) => (
        <Card id = {item.id} author = {item.author} title = {item.title} content = {item.content} date = {item.date}
        handleCheckAll={handleCheckAll} handleCheckboxChange = {handleCheckboxChange} checkboxStates = {checkboxStates}
        deleteItem = {deleteItem} key = {item.id}/>
      ))}
      </div>
    </>
  )
}

export default App
