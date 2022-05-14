// import { useQueryParamDebounce } from 'hooks/useQueryParamDebounce'
import { MdSearch } from 'react-icons/md'
import { Input } from './input'

interface InputSearchProps {
  className?: string
}
const InputSearch = ({ className }: InputSearchProps) => (
  // const [searchPhrase, setSearchPhrase] = useQueryParamDebounce('searchPhrase', '')

  <Input
    color="white"
    className={className}
    icon={<MdSearch />}
    placeholder="Search..."
    // value={searchPhrase}
    // onChange={(e) => setSearchPhrase(e.target.value)}
  />
)

export { InputSearch }
