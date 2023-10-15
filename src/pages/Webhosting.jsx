import about from '../assets/images/about.png';
import { abilities } from '../static/abilities.js';
import PlanTable from "../components/PlanTable.jsx";
const Webhosting = () => {
  const headers = ['Features', 'Standard','Classic','Professional'];
  const headersTwo = ['Domain/FTP Features', 'Standard','Classic', 'Professional'];
  const headersThree = ['Email Features', 'Standard','Classic', 'Professional'];
  const items = [
    {
      name: 'Disk Storage',
      standard: 'Unlimited',
      classic: 'Unlimited',
      professional: 'Unlimited'
    },
    {
      name: 'Bandwidth',
      standard: 'Unlimited',
      classic: 'Unlimited',
      professional: 'Unlimited'
    },
    {
      name: 'Domains Allowed',
      standard: '1',
      classic: '5',
      professional: 'Unlimited'
    },
    {
      name: 'Free Dedicated IP',
      standard: '-',
      classic: '-',
      professional: 'Included'
    },
    {
      name: 'Free Private SSL',
      standard: '-',
      classic: '-',
      professional: 'Included'
    },
    {
      name: '45 Day Money Back Guarantee',
      standard: 'Included',
      classic: 'Included',
      professional: 'Included'
    },
  ]

  const itemsTwo = [
    {
      name: 'Websites & Domains Allowed',
      standard: '10',
      classic: '20',
      professional: '40'
    },
    {
      name: 'Addon / Parked Domains',
      standard: '-',
      classic: 'Unlimited',
      professional: 'Unlimited'
    },
    {
      name: 'FTP Accounts',
      standard: 'Unlimited',
      classic: 'Unlimited',
      professional: 'Unlimited'
    },
  ];
  const itemsTree = [
    {
      name: 'POP3 Accounts',
      standard: 'Unlimited',
      classic: 'Unlimited',
      professional: 'Unlimited'
    },
    {
      name: 'Web Mail',
      standard: 'Included',
      classic: 'Included',
      professional: 'Included'
    },
    {
      name: 'Mailing Lists',
      standard: 'Included',
      classic: 'Included',
      professional: 'Included'
    },
  ]

  const prices = [
      '180€',
      '240€',
      '340€',
  ]
  return (
    <>
      <div className={'about'}>
        <div className={'about-bg'} />
        <h1 className={'container'} data-aos="zoom-in">Web hosting</h1>
      </div>
      <section className={'container hosting'}>
        <h1>Shared Hosting Plans</h1>
          <PlanTable headers={headers} items={items} prices={prices} />
          <PlanTable headers={headersTwo} items={itemsTwo} />
          <PlanTable headers={headersThree} items={itemsTree} />
      </section>
    </>
  );
};
export default Webhosting;
