export type NavLink = {
  readonly id: number;
  readonly text: string;
  readonly href?: string;
  readonly sublinks?: readonly {
    readonly id: number;
    readonly text: string;
    readonly href: string;
  }[];
};

export const NAVIGATION_LINKS: readonly NavLink[] = [
  { id: 1, text: 'Головна', href: '/' },
  { id: 2, text: 'Trade In', href: '/trade-in' },
  { id: 3, text: 'Кредитування', href: '/credit' },
  {
    id: 4,
    text: 'Моделі',
    sublinks: [
      { id: 41, text: 'Octavia', href: '/octavia' },
      { id: 42, text: 'Superb', href: '/superb' },
      { id: 43, text: 'Kodiaq', href: '/kodiaq' },
      { id: 44, text: 'Karoq', href: '/karoq' },
      { id: 45, text: 'Kamiq', href: '/kamiq' },
      { id: 46, text: 'Enyaq', href: '/enyaq' },
      { id: 47, text: 'Scala', href: '/scala' },
      { id: 48, text: 'Fabia', href: '/fabia' },
    ],
  },
  { id: 5, text: 'Авто на складі', href: '/stock-cars' },
  { id: 6, text: 'Клієнти', href: '/clients' },
  { id: 7, text: 'Контакти', href: '/contacts' },
] as const;
