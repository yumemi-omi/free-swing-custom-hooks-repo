import { useState, useEffect } from "react";

const MEDIA_INFO = {
	pc: "screen and (min-width: 769px)",
	tb: "screen and (min-width: 486px) and (max-width: 768px)",
	sp: "screen and (max-width: 485px)"
} as const;

type MediaInfoType = typeof MEDIA_INFO;

const useMedia = () => {
	const [media, setMedia] = useState({
		pc: false,
		tb: false,
		sp: false
	});

	useEffect(() => {
		const handler = (e: MediaQueryListEvent) => {
      const targetArray = Object.entries(MEDIA_INFO).find((val) => {
        const [_, value]= val
        return value === e.media
      })

      if (!targetArray?.[0]) return

			setMedia((prev) => ({
				...prev,
				[targetArray?.[0]]: e.matches
			}));
		};

		const keyArray = Object.keys(MEDIA_INFO) as (keyof MediaInfoType)[];
    const mediaQueryArray = keyArray.map(key => ({key, media: window.matchMedia(MEDIA_INFO[key])}))
    mediaQueryArray.forEach(item => {
      setMedia((prev) => ({
        ...prev,
        [item.key]: item.media.matches
      }));
      item.media.addEventListener('change', handler)
    })

		return () => {
      mediaQueryArray.forEach(item => {
        item.media.removeEventListener('change', handler)
      })
    }
	}, []);

	return {
		mediaIs: media
	};
};

export default useMedia;
