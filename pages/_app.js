import '../styles/globals.css'
import {useEffect} from 'react'
function MyApp({Component,pageProps}){
  useEffect(()=>{
    try{
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      if(prefersDark) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    }catch(e){}
  },[])
  return <Component {...pageProps} />
}
export default MyApp
