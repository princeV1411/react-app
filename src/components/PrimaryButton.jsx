function PrimaryButton(){
    function gotoPage(){
        document.getElementById("page2").scrollIntoView({
        behavior:"smooth"
        });
    }
    return(
        <button onClick={gotoPage}>Let's Get Started -</button>
    )
}
export default PrimaryButton