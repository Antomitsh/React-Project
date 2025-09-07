export function ProductCard({
  product, 
  background = "slategray", 
  onPurchase}) {

  
  
 
  return (
    <article 
    style={{border: '1px solid white', 
    borderRadius: '8px', 
    padding: '16px', 
    textAlign: "center",
    width: '100%',
    background,
    }}>
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
       width={128} height={128}
      />
      <p>Specification:</p>
      <ul style={{
        listStyle: "none",
        padding: 0
      }}>
        {product.specification.map((spec, index )=> (<li key={index}>{spec}</li>))}

      </ul>
      <Status stockCount={product.stockCount} />
      <button onAuxClick={() => onPurchase(product)}> Buy (From ${product.price})</button>
    </article>
  );
}

function Status({ stockCount }){
  const notAvailableTemplate = (
    <p style={{ fontSize: "14px", color: "lightsalmon"}}>Not available</p>
 
  );

  const availableTemplate = (<p style={{ fontSize: "14px", color: "lightgreen"}}>{stockCount} itmes available</p>

  );
  return stockCount === 0 ?  notAvailableTemplate : availableTemplate 
  }

   
