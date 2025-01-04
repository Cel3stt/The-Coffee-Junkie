import React from "react";
import { Link, useNavigate } from "react-router-dom";

import heroImg from "../../assets/Shop/hero-img.png";
import highlightText from "../../assets/Shop/HighlightText.png"
import espressoMachine from '../../assets/Shop/espressoMachine.png'
import coffeeGrinders from '../../assets/Shop/coffeeGrinders.png'
import coffeeTools from '../../assets/Shop/coffeeTools.png'
import best1 from '../../assets/Shop/best-1.png'
import best2 from '../../assets/Shop/best-2.png'
import best3 from '../../assets/Shop/best-3.png'

import { Settings, Zap, Leaf, ChevronRightIcon } from 'lucide-react'

import { Button} from "@/components/ui/button"


const categories = [
  {
    id: "espressoMachines", label: "Espresso Machines",
    description: "Discover our range of high-quality espresso machines",
    image: espressoMachine
  },
  {
    id: "coffeeGrinders", label: "Coffee Grinders",
    description: "Find the perfect grinder for your coffee needs",
    image: coffeeGrinders
  },
  {
    id: "accessories", label: "Accessories",
    description: "Explore our selection of coffee accessories",
    image: coffeeTools
  }
]

const products = [
  {
    id: 1,
    name: "Nuova Simonelli G60 AMC",
    description: "Gives a cafe-quality results with micrometrical grind adjustment",
    image: best2,
    featured: true
  },
  {
    id: 2,
    name: "Nuova Simonelli Appia LIFE Volumetric Espresso Machine",
    description: "Volumetric Espresso Machine",
    image: best1
  },
  {
    id: 3,
    name: "Victoria Arduino E1 Prima",
    description: "Volumetric Espresso Machine",
    image: best3
  }
]

function ShoppingHome() {

  const navigate = useNavigate()

  function handleNavigateToListingPage(getCurrentItem, section){
    sessionStorage.removeItem('filters');
    const currentFilter = {
      [section] : [getCurrentItem.id]
    }

    sessionStorage.setItem('filters', JSON.stringify(currentFilter))
    navigate(`/shop/listing`)
  }

  
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full">

      <section className="py-10 md:py-24 lg:py-2 xl:py-12" style={{backgroundColor: '#FEFEFE'}}>
        <div className="container mx-auto px-6 py-16  md:px-12 lg:px-24 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className=" relative space-y-2">
              <h1 className="relative z-10 text-3xl font-bold tracking-normal leading-loose sm:text-5xl xl:text-6xl/none sm:text-left sm:leading-tight">


                Coffee Crafted <br /> for You Anytime, <br /> Anywhere!
                </h1>
                <img
                  src={highlightText}
                  alt="Highlight"
                  className="absolute top-0 left-0 z-0 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
                  style={{ transform: 'translate(-10%, -10%)' }}


                />
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 pt-6">
                Personalized Brews at the Push of a <br /> Button – Enjoy Fresh, Delicious Coffee <br /> Wherever You Are!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  
                  <Button className = 'rounded-full px-12' type="submit">Shop Now</Button>
                </form>
                
              </div>
            </div>
            <img
              src={heroImg}
              width="500"
              height="550"
              alt="Hero"
              className="mx-auto w-full h-auto object-contain lg:order-last"

            />
          </div>
        </div>

        <div className="mt-2 px-4 md:px-8">
    <p className="text-center text-sm text-gray-700 font-semibold">Trusted by the best brand</p>
    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 ">
      <img
        src="https://shop.gemilai.com/cdn/shop/files/28541b22-d633-4e6e-8ea6-49ac32345e48_514734b8-5758-4130-b90f-bec60ecd0000.jpg?v=1720162421&width=2048"
        alt="Brand logo"
        width="190"
        height="33"
      />

  <img src="https://www.espressocoffeeshop.com/img/m/24.jpg"
  alt="Brand logo"
  width="190"
  height="33"/>
  
  <img src="https://swiezopalona.pl/zdjecia/static/380x300/5795-Baratza.aspect.webp"
  alt="Brand logo"
  width="190"
  height="33"/>


  <img src="https://comisocoffee.com/cdn/shop/files/Victoria_Arduino_Logo_535x.png?v=1614320221"
  alt="Brand logo"
  width="190"
  height="33"/>



  <img src="https://logowik.com/content/uploads/images/breville-kitchen-appliances2738.logowik.com.webp"
  alt="Brand logo"
  width="190"
  height="33"/>



    </div>
  </div>

      </section>

      <section className="w-full py-3 md:py-24 lg:py-2" style={{backgroundColor: '#F3F5F7'}}>
      <div className="container mx-auto px-6 py-1  md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore Our Products
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover Premium Coffee Espresso Machines, Coffee Grinder, and Coffee tools for Every Need
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative overflow-hidden rounded-lg border-transparent bg-background"
            >
              <div className="aspect-square overflow-hidden flex justify-center items-center">
                <img
                  src={category.image}
                  alt={category.label}
                  width={250}
                  height={250}
                  className="object-cover transition-transform"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-xl font-bold">{category.label}</h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400 mb-4">
                  {category.description}
                </p>
                <Button onClick={() => handleNavigateToListingPage(category, 'category')}>
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-6 py-1 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-col gap-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Best Selling Products
          </h2>
          <p className="text-gray-500 md:text-xl">
            Discover our Best Selling Products all the time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Product */}
          {products.map((product) =>
            product.featured ? (
              <div
                key={product.id}
                className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-2"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm font-semibold text-gray-900 hover:underline"
                    >
                      Shop Now
                      <ChevronRightIcon />
                    </Link>
                  </div>
                  <div className="relative h-[550px] mt-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ) : null
          )}

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {products.map((product) =>
              !product.featured ? (
                <div
                  key={product.id}
                  className="relative overflow-hidden rounded-lg bg-gray-100"
                >
                  <div className="p-8 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <Link
                        href="#"
                        className="inline-flex items-center text-sm font-semibold text-gray-900 hover:underline"
                      >
                        Shop Now
                        <ChevronRightIcon />
                      </Link>
                    </div>
                    <div className="relative h-[200px] mt-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  )
}

export default ShoppingHome;
