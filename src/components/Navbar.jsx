function Navbar(){
    function login(){
        alert("API Calling Plese wait.....");
    }
     function openMenu(){
        let bar = document.getElementById("sideMenu");
        bar.style.left="0px";
    }
     function closeMenu(){
        let bar = document.getElementById("sideMenu");
        bar.style.left="-350px";
    }
    return(
        <nav>
            <div className="logo">|__|College<span>Hub</span></div>
            <div className="logMenu">
                <div className="login" onClick={login}>Login</div>
                <div className="menu" onClick={openMenu} onDoubleClick={closeMenu}></div>
            </div>           
        </nav>
    )
}
export default Navbar