export default function Header() {
  return (
    <header className="p-10 absolute w-full z-50">
        <nav>
            <a>
                Icon
            </a>
            <div className='float-right space-x-5 text-brand-yellow font-bold text-base'>
                <a className="cursor-pointer hover:text-white">Listings</a>
                <a className="cursor-pointer hover:text-white">Services</a>
                <a className="cursor-pointer hover:text-white">Agents</a>
                <a className="cursor-pointer hover:text-white">Culture</a>
                <a className="text-white bg-brand-yellow rounded-lg px-4 py-2 hover:bg-white hover:text-brand-yellow cursor-pointer">Contact</a>
            </div>
        </nav>
    </header>
  );
}