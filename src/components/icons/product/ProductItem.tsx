import Image from 'next/image'
import Link from 'next/link'
import SmallStarIcon from './SmallStarIcon'
import EmptyHeartIcon from './EmptyHeartIcon'
import FilledHeartIcon from './FilledHeartIcon'

export default function ProductItem() {
  return (
    <>
      <li className="w-full relative">
        <Image
          src={'https://image.sivillage.com/upload/C00001/s3/goods/org/369/240814027642369.jpg?RS=450&SP=1'}
          alt="productImg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        {/* 상품 상세로 link */}
        <Link href={'/product-detail'} className="px-[8px] py-[16px] flex flex-col">
          <span className=" mb-[6px] text-[14px] font-[700] leading-[20px] tracking-[-0.08px]">BRAND</span>
          <span className="mb-[2px] text-[12px] leading-[18px] tracking-[-0.06px] text-[#404040] text-ellipsis">
            item name is displaied here
          </span>
          <span className="flex gap-[5px] justify-start">
            <span className="text-[12px] leading-[18px] tracking-[-0.06px] font-bold text-[#d99c63]">50%</span>
            <span className="text-[12px] leading-[18px] tracking-[-0.06px]">1,000,000</span>
          </span>
          <div className="flex items-center mt-[8px] text-[12px] leading-[14px]">
            <SmallStarIcon />
            <span className="ml-[4px]">5</span>
            <span className="ml-[2px] text-[#929292]">(9)</span>
          </div>
        </Link>
        <p className="pl-[8px] mt-[-8px] text-[12px] leading-[18px] font-bold text-[#d99c63]">신상</p>
        <button className="absolute top-[8px] right-[8px] z-10">
          <EmptyHeartIcon />
          {/* <FilledHeartIcon /> */}
        </button>
      </li>
    </>
  )
}
