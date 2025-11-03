// 라우트 메타 생성 유틸

// Vite 동적 import (코드 스플리팅)
const modules = import.meta.glob('../page/**/*.{jsx,tsx}', { eager: false });

// 제외 규칙
function shouldInclude(path) {
  if (/(?:^|\/)_/.test(path)) return false;    // 세그먼트가 _ 로 시작
  if (/__ignore/.test(path)) return false;    // __ignore 포함
  return true;
}

// 파일 경로 → URL
function pathFromFile(filePath) {
  const withoutPrefix = filePath.replace(/^\.\.\/page\//, '');
  const withoutExt = withoutPrefix.replace(/\.(jsx|tsx)$/, '');
  const segments = withoutExt
    .split('/')
    .map(seg => {
      if (/^\[.+\]$/.test(seg)) return ':' + seg.slice(1, -1); // [id] → :id
      if (/^index$/i.test(seg)) return '';                     // index.* → 상위
      return seg;                                              // 변환 없음
    })
    .filter(Boolean);
  const routePath = '/' + segments.join('/');
  return routePath === '/' ? '/' : routePath;
}

// 라우트 메타 목록
function getRouteMetaList() {
  return Object.entries(modules)
    .filter(([file]) => shouldInclude(file))
    .map(([file, loader]) => {
      const path = pathFromFile(file);
      return { file, path, loader };
    })
    .filter((item, idx, arr) => arr.findIndex(i => i.path === item.path) === idx)
    .sort((a, b) => a.path.localeCompare(b.path));
}

export { modules, shouldInclude, pathFromFile, getRouteMetaList };