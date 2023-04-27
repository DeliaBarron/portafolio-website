import { useState, createContext, useContext } from 'react'

const InfoContext = createContext()

function InfoContextProvider (props) {
  const [AboutMeInfo, setAboutMeInfo] = useState(true)
  const [cvInfo, setCVInfo] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    console.log(`you clicked:${e.target.value}`)
    if (e.target.value === 'about') {
      setAboutMeInfo(true)
      setCVInfo(false)
    } else {
      setCVInfo(true)
      setAboutMeInfo(false)
    }
  }

  const values = {
    handleClick,
    cvInfo,
    AboutMeInfo
  }
  return (
    <InfoContext.Provider value={values} {...props} />
  )
}
const useInfoContext = () => {
  const contex = useContext(InfoContext)
  return contex
}

export {
  useInfoContext,
  InfoContextProvider
}
