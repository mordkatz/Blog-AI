import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import puppeteer from 'puppeteer-core';

const ClearCache = () => {
  useEffect(() => {
    const clearCache = async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto('about:blank');
      await page.evaluate(() => {
        window.location.reload();
      });

      await browser.close();

      toast.success('Browser cache cleared!', { autoClose: 3000 });
    };

    clearCache();
  }, []);

  return (
    <div>
      <ToastContainer />
      <div>Clearing browser cache...</div>
    </div>
  );
};

export default ClearCache;
