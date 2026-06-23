//일반적인 방식
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <p>{props.brand}</p>
    </div>
  );
}

// //구조분해할당 방식
// function Card({ name, price, brand }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{price}</p>
//       <p>{brand}</p>
//     </div>
//   );
// }

export default Card;
