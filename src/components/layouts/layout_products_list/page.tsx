'use client';
import st from '@/components/layouts/layout_products_list/layout_products_list.module.css';

export default function LayoutProductsList({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={st.container_products}>
        <div className={st.container_products_list} id="productList">
          <div className={st.product_item}>
            {children} {/* Hiển thị nội dung cho sản phẩm 1 */}
          </div>
        </div>
      </div>
    </>
  );
}
