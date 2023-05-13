import React from "react";
import { useNavigate } from "react-router";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const backToHomePageHandler = () => {
    navigate("/home");
  };

  return (
    <div class="container mx-auto mt-10">
      <div class="flex shadow-md my-10">
        <div class="w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Carrito</h1>
            <h2 class="font-semibold text-2xl">
              Acá iría la cantidad de productos
            </h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Detalles del Producto
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Cantidad
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Precio
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <div class="w-20">
                <img
                  class="h-24"
                  src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                  alt=""
                />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">Iphone 6S</span>
                <span class="text-red-500 text-xs">Apple</span>
                <a
                  href="#"
                  class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Eliminar
                </a>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <input class="mx-2 border text-center w-8" type="number" />
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
            <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
          </div>

          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <div class="w-20">
                <img
                  class="h-24"
                  src="https://drive.google.com/uc?id=10ht6a9IR3K2i1j0rHofp9-Oubl1Chraw"
                  alt=""
                />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">Xiaomi Mi 20000mAh</span>
                <span class="text-red-500 text-xs">Xiaomi</span>
                <a
                  href="#"
                  class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Eliminar
                </a>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <input class="mx-2 border text-center w-8" type="number" />
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">$40.00</span>
            <span class="text-center w-1/5 font-semibold text-sm">$40.00</span>
          </div>

          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <div class="w-20">
                <img
                  class="h-24"
                  src="https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v"
                  alt=""
                />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">Airpods</span>
                <span class="text-red-500 text-xs">Apple</span>
                <a
                  href="#"
                  class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Eliminar
                </a>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <input class="mx-2 border text-center w-8" type="number" />
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
            <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
          </div>

          <button
            className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-25"
            onClick={backToHomePageHandler}
          >
            Volver al Inicio
          </button>
        </div>

        <div id="summary" class="w-1/4 px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">
            Resumen del pedido
          </h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Productos</span>
            <span class="font-semibold text-sm">
              Acá iría el nombre de cada producto y su precio
            </span>
          </div>

          <div class="border-t mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total:</span>
              <span>$600</span>
            </div>
            <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
