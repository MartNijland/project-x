import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Menu from './components/menu'

export default function Home() {
  return (
    <>
      <Menu />
      <div className="bg-lime-300 w-screen h-screen"></div>
    </>
  )
}
