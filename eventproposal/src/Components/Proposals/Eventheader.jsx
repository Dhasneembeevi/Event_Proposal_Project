import React, { useState, useEffect } from 'react';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [proposals, setProposals] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/allproposals?q=${searchQuery}`);
      const data = await response.json();
      setProposals(data);
    }
    fetchData();
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input 
        type="search" 
        placeholder="Search proposals"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {proposals.map((proposal) => (
        <div key={proposal.id}>{proposal.title}</div>
      ))}
    </div>
  );
};

export default SearchComponent;


