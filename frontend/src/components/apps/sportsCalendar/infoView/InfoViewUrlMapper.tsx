const mapping: Record<string, string> = {
  "coresports_ppv": "https://www.coresports.world/",
  "tennistv": "https://www.tennistv.com/",
  "tennis_tv": "https://www.tennistv.com/"
};

export const mapToUrl = (channel: string) => {
  return mapping[channel];
};

export const hasMapping = (channel: string) => {
  return channel in mapping;
};
