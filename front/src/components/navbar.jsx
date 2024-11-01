import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-around bg-slate-400 p-3">
            <Link to="/umidity"><h2 className="text-lg">Umidade</h2></Link>
            <Link to="/temperature"><h2 className="text-lg">Temperatura</h2></Link>
            <Link to="/luminosity"><h2 className="text-lg">Luminosidade</h2></Link>
            <Link to="/counter"><h2 className="text-lg">Contador</h2></Link>
        </nav>
    )
}

export default Navbar;