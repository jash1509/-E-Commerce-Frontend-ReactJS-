import backpackImg from '../assets/products/backpack.png';
import tshirtImg from '../assets/products/tshirt.png';
import jacketImg from '../assets/products/jacket.png';
import braceletImg from '../assets/products/bracelet.png';
import ringImg from '../assets/products/ring.png';
import harddriveImg from '../assets/products/harddrive.png';
import monitorImg from '../assets/products/monitor.png';
import womensJacketImg from '../assets/products/womens_jacket.png';

const IMAGE_MAP = {
  // Men's clothing
  1: backpackImg,      // Foldsack No. 1 Backpack
  2: tshirtImg,        // Mens Casual Premium Slim Fit T-Shirts
  3: jacketImg,        // Mens Cotton Jacket
  4: tshirtImg,        // Mens Casual Slim Fit
  
  // Jewelery
  5: braceletImg,      // John Hardy Chain Bracelet
  6: ringImg,          // Solid Gold Petite Micropave
  7: ringImg,          // White Gold Plated Princess
  8: braceletImg,      // Pierced Owl Rose Gold Plated

  // Electronics
  9: harddriveImg,     // WD 2TB Elements Portable External Hard Drive
  10: harddriveImg,    // SanDisk SSD PLUS 1TB
  11: harddriveImg,    // Silicon Power 256GB SSD
  12: harddriveImg,    // WD 4TB Gaming Portable External Hard Drive
  13: monitorImg,      // Acer SB220Q bi 21.5 inches Full HD
  14: monitorImg,      // Samsung 49-Inch CHG90 144Hz Curved

  // Women's clothing
  15: womensJacketImg, // BIYLACLESEN Women's 3-in-1 Snow Mountain Jacket
  16: womensJacketImg, // Lock and Love Women's Removable Hooded Jacket
  17: womensJacketImg, // Rain Jacket Women Windbreaker
  18: tshirtImg,        // MBJ Women's Solid Short Sleeve Boat Neck V
  19: tshirtImg,        // Opna Women's Short Sleeve Moisture
  20: tshirtImg,        // DANVOUY Womens T Shirt Casual Cotton Short
};

export const getProductImage = (product) => {
  if (!product) return '';
  // Fall back to original image if mapping doesn't exist
  return IMAGE_MAP[product.id] || product.image;
};
