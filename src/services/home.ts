import { http } from '@/utils/http'
import { BannerItem } from '@/types/home'
// 获取首页轮播图数据
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    data: {
      distributionSite: 1,
    },
  })
}
