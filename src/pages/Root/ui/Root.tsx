import { Outlet } from 'react-router-dom';

export const RootPage = () => {
  return (
    <div>
      <div>Root</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
