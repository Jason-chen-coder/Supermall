import { request } from '../network/request'
export function apiGetAllClass () {
  return request({
    url: "/category",
    method: "GET"
  })
}
export function apiGetClassGoods (key) {
  return request({
    url: "/subcategory",
    method: 'GET',
    params: {
      maitKey: key
    }
  })
}