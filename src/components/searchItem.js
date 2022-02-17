
const SearchItem = ({search,setSearch})=>{
    return(
        <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
            <label>Search</label>
            <input
            id="search"
            placeholder="Search Items"
            type='text'
            role='searchbox'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        </form>
    );
}

export default SearchItem;