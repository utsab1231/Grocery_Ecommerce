export type Attirbutes = {
  Category: string;
  Color: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Icon: Icon;
};

export type Icon = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      width: number;
      height: number;
      url: string;
    };
  }[];
};

export type DataValue = {
  id: number;
  attributes: Attirbutes;
};

export type Meta = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type Category = {
  data: { data: DataValue[] };
  meta: Meta;
};

import {
  ResponseData as SlidersResponseData,
  ProductResponseData,
} from "../_types/api";
import axios from "axios";
const axiosClient = axios.create({
  baseURL: "http://192.168.0.102:1337/api",
});

// if List is attached to the function it is for server side rendering
const getCategories = async () => {
  const response: Category = await axiosClient.get("/categories", {
    params: { populate: "*" },
  });
  return response.data.data;
};

const getCategoriesList = async () => {
  const response: Category = await axiosClient.get("/categories", {
    params: { populate: "*" },
  });
  return response.data.data;
};

const getSlidersList = async () => {
  try {
    const response: SlidersResponseData = await axiosClient.get("/sliders", {
      params: { populate: "*" },
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getProductList = async () => {
  const response: ProductResponseData = await axiosClient.get("/products", {
    params: { populate: "*" },
  });

  return response.data.data;
};

export default {
  getCategories,
  getSlidersList,
  getCategoriesList,
  getProductList,
};
