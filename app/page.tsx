import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, Clock, FileVideo } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-700">
      <div className="container mx-auto px-4 py-16">
        <section className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-white">Welcome to Quantify</h1>
            <p className="text-2xl mb-8 text-blue-200">The future of object counting is here</p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/register">Try Quantify for Free <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>

        <section id="what-is-quantify" className="mb-16 bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-3xl font-semibold mb-4 text-blue-200">What is Quantify?</h2>
          <p className="text-lg text-gray-300 mb-4">
            Quantify is an advanced AI-powered object counting solution that revolutionizes the way you analyze video content. Our cutting-edge technology allows you to:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Accurately count objects in videos</li>
            <li>Save time on manual counting processes</li>
            <li>Gain valuable insights from your video data</li>
            <li>Make data-driven decisions with confidence</li>
          </ul>
        </section>

        <section id="how-it-works" className="mb-16 bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-3xl font-semibold mb-4 text-blue-200">How Quantify Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <FileVideo className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-medium mb-2 text-white">1. Upload your video</h3>
              <p className="text-gray-300">Simply upload your video file to our secure platform.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BarChart2 className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-medium mb-2 text-white">2. AI Processing</h3>
              <p className="text-gray-300">Our advanced AI model analyzes the video content.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-medium mb-2 text-white">3. Receive Results</h3>
              <p className="text-gray-300">Get accurate object count results in minutes.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <ArrowRight className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-medium mb-2 text-white">4. Download Analysis</h3>
              <p className="text-gray-300">Download the analyzed video with object counts.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-16 bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-3xl font-semibold mb-4 text-blue-200">FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2 text-white">What file types are supported?</h3>
              <p className="text-gray-300">Quantify supports most common video formats, including MP4, AVI, and MOV. Our system is designed to handle a wide range of video qualities and resolutions.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-white">How accurate is the object counting?</h3>
              <p className="text-gray-300">Our AI model boasts an impressive accuracy rate of over 95% for most common objects. The accuracy may vary depending on video quality and object complexity.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-white">Is my data secure?</h3>
              <p className="text-gray-300">Absolutely. We prioritize the security and privacy of your data. All uploaded videos are encrypted and processed in a secure environment. We never share or sell your data to third parties.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}