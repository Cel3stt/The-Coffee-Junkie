import React from 'react'
import { AwardIcon, CheckIcon, MountainIcon, ScalingIcon, UsersIcon } from 'lucide-react'
import aboutUs from '../../assets/Shop/aboutUs.png'
import { Button } from '@/components/ui/button'
import ShoppingFooter from '@/components/shopping-view/Footer'
import Logo from '../../assets/Shop/RectangleLogo.png'
import { Link } from 'react-router-dom'
function ShoppingAboutUsPage() {
    return (
        <div className="flex flex-col min-h-screen">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto max-w-[900px] px-4 md:px-6">
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <img src={Logo} alt="The Coffee Junkie" />
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About The Coffee Junkie</h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Coffee Junkie is a leading coffee equipment provider that specializes in premium coffee machines and accessories. 
                  Our mission is to empower coffee enthusiasts with the best tools for their brewing journey.
                </p>
              </div>
            </div>
          </section>
    
          {/* Mission Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto max-w-[900px] px-4 md:px-6">
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Mission</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Empowering Coffee Enthusiasts
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    At The Coffee Junkie, our mission is to provide coffee lovers with the finest equipment and knowledge
                    to create their perfect cup. We believe in the power of quality tools and expertise to transform
                    the coffee brewing experience.
                  </p>
                </div>
              </div>
            </div>
          </section>
    
          {/* Values Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto max-w-[900px] px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="space-y-2 text-center">
                  <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Our Values</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Stand For</h2>
                </div>
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-8">
                  <div className="space-y-4">
                    <ul className="grid gap-4">
                      <li className="flex items-start gap-4">
                        <CheckIcon className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Quality First</h3>
                          <p className="text-muted-foreground">
                            We source only the highest quality coffee equipment and accessories.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckIcon className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Expert Knowledge</h3>
                          <p className="text-muted-foreground">
                            Our team provides expert guidance for your coffee journey.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckIcon className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Customer Service</h3>
                          <p className="text-muted-foreground">
                            We're dedicated to providing exceptional support to our customers.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckIcon className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Innovation</h3>
                          <p className="text-muted-foreground">
                            We stay ahead with the latest coffee technology and trends.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <img1
                      src={aboutUs}
                      alt="Our Values"
                      width={550}
                      height={550}
                      className="object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* Achievements Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto max-w-[900px] px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Achievements</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Milestones</h2>
                </div>
                <div className="grid gap-8 md:grid-cols-3 mt-8 pt-8">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 rounded-lg bg-primary">
                      <AwardIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold">Premium Quality</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Recognized for excellence in coffee equipment
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 rounded-lg bg-primary">
                      <UsersIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold">Happy Customers</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Thousands of satisfied coffee enthusiasts
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 rounded-lg bg-primary">
                      <MountainIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold">Expert Service</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Professional support and guidance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto max-w-[900px] px-4 md:px-6">
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Join Us!</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Elevate Your Coffee Experience?
                  </h2>
                  <div className='pt-9'>
                 
                  <Link to ='/shop/listing'>
                  <Button>
                    Explore our Products
                  </Button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <ShoppingFooter/>
          </section>
        </div>
      )
}
    
 

export default ShoppingAboutUsPage
