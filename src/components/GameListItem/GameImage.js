import { useCallback, useEffect, useState } from 'react';

const placeholder =
  'https://place-hold.it/500x500/808080/#fff&text=No%20Image&fontsize=15';

export default function GameImage({ item }) {
  const [src, setSrc] = useState(placeholder);

  const source = item.media.find((i) => i.role === 'MASTER').url;

  const img = document.createElement('img');

  const hadleLoad = useCallback(() => {
    setSrc(source);
  }, [source]);

  const hadleError = useCallback(() => {
    setSrc(placeholder);
  }, []);

  useEffect(() => {
    const loadImg = img.addEventListener('load', hadleLoad);
    const errorImg = img.addEventListener('onerror', hadleError);
    img.src = source;
    return () => {
      img.removeEventListener('load', loadImg);
      img.removeEventListener('onerror', errorImg);
    };
  }, [hadleLoad, hadleError, source, img]);

  return <img alt={item.name} src={src} />;
}
