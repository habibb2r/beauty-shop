import React, { useState, useEffect } from 'react';
import SectionTitle from '../../Components/Reuseable/SectionTitle';
import useAxiosSecure from '../../Hooks/CommonHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

import ProductCard from '../../Components/Reuseable/ProductCard';

const AllProducts = () => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const axiosSecure = useAxiosSecure();
  const { data: allItems, refetch: refetchAllItems, isLoading: loadItems } = useQuery({
    queryKey: ["allProducts", filter, sort, search],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `${import.meta.env.VITE_backend_server}/allProducts/${filter}?sort=${sort}&search=${search}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    refetchAllItems();
  }, [sort, filter, search, refetchAllItems]);



  const handleFilter = (e) => {
    setFilter(e.target.value);
    setActiveCategory(e.target.value);
    setSearch('');
  };

  const handleSorting = (e) => {
    const sorting = parseInt(e.target.value);
    setSort(sorting);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.elements.searchInput.value);
  };

  return (
    <div className='px-5 pb-10'>
      <SectionTitle title={"All Products"} />
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
        <select className='select select-secondary font-semibold' onChange={handleFilter} value={activeCategory}>
          <option className='font-semibold bg-pink-200' value="All">All Categories</option>
          {allItems?.uniqueProductCategories?.map((category, index) => (
            <option className='font-semibold bg-pink-200' key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select className='select select-secondary font-semibold' onChange={handleSorting} value={sort}>
          <option className='font-semibold' value="0">Sort</option>
          <option className='font-semibold' value="1">Price: Low to High</option>
          <option className='font-semibold' value="-1">Price: High to Low</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className="flex justify-center items-center mb-5">
        <input
          type="text"
          name="searchInput"
          placeholder="Search products..."
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary ml-2">
          Search
        </button>
      </form>
      {
        loadItems ? <div className='flex justify-center px-5 py-10'>
            <span className="loading loading-spinner loading-lg text-center"></span>          
        </div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allItems?.results?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      }
      
    </div>
  );
};

export default AllProducts;
