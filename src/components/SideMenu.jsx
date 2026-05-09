function SideMenu(){
    function closeMenu(){
        let bar = document.getElementById("sideMenu");
        bar.style.left="-296px";
    }
    return(
        <ul id="sideMenu">
            <div className="profile">
                <div className="img"></div>
                <div className="details">
                    <h4>Prince Vaishnav</h4>
                    <p className="gmail">princevaishnav323@gmail.com</p>
                </div>
            </div>
            <li><div className="icon"></div><a href="#">profile</a></li>
            <li><div className="icon"></div><a href="#">upload</a></li>
            <li><div className="icon"></div><a href="#">community</a></li>
            <li><div className="icon"></div><a href="#">notifications</a></li>
            <li><div className="icon"></div><a href="#">saved</a></li>
            <i className="closeBar" onClick={closeMenu}>X</i>
            <li id="logout"><div className="icon"></div><a href="#">logout</a></li>
          </ul>
    )
}
export default SideMenu