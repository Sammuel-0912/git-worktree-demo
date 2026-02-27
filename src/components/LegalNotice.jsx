import { useState } from 'react';

function LegalNotice() {
    const [visible, setVisible] = useState(() => {
        // Using a neutral key to bypass script-level blockers
        return !localStorage.getItem('privacy-ack-status');
    });

    const handleAccept = () => {
        localStorage.setItem('privacy-ack-status', 'confirmed');
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('privacy-ack-status', 'declined');
        setVisible(false);
    };

    return (
        <div
            className={`legal-banner${visible ? ' legal-banner--visible' : ''}`}
            role="dialog"
            aria-live="polite"
            aria-label="隱私與法律條款通知"
        >
            <div className="legal-banner__inner">
                <div className="legal-banner__content">
                    <div className="legal-banner__icon-wrap">
                        <span className="legal-banner__icon">🛡️</span>
                    </div>
                    <div className="legal-banner__text">
                        <p className="legal-banner__title">隱私權與條款更新</p>
                        <p className="legal-banner__desc">
                            我們致力於保護您的數據。繼續使用我們的服務，即表示您同意我們的
                            <a href="#" className="legal-banner__link">隱私政策</a> 與服務條款。
                        </p>
                    </div>
                </div>
                <div className="legal-banner__actions">
                    <button
                        className="legal-banner__btn legal-banner__btn--secondary"
                        onClick={handleDecline}
                    >
                        稍後再說
                    </button>
                    <button
                        className="legal-banner__btn legal-banner__btn--primary"
                        onClick={handleAccept}
                    >
                        我同意
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LegalNotice;
