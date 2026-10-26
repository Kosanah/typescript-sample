export interface Order { id: number; customer: string; total: number; paid: boolean;}

export function paidTotal(orders: Order[]): number {
  return orders.filter(o => o.paid).reduce((sum, o) => sum + o.total, 0);
}

export type OrderStatus = 'Paid' | 'Pending' | 'Cancelled';
