import { NavLink, useNavigate } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from "react";

export const Navigation = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const array = ["avatar" , "alert", "badge", "button", "card", "heading", "text", "image"]
    const handleSearch = (e) => {
      e.preventDefault()

      const searchItem = search.toLowerCase()
      
      if(array.find(item => searchItem === item))
         { 
          navigate(`/components/${searchItem}s`);
          setSearch("") 
     } 
     else { 
      alert(`${searchItem} component not found`) }
    
    }

    return(
        <div>
        <nav className="nav">
        <h1 className="h1">Drop UI</h1>
        <form onSubmit={handleSearch}>
        <input className="input" type="text" value={search} placeholder="Search for Components..." onChange={(e) => setSearch(e.target.value)} />
        <SearchOutlinedIcon onClick={handleSearch} className="search-btn" />
        </form>
        <NavLink className="navv" to="/" >Home</NavLink>
        <NavLink className="navv" to="/components" >Components</NavLink>
        <NavLink className="navv" to="https://github.com/ShivamT16/Drop-UI" target='_blank' > <GitHubIcon fontSize="large" /> </NavLink>
        
      </nav>
        </div>
    )
}