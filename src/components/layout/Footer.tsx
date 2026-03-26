import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Linkedin, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/mock';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ethsun-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1 — About */}
          <div className="lg:col-span-1">
            <Image
              src="/images/seal-oxford.png"
              alt="ETHSUN Executive Education Oxford"
              width={64}
              height={64}
              className="h-16 w-auto mb-4 opacity-90"
            />
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              {t('description')}
            </p>
            <p className="text-xs text-ethsun-gold italic">
              {t('franchise')}
            </p>
          </div>

          {/* Col 2 — Programmes */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-ethsun-gold-light">
              {t('programmes')}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/programmes" className="hover:text-ethsun-gold transition-colors">{t('certPro')}</Link></li>
              <li><Link href="/programmes" className="hover:text-ethsun-gold transition-colors">{t('execCert')}</Link></li>
              <li><Link href="/e-learning" className="hover:text-ethsun-gold transition-colors">{t('elearning')}</Link></li>
              <li><Link href="/contact" className="hover:text-ethsun-gold transition-colors">{t('custom')}</Link></li>
              <li><Link href="/evenements/universite-tourisme" className="hover:text-ethsun-gold transition-colors">{t('seminars')}</Link></li>
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-ethsun-gold-light">
              {t('contactTitle')}
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white">Abidjan — Plateau</p>
                <p>{companyInfo.campuses[0].address}</p>
                <p>{companyInfo.campuses[0].phone}</p>
                <p>{companyInfo.campuses[0].email}</p>
              </div>
              <div>
                <p className="font-medium text-white">Oxford — Science Park</p>
                <p>{companyInfo.campuses[1].address}</p>
                <p>{companyInfo.campuses[1].email}</p>
              </div>
            </div>
          </div>

          {/* Col 4 — Follow */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-ethsun-gold-light">
              {t('followUs')}
            </h4>
            <div className="flex gap-3 mb-6">
              <a href={companyInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ethsun-gold transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={companyInfo.social.facebook} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ethsun-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={companyInfo.social.youtube} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ethsun-gold transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={companyInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-ethsun-gold italic">{t('motto')}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {year} ETHSUN Institute. {t('rights')}</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-white transition-colors">{t('legal')}</Link>
            <Link href="/contact" className="hover:text-white transition-colors">{t('privacy')}</Link>
          </div>
        </div>
      </div>

      {/* CI Flag bar */}
      <div className="ci-flag-bar" />
    </footer>
  );
}
