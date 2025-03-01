
import { Button } from "../components/ui/button.jsx";
import Image from "next/image";
import Header from "./_components/Header.js";
import Link from "next/link.js";
export default function Home() {
  return (
    <div className="landingClass">
      <Header />
      <main className="min-h-screen">
        <div className="flex flex-col items-center mt-16">
          <h2 className="text-4xl font-bold">AI Room And Home</h2>
          <h2 className="text-4xl font-bold text-blue-800">Interior Design</h2>
          <div className="flex flex-col gap-4 items-center mt-4">
            <p className="text-sm font-semibold text-black md:text-left text-center">Transform your space with AI room Design at your fingertips and make your lifestyle easy!!!!</p>
            <Link href={'/sign-in'}>
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
        <section className="mt-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center container">
              <Image src="/aiimage1.jpg" alt="AI Design 1" width={500} height={300} className="rounded-lg shadow-lg" />
              <p className="mt-4 text-center text-lg font-medium text-gray-700">Experience the future of interior design with our AI-powered tools that bring your vision to life.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/aiimage2.jpg" alt="AI Design 2" width={500} height={300} className="rounded-lg shadow-lg" />
              <p className="mt-4 text-center text-lg font-medium text-gray-700">Our AI technology helps you create stunning and personalized spaces effortlessly.</p>
            </div>
          </div>
        </section>
        <section className="mt-16 px-4 bg-gray-100 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800">Why Choose AI Interior Design?</h3>
            <p className="mt-4 text-lg text-gray-600">AI Interior Design offers a unique blend of creativity and technology, allowing you to design your dream space with ease and precision. Whether you're looking to revamp a single room or your entire home, our AI tools provide endless possibilities and inspiration.</p>
          </div>
        </section>
        <section className="mt-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Image src="/aiimage3.jpg" alt="Feature 1" width={300} height={200} className="rounded-lg shadow-lg" />
              <p className="mt-4 text-center text-lg font-medium text-gray-700">Personalized Designs</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/aiimage4.jpg" alt="Feature 2" width={300} height={200} className="rounded-lg shadow-lg" />
              <p className="mt-4 text-center text-lg font-medium text-gray-700">Time-Saving Solutions</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/aiimage5.jpg" alt="Feature 3" width={300} height={200} className="rounded-lg shadow-lg" />
              <p className="mt-4 text-center text-lg font-medium text-gray-700">Cost-Effective</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
