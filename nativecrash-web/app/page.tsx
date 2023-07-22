
import Introduction from './Components/HomeScreen/Introduction'
import NavigationBar from './Components/Miscellaneous/NavigationBar'
import MoreInfo from './Components/HomeScreen/MoreInfo'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start" data-theme="dark">
      <NavigationBar/>
      <Introduction />
      <MoreInfo/>
    </main>
  )
}
