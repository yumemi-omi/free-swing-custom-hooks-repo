import { useState, useEffect } from "react";

const MEDIA_QUERY_INFO = {
	pc: "screen and (min-width: 769px)",
	tb: "screen and (min-width: 486px) and (max-width: 768px)",
	sp: "screen and (max-width: 485px)"
} as const;

type MediaQueryInfoType = typeof MEDIA_QUERY_INFO;

const useDeviceScreen = () => {
	const [deviceScreen, setDeviceScreen] = useState({
		pc: false,
		tb: false,
		sp: false
	});

	useEffect(() => {
		const handler = (e: MediaQueryListEvent) => {
      const targetArray = Object.entries(MEDIA_QUERY_INFO).find((val) => {
        const [_, value]= val
        return value === e.media
      })

      if (!targetArray?.[0]) return

			setDeviceScreen((prev) => ({
				...prev,
				[targetArray?.[0]]: e.matches
			}));
		};

		const keyArray = Object.keys(MEDIA_QUERY_INFO) as (keyof MediaQueryInfoType)[];
    const mediaQueryArray = keyArray.map(key => ({key, media: window.matchMedia(MEDIA_QUERY_INFO[key])}))
    mediaQueryArray.forEach(item => {
      setDeviceScreen((prev) => ({
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
		deviceScreen
	};
};

export default useDeviceScreen;
