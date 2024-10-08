import { checkWishByBrandAction, getBrandListAction } from '@/actions/brand/getBrandListData'
import BrandFilterBar from '@/components/brand/BrandFilterBar'
import BrandList from '@/components/brand/BrandList'
import BrandSearchBar from '@/components/brand/BrandSearchBar'

export default async function Brand({ searchParams }: { searchParams: { language: string } }) {
  const brandListDatas = await getBrandListAction()
  const wishCheckArr = await checkWishByBrandAction()

  return (
    <main>
      <BrandSearchBar />
      <BrandFilterBar language={searchParams.language} />
      <BrandList brandListDatas={brandListDatas} wishCheckArr={wishCheckArr} language={searchParams.language} />
    </main>
  )
}
