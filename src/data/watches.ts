export interface Watch {
  id: string;
  name: string;
  brand: string;
  imageUrl: string;
  price: string;
}

export const watches: Watch[] = [
  {
    id: '1',
    name: 'Submariner',
    brand: 'Rolex',
    imageUrl: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80',
    price: '$8,000+'
  },
  {
    id: '2',
    name: 'Royal Oak',
    brand: 'Audemars Piguet',
    imageUrl: 'https://images.unsplash.com/photo-1641069775832-f5d3c6fc8198?auto=format&fit=crop&q=80',
    price: '$30,000+'
  },
  {
    id: '3',
    name: 'Speedmaster',
    brand: 'Omega',
    imageUrl: 'https://images.unsplash.com/photo-1639078674158-e9f91e832d85?auto=format&fit=crop&q=80',
    price: '$6,000+'
  },
  {
    id: '4',
    name: 'Nautilus',
    brand: 'Patek Philippe',
    imageUrl: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80',
    price: '$35,000+'
  },
  {
    id: '5',
    name: 'Big Pilot',
    brand: 'IWC',
    imageUrl: 'https://images.unsplash.com/photo-1639078675407-4c6d3eef7a33?auto=format&fit=crop&q=80',
    price: '$12,000+'
  }
];