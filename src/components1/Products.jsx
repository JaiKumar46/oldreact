import React, { useEffect, useState} from 'react'
import Json from "./Product.json"

export default function Product() {
  const [state, setState] = useState([])
  
  useEffect(() => {
    let newlist = Json.slice(0, 10);
    setState(newlist);
  }, [])
  let handlePagination = (e) => {

    let CurrentPage = e.target.textContent;
    if (CurrentPage === "1") {
      setState(Json.slice(0, 10));
      return;
    }
    let start = (CurrentPage * 10) - 10
    let end = (CurrentPage * 10) 
    let newlist = Json.slice(start,end);
    setState(newlist)
    
  }


    return (
      <section>
        <h1>Recommended for you</h1>
        <article>
          <div className="product-container">
            {state.map(data => {
              return (
                <div>
                  <img src={data.thumbnail} alt="" />
                  <div className="card-body">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.6rem",
                        margin: ".5rem 0rem",
                      }}
                    >
                      <h4 className="rating">
                        {/* <i className="fa-solid fa-star-sharp"></i> */}
                        {data.rating}
                      </h4>
                      {data.rating > 4.4 && (
                        <h4
                          className="rating"
                          style={{ width: "5.4rem", background: "#3939c7" }}
                        >
                          Popular
                        </h4>
                      )}
                    </div>
                    <h4 className="price">{data.price}$</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
        <button style={{background:"red"}} onClick={handlePagination}>1</button>
        <button style={{background:"red"}} onClick={handlePagination}>2</button>
        <button style={{background:"red"}} onClick={handlePagination}>3</button>
      </section>
    );
}