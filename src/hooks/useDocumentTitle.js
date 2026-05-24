import { useEffect } from 'react';

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = 'Rayleigh Studios - Game Development Studio';
    };
  }, [title]);
}
