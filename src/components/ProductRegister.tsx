import { products, type Product } from "@/data/portfolio";

function ProductLinks({ product }: { product: Product }): React.JSX.Element {
  return (
    <div className="product-links" aria-label={`${product.title} links`}>
      {product.demo ? (
        <a href={product.demo} target="_blank" rel="noreferrer">
          Live demo <span aria-hidden="true">↗</span>
        </a>
      ) : null}
      <a href={product.github} target="_blank" rel="noreferrer">
        Repository <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

function ProductFacts({ product }: { product: Product }): React.JSX.Element {
  return (
    <aside className="product-facts" aria-label={`${product.title} summary`}>
      <strong>{product.statement}</strong>
      {product.result ? (
        <dl>
          <div><dt>Result</dt><dd>{product.result}</dd></div>
          <div><dt>Event</dt><dd>{product.event}</dd></div>
        </dl>
      ) : null}
      <p>{product.stack}</p>
    </aside>
  );
}

function ProductEntry({ product }: { product: Product }): React.JSX.Element {
  return (
    <article className="product-entry">
      <span className="product-index" aria-hidden="true">{product.index}</span>
      <div className="product-body">
        <p className="eyebrow">{product.category}</p>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <ProductLinks product={product} />
      </div>
      <ProductFacts product={product} />
    </article>
  );
}

export default function ProductRegister(): React.JSX.Element {
  return (
    <section className="products-section" id="products" aria-labelledby="products-title">
      <header className="section-heading">
        <p className="eyebrow">01 / Selected products</p>
        <h2 id="products-title">
          Six products across private money, applied intelligence, and useful software.
        </h2>
      </header>
      <div className="product-register">
        {products.map((product) => <ProductEntry key={product.title} product={product} />)}
      </div>
    </section>
  );
}
