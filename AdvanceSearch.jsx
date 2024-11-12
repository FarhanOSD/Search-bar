import React, { useState } from 'react'
import { data } from './data'
import Table from './Table'
function AdvanceSearch() {
  const [query, setQuery] = useState("")

  const search = (item) => {
    return item.filter(
      user =>
        user.first_name.toLowerCase().includes(query) ||
        user.last_name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) 
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 text-white  text-[20px]">
      <input
        type="text"
        className='text-black mt-7'
        placeholder="Search..."
        onChange={e => setQuery(e.target.value.toLowerCase())}
      />
      <div className="mt-6 p-8">
        <Table data={search(data)} />
      </div>
    </div>
  );
}

export default AdvanceSearch