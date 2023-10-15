import PlanTable from "../components/PlanTable.jsx";
const DedicatedServer = () => {
  const headers = ['Features', 'Standard','Classic','Professional'];
  const items = [
    {
      name: 'Processor',
      standard: 'Intel Xeon E3 (4 Cores)',
      classic: 'Intel Xeon E5 (8 Cores)',
      professional: 'Intel Xeon E5 (12 Cores)'
    },
    {
      name: 'Memory',
      standard: '16 GB DDR4 Memory',
      classic: '32 GB DDR4 Memory',
      professional: '64 GB DDR4 Memory'
    },
    {
      name: 'Disk Storage',
      standard: '2 x 256 GB SSD',
      classic: '2 x 512 GB SSDs',
      professional: '2 x 1000 GB SSDs'
    },
    {
      name: 'Bandwidth',
      standard: '10,000 GB (10TB)',
      classic: '20,000 GB (20TB)',
      professional: '30,000 GB (30TB)'
    },
    {
      name: 'Dedicated IPs',
      standard: '5',
      classic: '10',
      professional: '15'
    },
  ]

  const prices = [
      '200€',
      '400€',
      '600€',
  ]
  return (
    <>
      <div className={'about'}>
        <div className={'about-bg'} />
        <h1 className={'container'} data-aos="zoom-in">Dedicated Servers</h1>
      </div>
      <section className={'container hosting'}>
        <h1>Dedicated Servers Plans</h1>
          <PlanTable headers={headers} items={items} prices={prices} />
      </section>
    </>
  );
};
export default DedicatedServer;
