import Link from "next/link"
import Router from 'next/router';

const Navbar = () => {
    return(
        <div>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/movies/addmovies"><a>Add Movies</a></Link></li>
                    <li><Link href="/movies/showmovies"><a>show Movies</a></Link></li>
                    <li><Link href="/profile"><a>Profile</a></Link></li>
                </ul>
        </div>
    )
}

export default Navbar;