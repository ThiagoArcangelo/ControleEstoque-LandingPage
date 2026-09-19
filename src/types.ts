export interface ProductItem {
  id: string;
  name: string;
  quantity: number;
  category: string;
  minStock: number;
  status: 'in_stock' | 'low_stock' | 'critical';
  lastMovement?: string;
}

export interface StockMovement {
  id: string;
  productName: string;
  type: 'in' | 'out';
  quantity: number;
  date: string;
  reason?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
