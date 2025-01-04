import Link from "next/link"
import routes from "@consts/routes"

export default async function MainPage() {

  return (
      <div className="flex flex-center gap-16">
        <h1 className="text-primary text-[512px] font-BigShouldersDisplay">HI!</h1>
        <div className="flex flex-col gap-12 uppercase w-[640px]">
          <p className="text-white font-Iceland text-2xl">Welcome to by personal website.</p>
          <p className="text-white font-Iceland text-lg">I have created this website to feel like a game/sci-fi interface. All text inside tries to reflect this. </p>
          <p className="text-white font-Iceland text-lg">You will find ‘achievements’ or ‘quests’ that show the progress in my professional life and are related to what I am working on.</p>
          <Link href={routes.beginning.href} className="block px-12 py-3 border border-solid border-primary text-primary font-BigShouldersDisplay text-lg self-start">enter the system</Link>
        </div>
      </div>
  )
}