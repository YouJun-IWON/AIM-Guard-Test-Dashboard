import AreaCard from './AreaCard';
import './AreaCards.scss';

const AreaCards = () => {
  return (
    <section className='content-area-cards'>
      <AreaCard
        colors={['#e4e8ef', '#4ce13f']}
        percentFillValue={90}
        cardInfo={{
          title: 'Todays LLM Status',
          value: 'Health 🟢',
          text: 'We have checked 143 errors.',
        }}
      />
      <AreaCard
        colors={['#e4e8ef', '#475be8']}
        percentFillValue={10}
        cardInfo={{
          title: 'Todays Toxic Input',
          value: '1.2K',
          text: 'Available to Production',
        }}
      />
      <AreaCard
        colors={['#e4e8ef', '#f29a2e']}
        percentFillValue={10}
        cardInfo={{
          title: 'Todays Toxic Output',
          value: '0.4K',
          text: 'Available to Production',
        }}
      />
    </section>
  );
};

export default AreaCards;
