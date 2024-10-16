import '/src/style.css'
import { News} from "/src/data.js"
function NewsComponent(){
    return(
        <div className="section-content">
            <div className="section-content-left float-left">
                {News.map((value,index)=>(
                    <div key={index} className='section-content-items'>
                        <img src={value.img} alt="" />
                        <p><a href="">{value.title}</a></p>
                        <span>{value.desc}</span>
                    </div>
                ))}
            </div>  

            <div className="section-content-right">
                <img src="/src/image/social.jpg" alt="" />
            </div>
            <div className="section-content-right">
                <img src="/src/image/social.jpg" alt="" />
            </div>
            <div className="section-content-right">
                <img src="/src/image/social.jpg" alt="" />
            </div>
        </div>
    )
}

export default NewsComponent