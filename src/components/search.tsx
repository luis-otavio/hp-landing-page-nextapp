import { X } from "lucide-react";
import styles from "@/styles/search.module.scss";

interface SearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.searchContent}>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        className={styles.input}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <X 
        size={22} 
        strokeWidth={1} 
        onClick={() => setSearchValue('')} 
        className={styles.closeButton}
      />
    </div>
  );
};

export default Search;