interface Price {
  msrp: string;
  authorized_dealer: string;
  grey_market: string;
  used: string;
}

interface Movement {
  type: string;
  name: string;
  power_reserve: string;
  frequency: string;
  jewels: string;
}

interface BraceletStrap {
  type: string;
  material: string;
  color: string;
  clasp_quality: string;
  clasp_type: string;
  dive_extension: string;
}

interface Dimensions {
  diameter: string;
  lug_to_lug: string;
  thickness: string;
}

interface Links {
  brand: string;
  authorized_dealers: string[];
  grey_market: string[];
  used: string[];
}

interface WatchInfo {
  id: string;
  name: string;
  brand: string;
  priority: string;
  notes: string;
  model_numbers: string[];
  price: Price;
  main_color: string;
  secondary_colors: string[];
  watch_style: string;
  water_resistance: string;
  rotating_bezel: string;
  material: string;
  material_bezel_insert: string;
  crystal: string;
  movement: Movement;
  bracelet_strap: BraceletStrap;
  date_window: string;
  day_window: string;
  dimensions: Dimensions;
  links: Links;
}

export default WatchInfo;
