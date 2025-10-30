import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Офіційний дилер Škoda у Кременчуці — Нові автомобілі та з пробігом',
  description:
    'Купуйте нові автомобілі Škoda в Україні — офіційний автосалон у Кременчуці. Широкий вибір моделей та комплектацій, вигідні акції, кредит та лізинг, обмін за програмою Trade-in.',
};

export default function Home() {
  return <div className='text-skoda-emerald-green'>Головна</div>;
}
