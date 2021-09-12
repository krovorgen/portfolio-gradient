export type SliderContentType = {
  img: string;
  link: string;
  type?: 'local' | 'outside';
};

type NavigationClassType = {
  nextEl: string;
  prevEl: string;
};

export type PortfolioMockDataType = {
  title: string;
  navigationClass: NavigationClassType;
  sliderContent: SliderContentType[];
};
