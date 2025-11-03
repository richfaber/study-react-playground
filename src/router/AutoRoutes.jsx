import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getRouteMetaList } from './routeMeta';

export default function AutoRoutes() {
  const meta = getRouteMetaList();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {meta.map(m => {
          const Component = React.lazy(m.loader);
          return <Route key={m.file} path={m.path} element={<Component />} />;
        })}
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Suspense>
  );
}