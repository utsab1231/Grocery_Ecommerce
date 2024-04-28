
// for sliders response
export interface ResponseData{
    data:       Data;
    status:     number;
    statusText: string;
    headers:    WelcomeHeaders;
    config:     Config;
    request:    Request;
}

export interface Config {
    transitional:      Transitional;
    adapter:           string[];
    transformRequest:  null[];
    transformResponse: null[];
    timeout:           number;
    xsrfCookieName:    string;
    xsrfHeaderName:    string;
    maxContentLength:  number;
    maxBodyLength:     number;
    env:               Request;
    headers:           ConfigHeaders;
    baseURL:           string;
    params:            Params;
    method:            string;
    url:               string;
}

export interface Request {
}

export interface ConfigHeaders {
    Accept: string;
}

export interface Params {
    populate: string;
}

export interface Transitional {
    silentJSONParsing:   boolean;
    forcedJSONParsing:   boolean;
    clarifyTimeoutError: boolean;
}

export interface Data {
    data: DataDatum[];
    meta: Meta;
}

export interface DataDatum {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    name:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    type:        string;
    image:       Image;
}

export interface Image {
    data: ImageDatum[];
}

export interface ImageDatum {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name:              string;
    alternativeText:   null | string;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export enum EXT {
    JPEG = ".jpeg",
    Jpg = ".jpg",
}

export interface Formats {
    large:     Large;
    small:     Large;
    medium:    Large;
    thumbnail: Large;
}

export interface Large {
    ext:         EXT;
    url:         string;
    hash:        string;
    mime:        MIME;
    name:        string;
    path:        null;
    size:        number;
    width:       number;
    height:      number;
    sizeInBytes: number;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}

export interface WelcomeHeaders {
    "content-length": string;
    "content-type":   string;
}
// ---------------------------------> upto here for sliders response ----------------------------


// for products response 

interface ImageProduct {
    id: number;
    attributes: {
      name: string;
      alternativeText: null | string;
      caption: null | string;
      width: number;
      height: number;
      formats: {
        small: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: null | string;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
        thumbnail: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: null | string;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null | string;
      provider: string;
      provider_metadata: null;
      createdAt: string;
      updatedAt: string;
    };
  }
  
  interface Attribute {
    name: string;
    MRP: number;
    SellingPrice: number | null;
    productId: null;
    description: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    unit: string;
    Category: string;
    Image: {
      data: ImageProduct[];
    };
  }
  
  export interface ProductDatum {
    id: number;
    attributes: Attribute;
  }
  
  interface MetaProduct {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  }
  
  interface ProductData{
    data: ProductDatum[];
    meta: MetaProduct;
    

  
  }

  export interface ProductResponseData {
    data: ProductData;
    status:     number;
    statusText: string;
    headers:    WelcomeHeaders;
    config:     Config;
    request:    Request;
  }

// ---------------------------------> upto here for products response ----------------------------