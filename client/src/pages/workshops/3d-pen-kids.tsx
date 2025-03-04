import { ArrowRight, Star, Pen, Users, Clock, Trophy, Heart, CheckCircle, User2 } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "wouter";

const workshops = [
  {
    title: "Kids Beginner Workshop",
    description: "Introduction to 3D pen art for young creators aged 7-12.",
    details: "Perfect first step into 3D art creation",
    features: [
      "Basic pen control techniques",
      "Simple shape creation",
      "Color mixing basics",
      "Safety guidelines"
    ],
    duration: "2 hours",
    price: "$49",
    icon: Pen,
    gallery: ["/workshops/kids-basic-1.jpg", "/workshops/kids-basic-2.jpg"]
  },
  {
    title: "Creative Characters Workshop",
    description: "Learn to create favorite characters and animals in 3D.",
    details: "For kids who love storytelling through art",
    features: [
      "Character design basics",
      "3D figure creation",
      "Coloring techniques",
      "Story-based projects"
    ],
    duration: "3 hours",
    price: "$69",
    icon: Heart,
    gallery: ["/workshops/kids-characters-1.jpg", "/workshops/kids-characters-2.jpg"]
  },
  {
    title: "Junior Master Class",
    description: "Advanced techniques for young artists ready for complex projects.",
    details: "For experienced young creators",
    features: [
      "Advanced modeling techniques",
      "Multi-color projects",
      "Project planning",
      "Portfolio creation"
    ],
    duration: "4 hours",
    price: "$89",
    icon: Trophy,
    gallery: ["/workshops/kids-master-1.jpg", "/workshops/kids-master-2.jpg"]
  }
]

const stats = [
  { value: "500+", label: "Happy Kids", icon: Heart },
  { value: "50+", label: "Workshops Completed", icon: Trophy },
  { value: "12", label: "Project Types", icon: Pen },
  { value: "100%", label: "Fun Guaranteed", icon: Users }
]

const testimonials = [
  {
    name: "Sarah's Mom",
    content: "My daughter absolutely loved the workshop! She created amazing 3D art pieces.",
    rating: 5,
    avatar: "/testimonials/parent-1.jpg"
  },
  {
    name: "Tom's Dad",
    content: "The instructors were patient and helpful. Tom can't wait for the next class!",
    rating: 5,
    avatar: "/testimonials/parent-2.jpg"
  },
  {
    name: "Lisa's Mom",
    content: "A perfect blend of learning and fun. Lisa learned so much in just one session.",
    rating: 5,
    avatar: "/testimonials/parent-3.jpg"
  }
]

export default function KidsWorkshopsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                3D Pen Workshops for Kids
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Transform your child's creative journey with our engaging 3D pen workshops. Our expert instructors guide young minds through fun, interactive sessions.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                  <Link href="/booking">Start Your Journey</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#00FF00] text-[#00FF00]">
                  <Link href="#workshops">View Workshops</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <img
                  src="/services/3d-pen-1.png"
                  alt="3D Pen Workshop"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-black/50 border-[#00FF00]/20">
                  <CardHeader>
                    <stat.icon className="w-8 h-8 text-[#00FF00] mb-4" />
                    <CardTitle className="text-4xl font-bold text-white">
                      {stat.value}
                    </CardTitle>
                    <CardDescription className="text-white/60">
                      {stat.label}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Listings */}
      <section id="workshops" className="py-20">
        <div className="container mx-auto px-4 lg:px-20">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-32 last:mb-0"
            >
              <div className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-16 h-16 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                    <workshop.icon className="w-8 h-8 text-[#00FF00]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{workshop.title}</h3>
                  <p className="text-white/60">{workshop.description}</p>
                  <div className="space-y-4">
                    <p className="text-white font-medium">{workshop.details}</p>
                    <ul className="space-y-2">
                      {workshop.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-white/60">
                          <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4">
                      <p className="text-white/60">Duration: {workshop.duration}</p>
                      <p className="text-white/60">Price: {workshop.price}</p>
                    </div>
                    <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                      <Link href="/booking">Book Now</Link>
                    </Button>
                  </div>
                </div>
                <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                  {workshop.gallery.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={`Gallery ${i + 1}`}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Workshop Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-video bg-black/50 rounded-lg overflow-hidden"
              >
                <img
                  src={`/gallery/kids-${i}.jpg`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-black/50 border-[#00FF00]/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-[#00FF00]" />
                  </div>
                  <CardTitle className="text-4xl font-bold text-white">{stat.value}</CardTitle>
                  <CardDescription className="text-white/60">{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What Parents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 p-6 rounded-lg border border-[#00FF00]/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star 
                      key={idx} 
                      className="w-5 h-5 text-[#00FF00]" 
                      fill={idx < testimonial.rating ? "#00FF00" : "transparent"} 
                    />
                  ))}
                </div>
                <p className="text-white/80 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00FF00]/20 flex items-center justify-center">
                    <User2 className="w-5 h-5 text-[#00FF00]" />
                  </div>
                  <div className="text-white">
                    <p className="font-medium">{testimonial.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Rating & Details */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-[#00FF00]" fill="#00FF00" />
                ))}
              </div>
              <p className="text-2xl font-bold text-white mb-2">4.9 out of 5</p>
              <p className="text-white/60">Based on 50+ student reviews</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What You'll Learn</h3>
                <ul className="space-y-4">
                  {[
                    "Basic 3D pen techniques and safety",
                    "Color mixing and material properties",
                    "Creating 3D structures and objects",
                    "Project planning and execution",
                    "Advanced techniques for detail work"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Available Sessions</h3>
                <div className="space-y-4">
                  {[
                    { time: "Weekday Mornings", schedule: "Mon-Fri, 9:00 AM - 11:00 AM" },
                    { time: "Weekend Workshops", schedule: "Sat-Sun, 2:00 PM - 4:00 PM" },
                    { time: "Evening Classes", schedule: "Tue & Thu, 6:00 PM - 8:00 PM" }
                  ].map((session, i) => (
                    <div key={i} className="bg-black/50 p-4 rounded-lg border border-[#00FF00]/20">
                      <p className="font-medium text-white">{session.time}</p>
                      <p className="text-white/60">{session.schedule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Creating?</h2>
            <p className="text-xl text-white/60 mb-8">
              Join our workshops and watch your child's creativity soar with 3D pen art.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="/booking">Book Your Workshop</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#00FF00] text-[#00FF00]">
                <Link href="#workshops">Browse Workshops</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}