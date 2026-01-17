import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <span className="logo-script text-3xl text-bronze-light">Vaatekauppa</span>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Naisten palveleva kenkäkauppa Mikkelissä vuodesta 2001.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              {t('footer.address')}
            </h4>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <p>Porrassalmenkatu 11</p>
                <p>50100 Mikkeli</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              {t('footer.contact')}
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:015-213684" className="hover:text-primary-foreground transition-colors">
                  015-213684
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@vaatekauppa.fi" className="hover:text-primary-foreground transition-colors">
                  info@vaatekauppa.fi
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              {t('footer.hours')}
            </h4>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
              <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <p>{t('footer.weekdays')}</p>
                <p>{t('footer.saturday')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Vaatekauppa. {t('footer.rights')}
          </p>
          
          {/* Tax Free Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded">
            <div className="text-center">
              <div className="text-xs font-semibold text-blue-400">Global Blue</div>
              <div className="text-xs font-bold text-primary-foreground">TAX FREE</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
