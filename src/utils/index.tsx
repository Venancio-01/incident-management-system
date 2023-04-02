import React, { Suspense } from 'react'

export const lazyLoad = (src: () => Promise<{ default: React.ComponentType<any> }>) => (
  <Suspense fallback={<div>Loading...</div>}>{React.createElement(lazy(src))}</Suspense>
)
