// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// interface Product {
//   title: string;
//   price: number;
//   priceWithoutDiscount?: number;
//   badge?: string;
//   description: string;
//   image: {
//     asset: {
//       _ref: string;
//       _type: string;
//     };
//   };
// }

// const ProductDetail = ({ params }: { params: { id: string } }) => {
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const data = await client.fetch(
//           `*[_type == "products" && _id == $id][0]{
//             title,
//             price,
//             priceWithoutDiscount,
//             badge,
//             description,
//             image
//           }`,
//           { id: params.id }
//         );
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [params.id]);

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
//         <div className="flex flex-col sm:flex-row gap-12">
//           <div className="flex-shrink-0 w-full sm:w-1/2">
//             <img
//               src={urlFor(product.image).url()}
//               alt={product.title}
//               className="w-full h-auto object-cover rounded-lg shadow-lg"
//             />
//           </div>
//           <div className="flex-1">
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">
//               {product.title}
//             </h1>
//             <p className="text-xl text-gray-700 mb-6">
//               ${product.price.toFixed(2)}
//               {product.priceWithoutDiscount && (
//                 <span className="text-gray-500 line-through ml-3">
//                   ${product.priceWithoutDiscount.toFixed(2)}
//                 </span>
//               )}
//             </p>
//             {product.badge && (
//               <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
//                 {product.badge}
//               </span>
//             )}
//             <p className="text-gray-600 mb-8">{product.description}</p>
//             <button
//               className="px-6 py-3 bg-gray-900 text-white rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors"
//               onClick={() => history.back()}
//             >
//               Back to Products
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
// "use client";
// import { useEffect, useState, useContext } from "react";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { CartContext } from "@/app/components/CartContext"; // Import CartContext

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   priceWithoutDiscount?: number;
//   badge?: string;
//   description: string;
//   image: {
//     asset: {
//       _ref: string;
//       _type: string;
//     };
//   };
// }

// const ProductDetail = ({ params }: { params: { id: string } }) => {
//   const [product, setProduct] = useState<Product | null>(null);

//   // Access CartContext and check for undefined
//   const cartContext = useContext(CartContext);

//   // If CartContext is undefined (which shouldn't happen with the CartProvider in place), throw an error
//   if (!cartContext) {
//     throw new Error(
//       "CartContext is undefined. Ensure that CartProvider is wrapping the component."
//     );
//   }

//   const { addToCart } = cartContext; // Access the addToCart function

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const data = await client.fetch(
//           `*[_type == "products" && _id == $id][0]{
//             _id,
//             title,
//             price,
//             priceWithoutDiscount,
//             badge,
//             description,
//             image
//           }`,
//           { id: params.id }
//         );
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [params.id]);

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
//         <div className="flex flex-col sm:flex-row gap-12">
//           <div className="flex-shrink-0 w-full sm:w-1/2">
//             <img
//               src={urlFor(product.image).url()}
//               alt={product.title}
//               className="w-full h-auto object-cover rounded-lg shadow-lg"
//             />
//           </div>
//           <div className="flex-1">
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">
//               {product.title}
//             </h1>
//             <p className="text-xl text-gray-700 mb-6">
//               ${product.price.toFixed(2)}
//               {product.priceWithoutDiscount && (
//                 <span className="text-gray-500 line-through ml-3">
//                   ${product.priceWithoutDiscount.toFixed(2)}
//                 </span>
//               )}
//             </p>
//             {product.badge && (
//               <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
//                 {product.badge}
//               </span>
//             )}
//             <p className="text-gray-600 mb-8">{product.description}</p>
//             <button
//               className="px-6 py-3 bg-gray-900 text-white rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors"
//               onClick={() =>
//                 addToCart({
//                   id: product._id,
//                   title: product.title,
//                   price: product.price,
//                   quantity: 1, // Default quantity
//                   description: product.description, // Add description
//                   imageUrl: urlFor(product.image).url(), // Generate the image URL using Sanity's urlFor
//                 })
//               }
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
"use client";
import { useEffect, useState, useContext } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { CartContext } from "@/app/components/CartContext";

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error(
      "CartContext is undefined. Ensure that CartProvider is wrapping the component."
    );
  }

  const { addToCart } = cartContext;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "products" && _id == $id][0]{
            _id,
            title,
            price,
            priceWithoutDiscount,
            badge,
            description,
            image
          }`,
          { id: params.id }
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-lg text-gray-600 font-medium">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Product Image Section */}
          <div className="relative group">
            <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={urlFor(product.image).url()}
                alt={product.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {product.badge && (
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-teal-100 text-teal-800">
                  {product.badge}
                </span>
              </div>
            )}
          </div>

          {/* Product Details Section */}
          <div className="mt-10 lg:mt-0 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                  {product.title}
                </h1>

                {/* Price */}
                <div className="mt-6 flex items-center">
                  <p className="text-3xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.priceWithoutDiscount && (
                    <p className="ml-4 text-xl text-gray-500 line-through">
                      ${product.priceWithoutDiscount.toFixed(2)}
                    </p>
                  )}
                  {product.priceWithoutDiscount && (
                    <span className="ml-4 text-sm font-medium text-green-600">
                      Save $
                      {(product.priceWithoutDiscount - product.price).toFixed(
                        2
                      )}
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="mt-8">
                  <div className="prose prose-sm text-gray-600">
                    <p className="text-lg leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Features/Highlights */}
                <div className="mt-10">
                  <div className="border-t border-gray-200 pt-10">
                    <ul className="space-y-4">
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 text-teal-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Free shipping worldwide
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 text-teal-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Secure checkout
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 text-teal-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        30-day money-back guarantee
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-10 border-t border-gray-200 pt-10">
                <button
                  onClick={() =>
                    addToCart({
                      id: product._id,
                      title: product.title,
                      price: product.price,
                      quantity: 1,
                      description: product.description,
                      imageUrl: urlFor(product.image).url(),
                    })
                  }
                  className="w-full bg-teal-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Add to Cart
                </button>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  Free shipping on all orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
