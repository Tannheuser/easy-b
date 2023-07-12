import { dbConnect } from '@/lib/mongoose';
import { BaseService } from './base-service';

export abstract class PeriodBasedService<T> extends BaseService<T> {
  public async getCurrentItems(): Promise<T[]> {
    return this.getItemsByPeriod("current");
  }

  public async getItemsByPeriod(period: string): Promise<T[]> {
    await dbConnect();
    const items = await this.model.find();

    return items;
  }

  public abstract addItem(item: T): Promise<T>;
}