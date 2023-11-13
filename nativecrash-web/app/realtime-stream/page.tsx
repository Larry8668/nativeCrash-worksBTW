
import NavigationBar from '../Components/Miscellaneous/NavigationBar'
import Stream from './Stream.jsx'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start" data-theme="dark">
      <NavigationBar/>
      <Stream/>
    </main>
  )
}
