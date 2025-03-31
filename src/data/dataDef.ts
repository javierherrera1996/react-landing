import {StaticImageData} from 'next/image';
import {FC, ForwardRefExoticComponent, SVGProps, ReactNode} from 'react';

import {IconProps} from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl: string;
  twitterCardType: string;
  twitterSite: string;
  twitterCreator: string;
  twitterDomain: string;
}

/**
 * Hero section
 */
export interface Hero {
  imageSrc: string | StaticImageData;
  name: string;
  description: ReactNode;
  actions: {
    href: string;
    text: string;
    primary?: boolean;
    Icon?: React.ComponentType<{ className?: string }>;
  }[];
}

/**
 * About section
 */
export interface About {
  profileImageSrc: string | StaticImageData;
  description: string;
  aboutItems: {
    label: string;
    text: string;
    Icon?: React.ComponentType<{ className?: string }>;
  }[];
}

/**
 * Stat section
 */
export interface Stat {
  title: string;
  value: number;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * Skills section
 */

export interface Skill {
  name: string;
  level: number;
  max?: number;
}

export interface SkillGroup {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

/**
 * Portfolio section
 */
export interface PortfolioItem {
  title: string;
  description: string;
  url: string;
  image: string | StaticImageData;
}

/**
 * Resume section
 */
export interface TimelineItem {
  date: string;
  title: string;
  location: string;
  content: ReactNode;
}

/**
 * Testimonial section
 */
export interface TestimonialSection {
  imageSrc?: string | StaticImageData;
  testimonials: Testimonial[];
}

export interface Testimonial {
  image?: string;
  name: string;
  text: string;
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText: string;
  description: string;
  items: {
    type: string;
    text: string;
    href: string;
  }[];
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  Github: 'Github',
  LinkedIn: 'LinkedIn',
  Facebook: 'Facebook',
  Twitter: 'Twitter',
  Instagram: 'Instagram',
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon: FC<IconProps> | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  srLabel: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
}
