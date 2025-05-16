import React, { useState } from "react";
import {
  FaSearch, FaUserCircle, FaFileContract, FaEllipsisV, FaTrash
} from "react-icons/fa";
import { Footer } from '../Components/Footer';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("name");
  const [recentSearches, setRecentSearches] = useState([]);
  const [savedAPIs, setSavedAPIs] = useState([]);
  const [showDropdown, setShowDropdown] = useState(null);
  const [showSavedDropdown, setShowSavedDropdown] = useState(null);

  const trendingAPIs = [
    "Chatbot API", "Weather API", "Finance Data API",
    "Stock Market API", "AI Text Generation API",
    "Movie Database API", "E-commerce API"
  ];

  const handleSearch = () => {
    if (search.trim() && !recentSearches.includes(search)) {
      setRecentSearches(prev => [search, ...prev.slice(0, 9)]);
    }
    setSearch("");
  };

  const deleteRecentSearch = (index) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
    setShowDropdown(null);
  };

  const saveAPI = (apiName) => {
    if (!savedAPIs.includes(apiName)) {
      setSavedAPIs(prev => [apiName, ...prev]);
    }
  };

  const deleteSavedAPI = (index) => {
    setSavedAPIs(savedAPIs.filter((_, i) => i !== index));
    setShowSavedDropdown(null);
  };

  return (
    <>
      <div style={{ display: "flex", height: "100vh", backgroundColor: "#f4f4f4", fontFamily: "sans-serif" }}>
        
        <aside style={{
          width: "280px", backgroundColor: "#444658", color: "white", padding: "20px",
          display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "left"
        }}>
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>API Mashup Composer</h2>

            <div>
              <h3 style={{ fontSize: "17px", fontWeight: "bold", marginBottom: "10px" }}>Recent Searches</h3>
              {recentSearches.length > 0 ? (
                recentSearches.map((item, index) => (
                  <div key={index} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "6px 0", cursor: "pointer"
                  }}>
                    <span>{item}</span>
                    <FaEllipsisV onClick={() => setShowDropdown(index === showDropdown ? null : index)}
                      style={{ cursor: "pointer" }} />
                    {showDropdown === index && (
                      <div style={{
                        position: "absolute", background: "white", color: "black", padding: "5px",
                        borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0,0,0,0.2)"
                      }}>
                        <div onClick={() => deleteRecentSearch(index)} style={{ cursor: "pointer", padding: "5px" }}>
                          <FaTrash /> Delete 
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : <p style={{ textAlign: "left" }}>No recent searches</p>}
            </div>

           
            <div style={{ marginTop: "25px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: "bold", marginBottom: "10px" }}>Trending APIs</h3>
              {trendingAPIs.map((api, index) => (
                <div key={index} style={{ padding: "6px 0", cursor: "pointer", textAlign: "left" }}>{api}</div>
              ))}
            </div>

            
            <div style={{ marginTop: "23px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: "bold", marginBottom: "10px" }}>Saved APIs</h3>
              {savedAPIs.length > 0 ? (
                savedAPIs.map((api, index) => (
                  <div key={index} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "6px 0", cursor: "pointer"
                  }}>
                    <span>{api}</span>
                    <FaEllipsisV onClick={() => setShowSavedDropdown(index === showSavedDropdown ? null : index)}
                      style={{ cursor: "pointer" }} />
                    {showSavedDropdown === index && (
                      <div style={{
                        position: "absolute", background: "white", color: "black", padding: "5px",
                        borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0,0,0,0.2)"
                      }}>
                        <div onClick={() => deleteSavedAPI(index)} style={{ cursor: "pointer", padding: "5px" }}>
                          <FaTrash /> Delete 
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : <p style={{ textAlign: "left" }}>No saved APIs</p>}
            </div>
          </div>

          
          <div>
            <div style={{ marginBottom: "10px", cursor: "pointer", textAlign: "left" }}>
              <Link to="/termsofservices"  style={{textDecoration:'none',color:'white'}}><FaFileContract /> Terms of Services</Link>
            </div>
            <div style={{ cursor: "pointer", textAlign: "left" }}>
              <Link to='/privacypolicy' style={{textDecoration:'none',color:'white'}}><FaFileContract /> Privacy Policy</Link>
            </div>
          </div>
        </aside>
<div style={{display:'flex',flex:1, flexDirection:'column'}}>
        <Typography sx={{justifyContent:'center',alignItems:'center',fontSize:"35px",fontWeight:'bolder',marginTop:"10rem"}}> What are you Looking for!</Typography>
        <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          
          <div style={{
            width: "70%", display: "flex", alignItems: "center", backgroundColor: "white",
            padding: "12px", borderRadius: "8px", boxShadow: "0px 0px 8px rgba(0,0,0,0.2)"
          }}>
            <FaSearch style={{ marginRight: "10px", color: "gray" }} />
            <input
              type="text"
              placeholder={`Search by ${filter}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ flex: 1, border: "none", outline: "none", fontSize: "16px" }}
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{ padding: "8px", backgroundColor: "#444658", color: "white", border: "none", cursor: "pointer", borderRadius: "8px" }}
            >
              <option value="name">Name</option>
              <option value="keyword">Keyword</option>
              <option value="description">Description</option>
            </select>
          </div>

          <button
            onClick={handleSearch}
            style={{
               backgroundColor: "#444658", color: "white",marginLeft:'1rem',
              padding: "13px 32px", borderRadius: "8px", border: "none", fontSize: "16px", cursor: "pointer"
            }}
          >
            Search
          </button>
        </main>
        </div>
      
        <div style={{ position: "absolute", top: "30px", right: "15px", display: "flex", alignItems: "center" }}>
          <FaUserCircle style={{ fontSize: "32px", color: "#444658" }} />
          <span style={{ marginLeft: "12px",marginRight:'1rem', fontSize: "18px", fontWeight: "bold" }}>Minahil</span>
        </div>
      </div>
      <Footer />
    </>
  );
};
