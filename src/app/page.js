import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import BackgroundVideo from '@/components/BackgroundVideo'

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      <BackgroundVideo />
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </main>
  )
}

