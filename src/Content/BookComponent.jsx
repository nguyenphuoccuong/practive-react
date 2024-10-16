import { books} from "/src/data.js"
import '/src/style.css';

function BookComponent (){
    return (
        <div className="books">
                    <div className="title">
                        <a href="">/</a>
                        <h3>BOOKS</h3>
                    </div>
                    {books.map((value,index)=>(
                        <div key={index} className="books-items">
                            <img src={value.img} alt="" />
                            <p><a href="">{value.title}</a></p>
                        </div>
                    ))}
        </div>
    )
}
export default BookComponent