import PlanTable from "../components/PlanTable.jsx";
const Vpshosting = () => {
  const headers = ['Features', 'Standard','Classic','Professional'];
  const items = [
    {
      name: 'Processor',
      standard: '(Dual Core)',
      classic: '(Dual Core)',
      professional: '(Quad Core)'
    },
    {
      name: 'Memory',
      standard: '3 GB DDR Memory',
      classic: '6 GB DDR Memory',
      professional: '12 GB DDR Memory'
    },
    {
      name: 'Disk Storage',
      standard: '250 GB Hard Drive',
      classic: '2 x 250 GB Hard Drive',
      professional: '2 x 500 GB Hard Drives'
    },
    {
      name: 'Bandwidth',
      standard: '-',
      classic: '-',
      professional: '-'
    },
    {
      name: 'Dedicated IPs',
      standard: '-',
      classic: '-',
      professional: '-'
    },
  ]

  const prices = [
      '240€/year',
      '360€/year',
      '540€/year',
  ]
  return (
    <>
      <div className={'about'}>
        <div className={'about-bg'} />
        <h1 className={'container'} data-aos="zoom-in">VPS Hosting</h1>
      </div>
      <section className={'container hosting'}>
        <h1>VPS Hosting Plans</h1>
          <PlanTable headers={headers} items={items} prices={prices} />
      </section>
    </>
  );
};
export default Vpshosting;
