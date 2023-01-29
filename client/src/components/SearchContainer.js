import { FormRow, FormRowSelect } from '.';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';
import {useState, useMemo} from 'react' 

function SearchContainer() {
{/**/} const [localSearch, setLocalSearch] = useState('')
  const {
    isLoading, 
    search, 
    searchStatus, 
    searchType, sort, 
    sortOptions,
    handleChange,
    clearFilters,
    jobTypeOptions,
    statusOptions,
  } = useAppContext()
  const handleSearch = (e)=> {
    //if (isLoading) return 
    handleChange({
        name: e.target.name, 
        value: e.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setLocalSearch('')
    clearFilters()
  }
  {/*optimizing user experience */}
  const debounce = () => {
    let timeoutID
    return (e) => {
      setLocalSearch(e.target.value)
      clearTimeout(timeoutID)
      timeoutID = setTimeout(()=>{
        handleChange({
          name: e.target.name, 
          value: e.target.value})  
      }, 1000)
    }
  }
  const optimizedDebounce = useMemo(()=>debounce(), [])

  return (
    <Wrapper>
        <form className="form">
          <h4>Search</h4>
          <div className="form-center">
            {/*Search position*/}
            <FormRow 
              type="text" 
              name="search" 
              //value={search}
              value={localSearch}
              //handleChange={handleSearch}
              handleChange={optimizedDebounce}
              />
              {/*search by status*/}
              <FormRowSelect 
                labelText='status'
                name='searchStatus'
                value={searchStatus}
                handleChange={handleSearch}
                list={['all', ...statusOptions]}
              />
              {/*search by type*/}
              <FormRowSelect 
                labelText='type'
                name='searchType'
                value={searchType}
                handleChange={handleSearch}
                list={['all', ...jobTypeOptions]}
              />
              {/*search by sort*/}
              <FormRowSelect 
                name='sort'
                value={sort}
                handleChange={handleSearch}
                list={sortOptions}
              />
              <button
                className="btn btn-block btn-danger"
                disabled={isLoading}
                onClick={handleSubmit}
              >Clear Filters</button>
          </div>
        </form>
    </Wrapper>
  )
}

export default SearchContainer
