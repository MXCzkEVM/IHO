/**
 * @title Initial Hardware Offering
 * @description Moonchain Initial Hardware Offering (IHO) is a revolutionary mining concept combining cutting-edge hardware with your own decentralized wallet. We're offering mining hardware at no cost—just choose your desired Hardware, lock your Moonchain and start mining. It's never been easier or more rewarding to mine. Don't miss out—join the future of mining today!
 * @swagger 3.0.0
 * @version 1.0
 */

export interface VerifyDto {
  message: string;
  signature: string;
}
export interface Billing {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
}
export interface Shipping {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
}
export interface Customer {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  email: string;
  first_name: string;
  last_name: string;
  billing: Billing;
  shipping: Shipping;
  role: string;
  username: string;
  is_paying_customer: boolean;
  avatar_url: string;
  meta_data: string[];
  _links: string[];
}
export interface CustomerUpdateDto {
  date_created?: string;
  date_created_gmt?: string;
  date_modified?: string;
  date_modified_gmt?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  billing?: Billing;
  shipping?: Shipping;
  role?: string;
  username?: string;
  is_paying_customer?: boolean;
  avatar_url?: string;
  meta_data?: string[];
  _links?: string[];
}
export interface GetUserInspectHeader {
  token?: string;
  [key: string]: any;
}
export interface GetUserHeader {
  token?: string;
  [key: string]: any;
}
export interface PutUserHeader {
  token?: string;
  [key: string]: any;
}
