export interface ProductCardProps {
  image: string;
  name: string;
  sku?: string;
  brand?: string;
  price: number;
  discount?: number; // porcentaje, opcional
  onAddToCart?: () => void;
  onToggleFavorite?: () => void;
}
