import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

export default function Test() {
  const Products = [
    {
      id: 1,
      img: "https://assets.unileversolutions.com/recipes-v2/99439.jpg",
      prodName: "Sanduíche de Frango",
      Category: "Salgados",
      disponibility: "Disponível",
      price: 13,
    },
    {
      id: 2,
      img: "https://zaffari.vtexassets.com/arquivos/ids/276576/1007841-00.jpg?v=638802406334870000",
      prodName: "Coca-Cola Lata",
      Category: "Bebidas",
      disponibility: "Disponível",
      price: 4,
    },
    {
      id: 3,
      img: "https://drogariavenancio.vtexassets.com/arquivos/ids/1094824-800-450?v=638385936933500000&width=800&height=450&aspect=true",
      prodName: "Kit Kat",
      Category: "Doces",
      disponibility: "Disponível",
      price: 5,
    },
    {
      id: 4,
      img: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/15890/medium/agua-mineral-crystal-sem-gas-500ml_89544.png",
      prodName: "Água sem gás",
      Category: "Bebidas",
      disponibility: "Disponível",
      price: 35,
    },
  ];

  const { addToCart } = useCart();

  return (
    <div className="py-5">
      {Products.map((product) => (
        <div key={product.id} className="mb-4 font-sans">
          <div
            className="flex justify-between place-items-center w-[85%] h-[120px] font-sans mx-auto px-3  rounded-xl shadow-xl md:px-10 lg:w-[70%] xl:w-[60%] font-poppins"
            style={{ backgroundColor: "#fff" }}
          >
            <div className="flex justify-between gap-2.5 md:gap-10">
              <img
                src={product.img}
                alt="img"
                className="w-[80px] h-[50px] my-auto xl:w-[90px]"
              />
              <div>
                <span className="text-sm font-bold text-gray-500 md:text-xl font-poppins">
                  {product.prodName}
                </span>
                <br />
                <span className="font-semibold font-poppins text-xs md:text-md lg:text-lg">
                  {product.Category}
                </span>{" "}
                <br />
                <span className="p-1 rounded-md font-poppins bg-green-400 text-xs text-white">
                  {product.disponibility}
                </span>
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold font-poppins text-gray-500 md:text-xl">
                R$ {product.price}
              </span>{" "}
              <br />
              <Link to="/teste">
                <button className="bg-red-500">+</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
