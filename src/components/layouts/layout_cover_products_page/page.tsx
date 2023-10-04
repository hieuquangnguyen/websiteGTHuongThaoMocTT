'use client'
import React from 'react';

import LayoutCategorizeProducts from '@/components/layouts/layout_categorize_products/page';
import st from '@/components/layouts/layout_cover_products_page/layout_product_page.module.css';
export default function LayoutProductPage({ children }: { children: React.ReactNode }) {
  return (
    <div className={st.cover_content_products}>
      <div className={st.menu_products}>
        <LayoutCategorizeProducts />
      </div>
      <div className={st.products_list}>{children}</div>
    </div>
  );
}
