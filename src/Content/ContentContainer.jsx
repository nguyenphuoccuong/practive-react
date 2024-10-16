import { left_content } from "/src/data.js";
import { content_center} from "/src/data.js"
import { right_content} from "/src/data.js"
import { books} from "/src/data.js"
import '/src/style.css';

function ContentComponent() {
    return (
        <div className="main-content">
            <div className="content-left">
                <div className="content-left-items">
                    {left_content.map((value,stt) => (
                        <div key={stt}>
                            <img src={value.img}/>
                            <div className="content-left-items">
                                <a href=""><i className="fa-solid fa-image"></i>{value.title}</a>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>

            <div className="content-center ">
                    {content_center.map((value,index)=>(
                        <div key={index}>
                            <img src={value.img} alt="" />
                            <div>
                                <a href="">{value.title}</a>
                                <div>
                                    <span>{value.desc}</span>
                                </div>
                                
                            </div>
                        </div>
                    ))}
            </div>

            <div className="content-right">
                    {right_content.map((value,index)=>(
                        <div key={index} className="content-right-items">
                            <img src={value.img} alt="" />
                            <div>
                                <a href="">{value.title}</a>
                            </div>
                        </div>

                    ))}
            </div>       
            
            <div className="clear"></div>
                

        </div>
    );
}

export default ContentComponent;
