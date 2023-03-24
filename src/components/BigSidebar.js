import Wrapper from '../assets/wrappers/BigSidebar'
import Logo from '../components/Logo'
import NavLinks from './NavLinks'
import { useSelector } from 'react-redux'

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'show-sidebar sidebar-container' : 'sidebar-container'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}
export default BigSidebar
