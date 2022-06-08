import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './components/Searchbar';
import AddItem from './components/AddItem';
import DisplayItems from './components/DisplayItems';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then((response) => response.json())
    .then((data) => { setData({ items: data }) })
  }, [])

  const updateFilters = (searchParams) => {
    setFilters(searchParams)
  }

  const selectUpdate = (item) => {
    setIsUpdate(true)
  }

  const deleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE"
    }

    fetch(`http://localhost:3000/items/${item.id}`, requestOptions)
    .then((response) => {
      if (response.ok) {
        const idx = items.indexOf(item)
        items.splice(idx, 1);
        setData({ items: items })
      }
    })
  }

  const addItemToData = (item) => {
    let items = data['items'];

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item)
    }

    fetch("http://localhost:3000/items", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      items.push(data);
      setData({ items: items })
    });
  }

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name) {
      return data;
    }

    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }

      if (filters.price !== 0 && Number(item.price) > Number(filters.price)) {
        continue;
      }

      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }

      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }

      filteredData.push(item);
    }

    console.log(filteredData);
    return filteredData;
  }

  return (
    <div className="container mx-auto mt-5">
      <div className='grid grid-cols-2 gap-4'>
        <SearchBar updateSearchParams={updateFilters} />
        <AddItem addItem={addItemToData} isUpdate={isUpdate} />
        <DisplayItems items={filterData(data['items'])} deleteItem={deleteItem} selectUpdate={selectUpdate} />
      </div>
    </div>
  );
}


export default App;
