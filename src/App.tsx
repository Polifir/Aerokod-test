import { Card } from './widgets/card/Card'
import { Search } from './widgets/search/Search'
import { Create } from './widgets/create/Create'
import { ActiveTask } from './widgets/Active/Active'

function App() {
  return (
    <>
    <Create/>
    <ActiveTask/>
    <Search/>
    <Card/>
    </>
  )
}

export default App
