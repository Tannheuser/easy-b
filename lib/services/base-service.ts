import { Model } from 'mongoose';

export abstract class BaseService<T> {
  constructor(protected model: Model<T>) {
  }

  public async getItems(): Promise<T[]> {
    const items = await this.model.find();

    return items;
  }

  public abstract addItem(item: T): Promise<T>;
}