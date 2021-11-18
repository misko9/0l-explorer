import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import classes from './navLayout.module.scss'
import Search from 'antd/lib/input/Search'
import { Spin } from 'antd'

interface NavLayoutProps {
  children: ReactNode | undefined 
}

const NavLayout = ({ children }: NavLayoutProps) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleSearch = async search => {
    console.log(search.length)
    setLoading(true)
    if (search.length === 32) {
      window.location.href = `/address/${search}`
    } else {
      const version = parseInt(search)
      if (!isNaN(version)) {
        window.location.href = `/tx/${search}`
      }
    }
  }
  const goHome = async () => {
    setLoading(true)
    await router.push(`/`)
    setLoading(false)
  }
  return <div>
    <div className={classes.navBarContainer}>
      <div className={classes.homeLink} onClick={goHome}>
      <span className={classes.title}>0L Explorer</span>
      </div>
      <Search size="large" className={classes.search} placeholder="Enter an address or tx version" onSearch={handleSearch}></Search>
    </div>
    <div className={classes.content}>
    {children}
    {loading && <div className={classes.spinContainer}><Spin /></div>}
    </div>
  </div>
}

export default NavLayout