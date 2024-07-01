
const Tweet = (props) => {
  return (
      <div>
          <section>            
              <h3> <span>🐤 </span> User: {props.username}</h3>
              <p>{props.tweet}
              <br></br>
              <strong>{props.date}</strong></p>
              <strong>Author: </strong> <cite>{props.name}</cite>  
          </section>

      </div>
  )
}