import Introduction from '../Components/Dashboard/Introduction'
import NavigationBar from '../Components/Miscellaneous/NavigationBar'
import Information from '../Components/Dashboard/Information'
import Statistics from '../Components/Dashboard/Statistics'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start" data-theme="dark">
      <NavigationBar />
      <Introduction />
      <Information/>
    </main>
  )
}
