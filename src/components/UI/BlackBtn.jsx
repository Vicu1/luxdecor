import { Link } from 'react-router-dom';

const BlackBtn = ({ children, url }) => {
  return (
    <>
      {url && (
        <Link
          to={url}
          className={'black-btn'}
        >
          {children}
        </Link>
      )}
      {!url && <button className={'black-btn'}>{children}</button>}
    </>
  );
};
export default BlackBtn;
