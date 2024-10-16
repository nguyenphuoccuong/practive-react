
export const menu = [
    {
        title: "Xuất Bản",
    },
    {
        title: "Tác Giả",
    },
    {
        title: "Thể Thao",
    },
    {
        title: "Kinh Doanh",
    },
    {
        title: "Công Nghệ",
    },
    {
        title: "Sức Khỏe",
    },
    {
        title: "Đời Sống",
    },
    {
        title: "Giải trí",
    },
];

function HeaderComponent(){
    return(
        <div className="zing-header">
            <div className="logo float-left">
                <a href="">
                    <img src="/src/img/tải xuống.png" alt="" />
                </a>
            </div>
            <div className="menu float-left">
                <ul>
                    {menu.map((item,stt)=>(
                        <li key={stt}><a href="">{item.title}</a></li>
                    ))}
                    
                </ul>
            </div>
            <div className="search" ><a><i className="fa-solid fa-magnifying-glass"></i></a></div>
        </div>
    )
}

export default HeaderComponent