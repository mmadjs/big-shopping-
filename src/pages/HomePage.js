import Layout from "../layot/layot";
import * as data from "../data1";
const HomePage = () => {
    const addProductHandler =(p)=>{
        console.log(p);
    }
  return (
    <Layout>
      <main className="container">
        <div className="product-list">
          {data.products.map((p) => {
            return (
              <section className="product">
                <div>
                  <img className="img" src={p.image} alt={p.name}></img>
                </div>
                <div className="product-decription">
                  <p>{p.name}</p>
                  <button onClick={()=>addProductHandler(p)} className="btn primary" >add to cart </button>

                  <p>${p.price}e</p>
                </div>
               
                
              </section>
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export default HomePage;
