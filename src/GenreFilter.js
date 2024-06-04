import "./genre.css"


const GenreFilter = ({ genres,setSelectedGenre }) => {
    const handleSelectedGenres = (item) => {
        setSelectedGenre(item);
        console.log("Filtering By",item);
    }


    return (
        <div className="genre">
            <h1>Filter By Genre</h1>
            <div className="genre-item">
                {
                    genres.map((item, idx) => {
                        return (<button onClick={() => {
                            handleSelectedGenres(item)
                        }} key={idx}>{item}</button>)
                    })
                }
            </div>
        </div>
    )
}
export default GenreFilter;