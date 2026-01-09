import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock, Phone } from 'lucide-react';

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

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-elegant">
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">{t('footer.address')}</h3>
            <p className="text-sm text-muted-foreground text-center">
              Porrassalmenkatu 15<br />
              50100 Mikkeli
            </p>
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
            <p className="text-sm text-muted-foreground text-center">
              015-213684<br />
              antilop@elisanet.fi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
