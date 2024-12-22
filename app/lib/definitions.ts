// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
};

export type Item = {
  storeName: string,
  productName: string,
  productUrl: string,
  imageUrl: string,
  productPrice: number,
  qtyNeeded: number,
  priority: number
}

export type Store = {
  label: string,
  value: string,
  registryLink: string,
  registryImage: string,
  index: number
}