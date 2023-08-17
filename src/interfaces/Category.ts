export interface ICategory {
  categoryId: number;
  name: string;
}

export interface ICategoriesState {
  categories: ICategory[];
  selectedCategoryId: number;
}
