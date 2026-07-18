import styles from '@/styles/Layout.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/pomer-dark.svg" 
            alt="لوگوی پومر" 
            width={120} // عرض لوگو - با توجه به فایل اصلیت می‌تونی کم و زیادش کنی
            height={40} // ارتفاع لوگو
            priority // به مرورگر میگه این عکس خیلی مهمه و همون اول لودش کن
          />
        </Link>
        <p className={styles.copyright}>
          © 2026 تمامی حقوق محفوظ است. نسل جدید ترمیم درزها.
        </p>
      </div>
    </footer>
  );
}