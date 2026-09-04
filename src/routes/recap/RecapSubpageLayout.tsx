import React from 'react';
import {Link} from 'react-router-dom';
import {Footer} from '../../components/footer/Footer';

type Props = {
  // heading shown at the top of the subpage
  title: string
  // path the "back" link points to (the parent recap landing page)
  backTo: string
  // label for the "back" link
  backLabel?: string
  // footer background colour
  footerColor?: 'red' | 'blue'
  children: React.ReactNode
};

// RecapSubpageLayout is the shared shell for the individual recap subpages
// (event, team, jury, winners). It renders the "back to recap" link, the
// page title and a footer around the page specific content.
export function RecapSubpageLayout({
  title,
  backTo,
  backLabel = '← Zurück zum Recap',
  footerColor = 'blue',
  children,
}: Props) {
  return (
    <div className={'overflow-x-hidden min-h-screen flex flex-col bg-blue-1'}>

      <div className={'flex flex-col grow pt-8 mb-6 lg:mb-0 mt-20 ' +
        'tabletL:mt-24 xl:mt-28 relative'}>

        <Link to={backTo}
          className={'absolute top-24 left-6 tabletL:left-10 text-blue-12' +
            ' opacity-70 hover:opacity-100 transition-opacity text-sm ' +
            'font-medium'}>
          {backLabel}
        </Link>

        <div className={'py-6 pl-8 pr-10 md:mt-10 tabletL:px-12 ' +
          'lg:w-4/5 lg:mx-auto w-full'}>

          <h1 className={'py-8 mt-4 text-head-m lg:text-head-l font-bold'}>
            {title}
          </h1>

          <div className={'text-text-m md:text-text-l text-blue-12 ' +
            'leading-relaxed flex flex-col gap-5'}>
            {children}
          </div>

        </div>

      </div>

      <Footer backgroundColor={footerColor}/>

    </div>
  );
}
