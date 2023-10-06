export interface Price {
  msrp: string;
  authorized_dealer: string;
  grey_market: string;
  used: string;
}

export interface Movement {
  type: string;
  name: string;
  power_reserve: string;
  frequency: string;
  jewels: string;
}

export interface BraceletStrap {
  type: string;
  material: string;
  color: string;
  clasp_quality: string;
  clasp_type: string;
  dive_extension: string;
}

export interface Dimensions {
  diameter: string;
  lug_to_lug: string;
  thickness: string;
  lug_width: string;
}

export interface Links {
  brand: string;
  authorized_dealers: string[];
  grey_market: string[];
  used: string[];
}

export interface WatchInfo {
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
  bezel_insert_material: string;
  bezel_insert_color: string;
  crystal: string;
  movement: Movement;
  bracelet_strap: BraceletStrap;
  date_window: string;
  day_window: string;
  dimensions: Dimensions;
  links: Links;
}
