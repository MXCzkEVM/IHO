/**
 * @title Website
 * @description The website API
 * @swagger 3.0.0
 * @version 1.0
 */

export interface VerifyBody {
  message: string
  signature: string
}
export interface GetUserMeHeader {
  token: string
  [key: string]: any
}
