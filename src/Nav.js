import { Link } from "react-router-dom"

const Nav = ({search, setSearch}) => {
    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search posts</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search posts"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul className="navList">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav