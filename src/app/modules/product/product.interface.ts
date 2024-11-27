/* 

 * Interface representing a product (e.g., bike) in the inventory system.
 * 
 * This interface defines the structure for a product, which includes details such as:
 * - `name`: The name of the product.
 * - `brand`: The manufacturer or brand of the product.
 * - `price`: The price of the product in numeric form.
 * - `category`: The type of product, restricted to one of the predefined categories 
 *    ('Mountain', 'Road', 'Hybrid', 'Electric').
 * - `description`: A brief description of the product.
 * - `quantity`: The available stock of the product.
 * - `inStock`: A boolean indicating whether the product is currently in stock.
 * 
 * This interface can be used for modeling different types of products, with a focus 
 * on bikes in this example.
 */

// * Interface representing a product (e.g., bike) in the inventory system.

export interface IProduct {
  name: string;
  brand: string;
  price: number;
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric';
  description: string;
  quantity: number;
  inStock: boolean;
}
