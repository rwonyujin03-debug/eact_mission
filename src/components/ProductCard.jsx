import styles from "./ProductCard.module.css";

function ProductCard({ name, price, brand }) {
  return (
    <article className={styles.card}>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{brand}</p>
    </article>
  );
}

export default ProductCard;
