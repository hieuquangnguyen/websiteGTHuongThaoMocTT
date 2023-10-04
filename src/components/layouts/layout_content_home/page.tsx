import LayoutHome from '@/components/layouts/layout_cover_home/page';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import st from '@/styles/home.module.css';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <LayoutHome>
        <div className={st.content_Home}>{children}</div>
      </LayoutHome>
    </div>
  );
}
