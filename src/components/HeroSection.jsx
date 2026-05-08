function HeroSection(props){
    return(   
       <>
        <h1>{props.title}<span>{props.highlight}</span></h1>
        <p>{props.description}</p>
       </>
    )
}
export default HeroSection