

export default function TopHeadComponent ({data}) {
    return (
        <div className="navbar">
            <div className="top-item">
                <ul>
                    {data.map ((value,key)=>(
                        <li key={key}><a href={value.link}>{value.title}</a></li>
                    ))}
                </ul>

                <div className="search">
                    <input type="text" name="search" id="" placeholder="Tìm kiếm"/>
                </div>
            
            
            </div>
            <div className="center-item">
                    <div className="logo">
                        <img src='https://kenh14cdn.com/web_images/k14_logo2022.svg' alt="" />
                    </div>

                    <div className="hastag">
                        <a href="">#Chung kết Olympia 24</a>
                        <a href="">#Du hí Quán Đỉnh Foodmarks</a>
                    </div>

            </div>
        </div>
    )
}