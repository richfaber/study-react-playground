import React from 'react';
import { Link } from 'react-router-dom';
import { getRouteMetaList } from '../router/routeMeta';

export default function Main() {

  const routes = getRouteMetaList();
  const list = routes.filter(r => r.path !== '/'); // 루트 자신 제외(원하면 제거)

  return (
    <div>
      <ul>
        {
          list.map(r => 
            {
              const displayName = r.file.replace(/^\.\.\/page\//, '');
              
              return (
                <li key={r.file}>
                  <Link to={r.path} target="_blank">{r.path}</Link>
                  <small style={{ marginLeft: 8, color: '#888' }}>{displayName}</small>
                </li>
              )
            }
          )
        }
      </ul>
    </div>
  );
}