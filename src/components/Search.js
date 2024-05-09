import { Link } from 'react-router-dom';

function Search() {
  return (
    <div className='search-css'>
      <form className='form'>
        <h2>Search for Travellers</h2>
        <input type="search" placeholder='Enter Destination' />
        <button type='submit'><Link to='/OfferList' className='link-css'>Search</Link></button>
      </form>
    </div>
  );
}

export default Search;