import "./movies.css"

const DisplayMoviesList = ({ movies }) => {
    return (
        <div className="movies-list">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{item.title}</td>
                                    <td>{item.genre}</td>
                                    <td>{item.year}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayMoviesList;