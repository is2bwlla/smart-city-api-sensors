import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex bg-[#E4E4E5] p-3 flex-col w-[200px] h-screen">
            <h2 className="text-2xl">Sensores</h2>
            <hr className="border-t border-black mt-1 mb-6" />
            <Link to="/umidity"><h2 className="text-xl mb-9">Umidade</h2></Link>
            <Link to="/temperature"><h2 className="text-xl mb-8">Temperatura</h2></Link>
            <Link to="/luminosity"><h2 className="text-xl mb-8">Luminosidade</h2></Link>
            <Link to="/counter"><h2 className="text-xl mb-8">Contador</h2></Link>
        </nav>
    )
}

export default Navbar;