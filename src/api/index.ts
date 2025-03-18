/* eslint-disable node/prefer-global/process */
/**
 * @title Website
 * @description The website API
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
export async function postUserVerify(body: Types.VerifyBody, config?: RequestInit) {
  const response = await fetch(`${baseURL}/user/verify`, {
    headers: { 'Content-Type': 'application/json' },
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
export async function getUserMe(config?: RequestInit) {
  const response = await fetch(`${baseURL}/user/me`, {
    ...config,
  })
  return response
}
