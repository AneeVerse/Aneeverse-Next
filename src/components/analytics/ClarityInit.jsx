'use client';

import { useEffect } from 'react';

const CLARITY_PROJECT_ID = 'wu3xdddis7';

export default function ClarityInit() {
  useEffect(() => {
    let cancelled = false;
    import('@microsoft/clarity')
      .then(({ default: Clarity }) => {
        if (!cancelled) Clarity.init(CLARITY_PROJECT_ID);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
