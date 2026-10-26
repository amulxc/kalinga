'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { getProxyPdfUrl } from '@/app/lib/pdfProxy';

// PDF.js needs browser APIs and must not be evaluated during server rendering.
const FlipbookModal = dynamic(() => import('./FlipbookModal'), { ssr: false });
const PdfSliderModal = dynamic(() => import('./PdfSliderModal'), { ssr: false });

const FlipbookContext = createContext(undefined);

export const FlipbookProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState('');
    const [title, setTitle] = useState('');
    const [sliderLimit, setSliderLimit] = useState(null);
    const [lockAfterInitialPages, setLockAfterInitialPages] = useState(false);

    const openFlipbook = useCallback((url, docTitle = '') => {
        setPdfUrl(getProxyPdfUrl(url) || url);
        setTitle(docTitle);
        setIsOpen(true);
    }, []);

    const openPdfSlider = useCallback((url, docTitle = '', sliderOptions = null) => {
        setPdfUrl(getProxyPdfUrl(url) || url);
        setTitle(docTitle);
        if (sliderOptions && typeof sliderOptions === 'object') {
            setSliderLimit(sliderOptions.limitPages ?? null);
            setLockAfterInitialPages(Boolean(sliderOptions.lockAfterInitialPages));
        } else {
            setSliderLimit(sliderOptions);
            setLockAfterInitialPages(false);
        }
        setIsSliderOpen(true);
    }, []);

    const closeFlipbook = useCallback(() => {
        setIsOpen(false);
        setIsSliderOpen(false);
    }, []);

    return (
        <FlipbookContext.Provider value={{ openFlipbook, openPdfSlider, closeFlipbook }}>
            {children}
            {isOpen && <FlipbookModal
                isOpen={isOpen}
                onClose={closeFlipbook}
                pdfUrl={pdfUrl}
                title={title}
            />}
            {isSliderOpen && <PdfSliderModal
                isOpen={isSliderOpen}
                onClose={closeFlipbook}
                pdfUrl={pdfUrl}
                title={title}
                limitPages={sliderLimit}
                lockAfterInitialPages={lockAfterInitialPages}
            />}
        </FlipbookContext.Provider>
    );
};

export const useFlipbook = () => {
    const context = useContext(FlipbookContext);
    if (!context) {
        throw new Error('useFlipbook must be used within a FlipbookProvider');
    }
    return context;
};
