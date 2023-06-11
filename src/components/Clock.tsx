import { ChangeEvent, useEffect, useLayoutEffect, useState } from 'react';

const UPDATE_CYCLE = 1000;

const KYE_LOCALE = 'KEY_LOCALE';

enum Locale {
    US = 'en-US',
    JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
    switch (text) {
        case Locale.JP:
            return Locale.JP;
        case Locale.US:
            return Locale.US;
        default:
            return Locale.US;
    }
};

export const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date());
    const [locale, setLocale] = useState(Locale.US);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date());
        }, UPDATE_CYCLE);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useLayoutEffect(() => {
        const savedLocale = localStorage.getItem(KYE_LOCALE);
        if (savedLocale !== null) {
            setLocale(getLocaleFromString(savedLocale));
        }
        console.log('再読み込み');
    }, []);

    useEffect(() => {
        localStorage.setItem(KYE_LOCALE, locale);
    }, [locale]);

    return (
        <div>
            <p>
                <span id="current-time-label">現在時刻</span>
                <span>:{timestamp.toLocaleString(locale)}</span>
            </p>
            <p>
                <select
                    value={locale}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setLocale(getLocaleFromString(e.target.value))
                    }
                >
                    <option value="en-US">en_SU</option>
                    <option value="ja-JP">ja-JP</option>
                </select>
            </p>
        </div>
    );
};
