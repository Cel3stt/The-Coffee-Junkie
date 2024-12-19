// import React from 'react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import heroImage from '../../assets/Shop/HeroImage.png'
// import { fetchProductDetails } from '@/store/shop/products-slice'





// function ShoppingHome() {

//   const categories = [
//     { id: "espressoMachines", label: "Espresso Machines", description: "Discover our range of high-quality espresso machines" },
//     { id: "coffeeGrinders", label: "Coffee Grinders", description: "Discover our range of high-quality coffee grinders" },
//     { id: "accessories", label: "Accessories", description: "Discover our range of premium coffee accessories" },
//   ]
  
  
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="container mx-auto px-4 h-screen pt-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
//           {/* Left Column */}
//           <div className="space-y-6">
//             <h1 className="text-6xl font-extrabold leading-tight">
//               Coffee Crafted <br />
//               <span className="relative">
//                 for You Anytime,
//                 <div className="absolute -z-10 bg-blue-100 w-full h-8 bottom-1"></div>
//               </span>
//               <br />
//               Anywhere!
//             </h1>
            
//             <p className="text-gray-600 text-lg max-w-md">
//               Personalized Brews at the Push of a Button – Enjoy Fresh, Delicious Coffee Wherever You Are!
//             </p>

//           <Button variant="default" size="lg" className="bg-black text-white hover:bg-gray-800">
//             Shop Now
//           </Button>
//         </div>

//         {/* Right Column */}
//         <div className="relative">
//           <img 
//             src={heroImage} 
//             alt="Professional Coffee Machine"
//             className="w-full h-auto"
//           />
          
//           {/* Feature Cards */}
//           <Card className="absolute top-0 right-0 p-4 bg-gray-900 text-white">
//             <h3 className="font-semibold">Premium Tools</h3>
//             <p className="text-sm text-gray-300">Barista Essentials</p>
//           </Card>

//           <Card className="absolute bottom-16 left-0 p-4 bg-gray-900 text-white">
//             <h3 className="font-semibold">Instant Aroma</h3>
//             <p className="text-sm text-gray-300">Effortless Coffee</p>
//           </Card>

//             <div className="absolute bottom-0 right-0 bg-blue-100 rounded-lg p-4">
//               <p className="text-4xl font-bold">100+</p>
//               <p className="text-sm">Coffee essential tools</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="w-full bg-[#F3F5F7]">
//         <div className="container mx-auto px-4 py-16">
//           <div className="space-y-4 mb-12">
//             <h2 className="text-3xl font-bold">Explore Our Products</h2>
//             <p className="text-gray-600">
//               Discover Premium Coffee Espresso Machines, Coffee Grinder, and Coffee tools for Every Need
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {categories.map((category) => (
//               <Card onClick={() =>
//                 handleNavigateToListingPage(categoryItem, "category")
//               } key={category.id} className="bg-white rounded-xl p-8 space-y-4">
//                 <img 
//                   src={`/src/assets/Shop/${category.id}.png`}
//                   alt={category.label}
//                   className="w-full h-48 object-contain mb-4"
//                 />

//                 <CardContent>
//                 <h3 className="text-xl font-semibold">{category.label}</h3>
//                 <p className="text-gray-600 text-sm">{category.description}</p>
//                 <Button variant="default" className="bg-black text-white hover:bg-gray-800 mt-2">
//                   Explore
//                 </Button></CardContent>       
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Hurry Up Deals Section */}
//       <section className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#F8F7F3] rounded-xl overflow-hidden">
//           {/* Left: Product Image */}
//           <div className="p-12">
//             <img 
//               src="/src/assets/Shop/deals.png"
//               alt="Coffee Grinder"
//               className="w-full h-auto max-w-md mx-auto"
//             />
//           </div>

//           {/* Right: Promotion Content */}
//           <div className=" bg-[#E1E1E1] p-12">
//             <div className="space-y-4">
//               <span className="text-sm font-medium">PROMOTION</span>
              
//               <h2 className="text-4xl font-bold">Hurry up! 40% OFF</h2>
              
//               <p className="text-gray-600">
//                 Lots of high machines are waiting for you
//               </p>

//               <div className="mt-8 ">
//                 <p className="text-sm mb-4">Offer expires in:</p>
                
//                 <div className="flex gap-4">
//                   <div className="text-center">
//                     <div className="text-2xl bg-white rounded-lg p-2 font-bold">02</div>
//                     <div className="text-xs text-gray-500">Days</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl   bg-white p-2 rounded-lg font-bold">12</div>
//                     <div className="text-xs text-gray-500">Hours</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl  bg-white p-2 rounded-lg font-bold">45</div>
//                     <div className="text-xs text-gray-500">Minutes</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl bg-white p-2 rounded-lg font-bold">05</div>
//                     <div className="text-xs text-gray-500">Seconds</div>
//                   </div>
//                 </div>

//                 <Button 
//                   variant="default" 
//                   className="bg-black text-white hover:bg-gray-800 mt-8"
//                 >
//                   Shop now
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Best Selling Products Section */}
//       <section className="container mx-auto px-4 py-16">
//   {/* Header */}
//   <div className="space-y-4 mb-12 text-center">
//     <h2 className="text-3xl font-bold">Best Selling Products</h2>
//     <p className="text-gray-600">Discover our Best Selling Products all the time</p>
//   </div>

//   {/* Grid Layout */}
//   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//     {/* Large Product Card - Takes Full Height */}
//     <div className="bg-[#F8F7F3] rounded-xl p-8 lg:row-span-2">
//       <img 
//         src="/src/assets/Shop/12G60AMC.png" 
//         alt="Headband" 
//         className="w-full h-64 object-contain mb-8"
//       />
//       <h3 className="text-2xl font-semibold">Headband</h3>
//       <div className="flex items-center mt-2">
//         <span className="text-sm">Collection</span>
//         <svg 
//           className="w-4 h-4 ml-2" 
//           viewBox="0 0 24 24" 
//           fill="none" 
//           stroke="currentColor" 
//           strokeWidth="2"
//         >
//           <path d="M5 12h14M12 5l7 7-7 7"/>
//         </svg>
//       </div>
//     </div>

//     {/* Right Column - Two Stacked Cards */}
//     <div className="space-y-6">
//       {/* Top Card */}
//       <div className="bg-[#E1E1E1] rounded-xl p-8 flex items-center justify-between">
//         <div>
//           <h3 className="text-2xl font-semibold">Earbuds</h3>
//           <div className="flex items-center mt-2">
//             <span className="text-sm">Collection</span>
//             <svg 
//               className="w-4 h-4 ml-2" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"/>
//             </svg>
//           </div>
//         </div>
//         <img 
//           src="/src/assets/Shop/E1Prima.png" 
//           alt="Earbuds" 
//           className="w-32 object-contain"
//         />
//       </div>

//       {/* Bottom Card */}
//       <div className="bg-black text-white rounded-xl p-8 flex items-center justify-between">
//         <div>
//           <h3 className="text-2xl font-semibold">Accessories</h3>
//           <div className="flex items-center mt-2">
//             <span className="text-sm">Collection</span>
//             <svg 
//               className="w-4 h-4 ml-2" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"/>
//             </svg>
//           </div>
//         </div>
//         <img 
//           src="/src/assets/Shop/Musica.png" 
//           alt="Accessories" 
//           className="w-32 object-contain"
//         />
//       </div>
//     </div>
//   </div>
// </section>

//     </>
//   )
// }

// export default ShoppingHome

