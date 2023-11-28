export type VolumeCluster = {
  hex: string;
  n: number;
  freq: number;
  lab_L: number;
  lab_a: number;
  lab_b: number;
  rgb_R: number;
  rgb_G: number;
  rgb_B: number;
  hsv_H: number;
  hsv_S: number;
  hsv_V: number;
  nearest_color: {
    index: number;
    name: string;
    hex: string;
    delta_E: number;
  };
  nearest_colors: number[];
  tags: string[];
};

export type Volume = {
  volume: number;
  name: string;
  date: string;
  clusters: VolumeCluster[];
};
