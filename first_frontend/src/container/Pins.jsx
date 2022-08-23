import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import { Navbar, Feed, PinDetail, CreatePin, Search } from '../components';

const Pins = ({user}) => {
    // the Search and Navbar both require access to SearchTerm
    const [searchTerm, setsearchTerm]= useState('')
  return (
    <div className="px-2 md:px-5">
        <div className="bg-gray-50">
             <Navbar searchTerm={searchTerm} setSearchTerm={setsearchTerm} user={user && user} />
        </div>
        <div className="h-full">
            
                <Routes>
                    <Route path="/" element={<Feed/>}/>
                    <Route path="/category/:categoryId" element={<Feed/>}/>
                    <Route path="/pin-detail/:pinId" element={<PinDetail user={user}/>}/>
                    <Route path="/create-pin" element={<CreatePin user={user}/>}/>
                    <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setsearchTerm}/>}/>
                </Routes>

        </div>
        
    </div>
  )
}

export default Pins