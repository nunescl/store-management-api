export type SaveProduct = {
  name: string;
  description: string;
};

export type SaveProductVariation = {
  description: string;
  size: string;
  quatity: number;
  product_id: string;
};

export type SaveProductPrices = {
  id: string;
  retail?: number;
  wholesale?: number;
};
