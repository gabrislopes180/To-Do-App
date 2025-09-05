import { useCart } from "../context/cartContext";
export default function Cart() {
  const { cart } = useCart();

  return (
    <div>
      {cart.map((iten, index) => (
        <div key={index}>
          <span>{iten.prodName}</span>
          <img src={iten.img} />
          <span>{iten.price}</span>
          <span>{iten.Category}</span>
          <span>{iten.disponibility}</span>
        </div>
      ))}
    </div>
  );
}
