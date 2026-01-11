import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock, Phone } from 'lucide-react';
import GoogleMap from './GoogleMap';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-secondary-foreground mb-8">
            {t('about.title')}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-4 font-body">
            {t('about.text1')}
          </p>
          <p className="text-lg text-muted-foreground mb-8 font-body">
            {t('about.text2')}
          </p>
          
          <p className="font-display text-2xl italic text-primary">
            {t('about.cta')}
          </p>
        </div>

        {/* Google Map */}
        <div className="mt-12 max-w-4xl mx-auto">
          <GoogleMap />
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-elegant">
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">{t('footer.address')}</h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Porrassalmenkatu+15,+50100+Mikkeli,+Finland"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground text-center hover:text-primary transition-colors"
            >
              Porrassalmenkatu 15<br />
              50100 Mikkeli
            </a>
          </div>

          <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-elegant">
            <Clock className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">{t('footer.hours')}</h3>
            <p className="text-sm text-muted-foreground text-center">
              {t('footer.weekdays')}<br />
              {t('footer.saturday')}
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-elegant">
            <Phone className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">{t('footer.contact')}</h3>
            <div className="text-sm text-muted-foreground text-center">
              <a
                href="tel:015213684"
                className="block hover:text-primary transition-colors"
              >
                015-213684
              </a>
              <a
                href="mailto:antilop@elisanet.fi"
                className="block hover:text-primary transition-colors"
              >
                antilop@elisanet.fi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
