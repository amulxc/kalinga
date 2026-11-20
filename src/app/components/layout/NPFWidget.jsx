"use client";

import Script from "next/script";

const WIDGET_ID = "91df5911b269a8c3f63541c1f915d331";
const BASE_URL = "widgets.nopaperforms.com";

// Single widget instance per page load; creating a second one would append a duplicate popup.
let widgetInstance = null;

function initWidget() {
    if (widgetInstance || typeof NpfWidgetsInit === "undefined") return;
    widgetInstance = new NpfWidgetsInit({
        widgetId: WIDGET_ID,
        baseurl: BASE_URL,
        formTitle: "Feedback Form",
        titleColor: "#FF0033",
        backgroundColor: "#ddd",
        iframeHeight: "500px",
        buttonbgColor: "#972B28",
        buttonTextColor: "#FFF",
    });
}

function openPopup() {
    initWidget();
    widgetInstance?.showPopup(WIDGET_ID, BASE_URL);
}

export default function NPFWidget() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                .npf-sticky-button {
                    position: fixed !important;
                    right: 0 !important;
                    top: 50% !important;
                    /* Standard center-right vertical tab */
                    transform: rotate(-90deg) translate(50%, 0) !important;
                    transform-origin: bottom right !important;
                    background: #972B28 !important;
                    color: #FFF !important;
                    border: none !important;
                    padding: 8px 20px !important;
                    font-size: 16px !important;
                    font-weight: 500 !important;
                    letter-spacing: 2px !important;
                    border-radius: 10px 10px 0 0 !important;
                    cursor: pointer !important;
                    z-index: 2147483647 !important;
                    font-family: "plus jakarta sans",sans-serif !important;
                    white-space: nowrap !important;
                    display: block !important;
                    visibility: visible !important;
                }
                /* Ensure the form popup stays visible */
                .npfwpopup-wrapper,
                .npf-popup-modal,
                iframe[id*="modal"],
                [id*="npfWidget"] {
                    display: flex !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    z-index: 2147483647 !important;
                }
                /* Fit the popup to the viewport. The vendor gives the form iframe a fixed 500px
                   height inside a fixed, non-scrolling overlay, so on shorter screens the Submit
                   button falls below the fold with no way to reach it. Cap the iframe height so the
                   whole card fits; the form then scrolls inside its own iframe. */
                #popup-${WIDGET_ID} {
                    overflow-y: auto !important;
                }
                #popup-in-${WIDGET_ID} {
                    margin: 16px auto !important;
                    max-width: min(500px, calc(100vw - 32px)) !important;
                    padding: 16px 20px 20px !important;
                }
                #popup-message-${WIDGET_ID} iframe {
                    height: min(500px, calc(100vh - 110px)) !important;
                    height: min(500px, calc(100dvh - 110px)) !important;
                }
                /* Mobile adjustments */
                @media (max-width: 1024px) {
                    .npf-sticky-button {
                        z-index: 5 !important;
                        padding: 8px 16px !important;
                        font-size: 13px !important;
                    }
                }
                `
            }} />

            {/* The click is handled here rather than by the vendor script: npfwpopup.js binds
                its listener to whatever button exists at init time, so if React re-creates this
                node (e.g. after a hydration mismatch) that listener is lost and the button goes dead. */}
            <button
                type="button"
                className="npfWidgetButton npf-sticky-button"
                onClick={openPopup}
            >
                Enquire Now
            </button>

            <Script
                src="https://cdn.npfs.co/js/widget/npfwpopup.js"
                strategy="afterInteractive"
                onReady={initWidget}
            />
        </>
    );
}