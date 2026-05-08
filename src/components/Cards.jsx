function Cards(props){
    return(
        <div className="b1">
            <div className="cir"></div>
              <h3>{props.resourcesName}</h3>
              <p>{props.resourcesDeccription}</p>
              <div className="info">{props.resourcesValue}+     {props.resourcesName}</div>
              <a href="https://www.google.com">Explore -</a>
          </div>
    )
}
export default Cards