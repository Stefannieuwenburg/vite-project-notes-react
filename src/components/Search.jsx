import { MdSearch } from "react-icons/md";

const Search = ({handleSearchNote}) => {
    return (
        <>
            <div className="search">
                <MdSearch className="seach-icons" size='1.3em' />
                <input
                    onChange={(e) => handleSearchNote(e.target.value)}
                    type="text"
                    placeholder="type your Search... "></input>
            </div>
        </>
    );
};

export default Search;
