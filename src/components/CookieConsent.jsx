import { useState } from 'react';

function CookieConsent() {
    const [visible, setVisible] = useState(() => {
        return !localStorage.getItem('cookie-consent');
    });

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookie-consent', 'rejected');
        setVisible(false);
    };

    return (
        <div
            className={`cookie-consent${visible ? ' cookie-consent--visible' : ''}`}
            role="dialog"
            aria-live="polite"
            aria-label="Cookie 同意通知"
        >
            <div className="cookie-consent__inner">
                <div className="cookie-consent__content">
                    <p className="cookie-consent__icon" aria-hidden="true">🍪</p>
                    <div className="cookie-consent__text">
                        <p className="cookie-consent__title">我們使用 Cookie</p>
                        <p className="cookie-consent__desc">
                            我們使用 Cookie 來提升您的瀏覽體驗、分析網站流量並個人化內容。繼續使用本網站即表示您同意我們的 Cookie 政策。
                            <a href="#" className="cookie-consent__link">了解更多</a>
                        </p>
                    </div>
                </div>
                <div className="cookie-consent__actions">
                    <button
                        id="cookie-reject"
                        className="cookie-consent__btn cookie-consent__btn--reject"
                        onClick={handleReject}
                    >
                        拒絕
                    </button>
                    <button
                        id="cookie-accept"
                        className="cookie-consent__btn cookie-consent__btn--accept"
                        onClick={handleAccept}
                    >
                        接受全部
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
