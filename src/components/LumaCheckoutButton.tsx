import React from 'react';

type Props = {
  eventId: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

// renders a Luma checkout button and loads the embed script once, no
// matter how many LumaCheckoutButton instances are mounted across the site
export class LumaCheckoutButton extends React.Component<Props> {
  componentDidMount() {
    if (!document.getElementById('luma-checkout')) {
      const script = document.createElement('script');
      script.id = 'luma-checkout';
      script.src = 'https://embed.lu.ma/checkout-button.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }

  render() {
    const {eventId, className, style, children} = this.props;
    return (
      <a
        href={`https://luma.com/event/${eventId}`}
        // "luma-checkout--button" must stay so the embed script can bind
        // its checkout behavior to this link
        className={['luma-checkout--button', className].filter(Boolean).join(' ')}
        style={style}
        data-luma-action={'checkout'}
        data-luma-event-id={eventId}
      >
        {children}
      </a>
    );
  }
}
