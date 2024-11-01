import { Outlet } from "react-router-dom";

export default function LayoutComponent () {
    return(
        <div>
            <header>
                <nav>Hien thi menu</nav>
            </header>
            <main>
                <Outlet/>
            </main>

            <footer>hien thi footer</footer>
            
        </div>
    )
}