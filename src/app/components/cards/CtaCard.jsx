const CtaCard = ({ Title, SubTitle, ImgUrl }) => {
  const ctaCardStyle = 'row-span-2 h-[91vh] w-full rounded-lg bg-pink-100 p-2 shadow-md'
  return (
    <div id='CTA-CARD' className={ctaCardStyle}>
      {Title}
    </div>
  )
}

export default CtaCard
