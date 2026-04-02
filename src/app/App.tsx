import { Flower2, ShoppingBag, Heart, Star, Truck, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

export default function App() {
  const featuredProducts = [
    {
      id: 1,
      name: "Rose Elegance",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1588385494080-201c47faad95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwYm91cXVldCUyMHBpbmslMjBlbGVnYW50fGVufDF8fHx8MTc3NTA3Mzg3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      name: "White Lily",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1687946271298-caa66056eef1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWx5JTIwZmxvd2VycyUyMHdoaXRlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzUwNzM4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      reviews: 98
    },
    {
      id: 3,
      name: "Spring Tulips",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1770361516086-5c42022ecdbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dWxpcCUyMGJvdXF1ZXQlMjBzcHJpbmclMjBmcmVzaHxlbnwxfHx8fDE3NzUwNzM4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5.0,
      reviews: 156
    },
    {
      id: 4,
      name: "Luxury Mix",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1770194889934-6c4ebb0e5176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBhcnJhbmdlbWVudCUyMGx1eHVyeSUyMG1vZGVybnxlbnwxfHx8fDE3NzUwNzM4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9,
      reviews: 203
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-pink-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 9025860750</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@ksflowers.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">Follow us:</span>
              <div className="flex gap-3">
                <Instagram className="h-4 w-4 cursor-pointer hover:scale-110 transition" />
                <Facebook className="h-4 w-4 cursor-pointer hover:scale-110 transition" />
                <Twitter className="h-4 w-4 cursor-pointer hover:scale-110 transition" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-pink-100 p-2 rounded-lg">
                <Flower2 className="h-8 w-8 text-pink-600"src="https://ik.imagekit.io/dyvbrrwdb/WhatsApp%20Image%202026-03-26%20at%208.58.45%20PM.jpeg" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">KS Flowers</h1>
                <p className="text-xs text-gray-500">Fresh & Beautiful</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 font-medium transition">Home</a>
              <a href="#shop" className="text-gray-700 hover:text-pink-600 font-medium transition">Shop</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 font-medium transition">About</a>
              <a href="#occasions" className="text-gray-700 hover:text-pink-600 font-medium transition">Occasions</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 font-medium transition">Contact</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-pink-600">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-pink-600">
                  5
                </Badge>
              </Button>
              <Button className="bg-pink-600 hover:bg-pink-700 hidden sm:flex">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-100 px-4 py-1">
                  🌸 Welcome to KS Flowers
                </Badge>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Beautiful Flowers
                  <span className="block text-pink-600">For Every Moment</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Handpicked fresh flowers delivered to your doorstep. 
                  Make every occasion special with our stunning arrangements.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-lg px-8">
                  Shop Collection
                </Button>
                <Button size="lg" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50 text-lg px-8">
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-500">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-500">Flower Varieties</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-500">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 p-8">
                <img
                  src="https://images.unsplash.com/photo-1551468220-0a25172193f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmxvd2VyJTIwYm91cXVldCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzUwNzM4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Beautiful flower bouquet"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border">
                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Truck className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Free Delivery</div>
                    <div className="text-sm text-gray-500">On orders over $50</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
                <Flower2 className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Fresh Daily</h3>
                <p className="text-sm text-gray-600">Flowers picked fresh every morning for maximum freshness</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
                <Truck className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Same Day Delivery</h3>
                <p className="text-sm text-gray-600">Order before 2 PM for same-day delivery service</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
                <Star className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Quality Guaranteed</h3>
                <p className="text-sm text-gray-600">100% satisfaction guarantee or your money back</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-100 mb-4">
              Best Sellers
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our most popular flower arrangements loved by customers
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-shadow border-0 shadow-md">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-pink-600">${product.price}</span>
                    <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* About/CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1742836531226-a5c750d5a1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yaXN0JTIwd29ya3NwYWNlJTIwaGFuZHMlMjBmbG93ZXJzfGVufDF8fHx8MTc3NTA3Mzg4MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Florist at work"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-100">
                Our Story
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900">
                Crafting Beautiful Moments Since 2020
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At KS Flowers, we believe every flower tells a story. Our passionate team of 
                florists hand-selects each bloom to create stunning arrangements that bring 
                joy to your special moments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From weddings to birthdays, anniversaries to corporate events, we're here 
                to make every occasion unforgettable with the beauty of fresh flowers.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-pink-600 hover:bg-pink-700">
                  Learn More About Us
                </Button>
                <Button variant="outline" className="border-gray-300">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section id="occasions" className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flowers for Every Occasion</h2>
            <p className="text-xl text-gray-600">Perfect arrangements for all of life's special moments</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Weddings', 'Birthdays', 'Anniversaries', 'Sympathy'].map((occasion) => (
              <Card key={occasion} className="group cursor-pointer hover:shadow-xl transition-all border-0 shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                    <Flower2 className="h-16 w-16 text-pink-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">{occasion}</h3>
                    <p className="text-sm text-gray-600 mb-4">Beautiful arrangements for {occasion.toLowerCase()}</p>
                    <Button variant="link" className="text-pink-600 p-0">
                      Shop Now →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for exclusive offers and floral tips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-pink-600 p-2 rounded-lg">
                  <Flower2 className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl">KS Flowers</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Making every moment beautiful with fresh, handpicked flowers since 2020.
              </p>
              <div className="flex gap-3">
                <div className="bg-gray-800 p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition">
                  <Twitter className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Shop</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Occasions</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Blog</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition">Wedding Flowers</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Corporate Events</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Subscriptions</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Custom Orders</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-pink-400" />
                  <span>123 Flower St, Garden City, ST 12345</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-pink-400" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-pink-400" />
                  <span>info@ksflowers.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 KS Flowers. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
