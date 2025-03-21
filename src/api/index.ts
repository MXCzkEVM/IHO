/**
 * @title Initial Hardware Offering
 * @description Moonchain Initial Hardware Offering (IHO) is a revolutionary mining concept combining cutting-edge hardware with your own decentralized wallet. We're offering mining hardware at no cost—just choose your desired Hardware, lock your Moonchain and start mining. It's never been easier or more rewarding to mine. Don't miss out—join the future of mining today!
 * @swagger 3.0.0
 * @version 1.0
 */

import type * as Types from './index.type'

export const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

/**
 * @method get
 * @tags User
 */
export async function getUserNonce(config?: RequestInit) {
  const response = await fetch(`${baseURL}/user/nonce`, {
    ...config,
  })
  return response.text() as Promise<string>
}
/**
 * @method post
 * @tags User
 */
export async function postUserVerify(body: Types.VerifyDto, config?: RequestInit) {
  const response = await fetch(`${baseURL}/user/verify`, {
    method: 'post',
    body: JSON.stringify(body),
    ...config,
  })
  return response.text() as Promise<string>
}
/**
 * @method get
 * @tags User
 */
export async function getUserLogout(config?: RequestInit) {
  const response = await fetch(`${baseURL}/user/logout`, {
    ...config,
  })
  return response
}
/**
 * @method get
 * @tags User
 */
export async function getUserInspect(headers?: Types.GetUserInspectHeader, config?: RequestInit) {
  const response = await fetch(`${baseURL}/user/inspect`, {
    headers,
    ...config,
  })
  return response
}
/**
 * @method get
 * @tags User
 */
export async function getUser(headers?: Types.GetUserHeader, config?: RequestInit) {
  const response = await fetch(`${baseURL}/user`, {
    headers,
    ...config,
  })
  return response.json() as Promise<Types.Customer>
}
/**
 * @method put
 * @tags User
 */
export async function putUser(body: string, headers?: Types.PutUserHeader, config?: RequestInit) {
  const response = await fetch(`${baseURL}/user`, {
    method: 'put',
    body: JSON.stringify(body),
    headers,
    ...config,
  })
  return response
}
/**
 * @method get
 * @tags Product
 */
export async function getProduct(config?: RequestInit) {
  const response = await fetch(`${baseURL}/product`, {
    ...config,
  })
  return response.json() as Promise<any[]>
}
