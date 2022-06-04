import './App.css';
import { useState } from 'react';
import SearchBar from './components/Searchbar';
import AddItem from './components/AddItem';
import DisplayItems from './components/DisplayItems';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams)
    console.log(searchParams);
  }

  const addItemToData = (item) => {
    let items = data['items'];
    item.id = items.length;
    items.push(item);
    setData({ items: items })
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
        <AddItem addItem={addItemToData} />
        <DisplayItems items={filterData(data['items'])} />
      </div>
    </div>
  );
}


export default App;
