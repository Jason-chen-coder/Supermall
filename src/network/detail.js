import { request } from './request'
export function apiGoodDetail (iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}

export function apiGetCommend(){
  return request({
    url:"/recommend"
  })
}
// export class Commend{
//   constructor(commends){
//     this.title = commends.title
//     this.price = commends.price
//     this.cfav = commends.cfav
//     this.showimg = commends.image
//   }
// }

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newprice = itemInfo.price
    this.oldprice = itemInfo.oldPrice
    this.realprice = itemInfo.lowNowPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class Shop {
  constructor(shopinfo) {
    this.name = shopinfo.name
    this.logo = shopinfo.shopLogo
    this.url = shopinfo.shopUrl
    this.score = shopinfo.score
    this.goodscount = shopinfo.cGoods
    this.sells = shopinfo.cSells
  }
}

export class Goodsparams {
  constructor(itemParams) {
    this.goodinfo = itemParams.info
    this.goodrule = itemParams.rule
  }
}