import Card from './components/cards/Card'
import CtaCard from './components/cards/CtaCard'

export default function Home () {
  return (
    <main className='grid grid-rows-2 gap-2 bg-slate-300 p-3 min-[465px]:grid-cols-2 min-[800px]:grid-cols-3'>
      <CtaCard Title={'CTA-CARD'} />
      <Card Title={'Servicio 1'} />
      <Card Title={'Servicio 2'} />
      <Card Title={'Servicio 3'} />
      <Card Title={'Servicio 4'} />
    </main>
  )
}
