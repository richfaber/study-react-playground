import React from 'react';
import { Link } from 'react-router-dom';
import { getRouteMetaList } from '../router/routeMeta';

export default function Main() {
  const routes = getRouteMetaList();
  const list = routes.filter(r => r.path !== '/'); // 루트 자신 제외(원하면 제거)

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2>자동 생성 라우트 목록</h2>
      <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem' }}>
        {list.map(r => (
          <li key={r.file}>
            <Link to={r.path}>{r.path}</Link>
            <small style={{ marginLeft: 8, color: '#888' }}>{r.file}</small>
            {/:.+/.test(r.path) && (
              <em style={{ marginLeft: 6 }}>
                예시:&nbsp;
                <Link to={r.path.replace(/:([^/]+)/g, 'sample')}>
                  {r.path.replace(/:([^/]+)/g, 'sample')}
                </Link>
              </em>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}