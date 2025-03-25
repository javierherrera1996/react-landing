import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';
import ContactForm from './ContactForm';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-gradient-to-b from-neutral-900 to-neutral-800" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-12">
        <div className="flex flex-col items-center gap-y-4 text-center">
          <div className="rounded-full bg-orange-500/10 p-4">
            <EnvelopeIcon className="h-8 w-8 text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{headerText}</h2>
          <p className="max-w-2xl text-lg text-gray-300">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="order-2 col-span-1 md:order-1">
            <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm">
              <ContactForm />
            </div>
          </div>
          <div className="order-1 col-span-1 flex flex-col gap-y-8 md:order-2">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {items.map(({type, text, href}) => {
                const {Icon, srLabel} = ContactValueMap[type];
                return (
                  <div
                    key={srLabel}
                    className="group flex items-center gap-x-4 rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/10">
                    <div className="rounded-lg bg-orange-500/10 p-2">
                      <Icon className="h-5 w-5 text-orange-500" />
                    </div>
                    <a
                      className={classNames(
                        'flex-1 text-sm font-medium text-gray-300 transition-colors duration-300',
                        {'hover:text-orange-500': href},
                      )}
                      href={href}
                      target="_blank">
                      {text}
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-semibold text-white">Horario de atención</h3>
              <p className="text-sm text-gray-400">
                Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                Sábados: 9:00 AM - 1:00 PM<br />
                Domingos: Cerrado
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
