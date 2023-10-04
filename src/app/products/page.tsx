'use client';
import LayoutContent from '@/components/layouts/layout_content_home/page';

import LayoutProductPage from '@/components/layouts/layout_cover_products_page/page';

import React from 'react';

export default function ProductsPage() {
  return (
    <>
      <LayoutContent>
        <LayoutProductPage>
          <div></div>
        </LayoutProductPage>
      </LayoutContent>
    </>
  );
}
