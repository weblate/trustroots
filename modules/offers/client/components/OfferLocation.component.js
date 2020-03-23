// External dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Internal dependencies
import Map from '@/modules/core/client/components/Map/index';
import OfferLocationOverlay from './OfferLocationOverlay';

export default function OfferLocation({
  location,
  offerStatus,
  offerType,
  showMapStyles,
}) {
  if (!location || location.length !== 2) {
    return null;
  }

  return (
    <Map
      aria-hidden
      className="offer-location"
      height={320}
      location={location}
      width="100%"
      zoom={11}
      showMapStyles={showMapStyles}
    >
      <OfferLocationOverlay
        location={location}
        offerType={offerType}
        offerStatus={offerStatus}
      />
    </Map>
  );
}

OfferLocation.propTypes = {
  location: PropTypes.arrayOf(PropTypes.number).isRequired,
  offerStatus: PropTypes.string,
  offerType: PropTypes.string,
  showMapStyles: PropTypes.bool,
};
