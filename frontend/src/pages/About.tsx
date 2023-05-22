import AboutImg from '../assets/about.png'

const classes ={
  title: 'text-2xl font-bold leading-[30px] tracking-[0.3px] mb-5 md:mb-[52px]',
  userCard: {
    title: 'semi-bold p-[12px] text-[19px] md:px-[0px] md:pt-[38px] md:pb-[27px] text-[#252733]',
    wrapper: 'overflow-auto flex flex-col md:flex-row',
  },
  desc: {
    wrapper: 'md:w-[524px] md:mr-[69px]',
    title: 'bold mt-[12px] mb-[20px] text-2xl md:mt-[0px]',
    p: 'mb-[20px]',
  },
  image: 'md:w-[497px] md:h-[344px]'
}

export const AboutPage = () => {
  return (
    <>
      <p className={classes.title}>About</p>
      <div className="flex flex-col md:flex-row-reverse justify-end">
        <img src={AboutImg} alt="about" className={classes.image}/>
        <div className={classes.desc.wrapper}>
          <div className={classes.desc.title}>Lorem ipsum dolor sit amet</div>
          <p className={classes.desc.p}>consectetur adipiscing elit. Nulla vel turpis turpis. Sed mauris mauris, aliquam sed ante ut, ullamcorper laoreet erat. Duis eu rutrum purus. Ut luctus bibendum tellus ut congue. Ut dolor nisi, maximus aliquam nulla sed, venenatis consequat arcu. Nulla hendrerit vehicula arcu. In consectetur, purus sed consequat posuere, orci nunc consequat ipsum, ut sodales urna massa at neque.</p>
          <p className={classes.desc.p}>Nulla eget tellus sodales, venenatis lacus eget, lobortis libero. Cras scelerisque metus non mi condimentum, ac lacinia enim fermentum. Sed arcu tortor, hendrerit a eros ac, eleifend porta enim. Suspendisse molestie enim quam, a maximus massa faucibus nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tortor odio, iaculis eget lobortis iaculis, tempor nec ante. Aliquam venenatis nisl at ipsum commod</p>
        </div>
      </div>
    </>
  )
}
