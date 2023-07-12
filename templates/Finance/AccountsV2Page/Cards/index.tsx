import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Image from '@/components/Image'

type CardsProps = {
  items: any
}

const Cards = ({ items }: CardsProps) => {
  return (
    <div className="mr-12 w-[21rem] 2xl:mx-auto">
      <Splide
        hasTrack={false}
        options={{
          arrows: false,
          gap: '1rem',
        }}
      >
        <SplideTrack>
          {items.map((card: any) => (
            <SplideSlide className="p-2" key={card.id}>
              <div className="shadow-primary-6 rounded-xl border border-n-1 bg-purple-1 px-6 pb-6 pt-3.5 text-white">
                <div className="absolute left-0 top-5 w-[6rem]">
                  <Image className="w-full" src="/images/bg-card.svg" width={90} height={151} alt="" />
                </div>
                <div className="relative z-1 mb-6 ml-auto flex w-7">
                  <Image
                    className="w-full"
                    src={`/images/${card.type === 'master-card' ? 'master-card' : 'visa'}.svg`}
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
                <div className="relative z-1 text-h4">{card.number}</div>
                <div className="relative z-1 mb-4 text-xs font-medium">Card number</div>
                <div className="relative z-1 flex">
                  <div className="mr-11">
                    <div className="mb-0.5 font-bold">{card.name}</div>
                    <div className="text-xs font-medium">Cardholder</div>
                  </div>
                  <div className="">
                    <div className="mb-0.5 font-bold">{card.date}</div>
                    <div className="text-xs font-medium">Valid</div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
        <ul className="splide__pagination splide__pagination-cards"></ul>
      </Splide>
    </div>
  )
}

export default Cards
